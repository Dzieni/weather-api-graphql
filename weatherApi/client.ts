import createOpenApiClient, {
	ClientMethod,
	ClientOptions,
	Middleware,
} from "openapi-fetch";
import type { paths } from "./__types__.ts";
import { Cache, WrapTTL } from "cache-manager";
import stableStringify from "json-stable-stringify";

export const DEFAULT_BASE_URL = "https://api.weatherapi.com/v1";
export type WeatherApiClient = ReturnType<typeof createClient>;

const authMiddleware = (apiKey: string): Middleware => {
	if (!apiKey) throw new Error("API key is required");
	return {
		onRequest: (req) => {
			const url = new URL(req.url);
			url.searchParams.set("key", apiKey);
			return new Request(url, req as RequestInit);
		},
	};
};

const defaultTtl: WrapTTL<Awaited<ReturnType<ClientMethod<paths, "get">>>> = ({
	response,
	error,
}) => {
	if (error) return 0;

	if (response.url.includes("/current.json")) {
		return 1 * 60 * 1000; // 1 minute;
	}

	if (response.url.includes("/history.json")) {
		return 60 * 60 * 1000; // 1 hour;
	}

	return 15 * 60 * 1000; // 15 minutes;
};

export const createClient = (
	apiKey: string,
	baseUrl: string = DEFAULT_BASE_URL,
	options?: Omit<ClientOptions, "baseUrl"> & {
		cacheManager?: Cache;
		ttl?: typeof defaultTtl;
	}
) => {
	const { cacheManager, ttl = defaultTtl, ...restOptions } = options ?? {};
	const client = createOpenApiClient<paths>({
		...restOptions,
		baseUrl,
	});

	client.use(authMiddleware(apiKey));

	if (cacheManager) {
		const origGet = client.GET;
		client.GET = ((...args: Parameters<typeof origGet>) => {
			const [endpoint, options] = args;
			const cacheKey = stableStringify([endpoint, options.params]);
			return cacheManager.wrap(
				cacheKey,
				() => origGet.apply(client, args),
				ttl
			);
		}) as typeof origGet;
	}

	return client;
};
