import createOpenApiClient, { ClientOptions, Middleware } from "openapi-fetch";
import type { paths } from "./__types__.ts";
import { caching } from "cache-manager";

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

export const createClient = (
	apiKey: string,
	baseUrl: string = DEFAULT_BASE_URL,
	options?: Omit<ClientOptions, "baseUrl">
) => {
	const client = createOpenApiClient<paths>({
		...options,
		baseUrl,
	});

	client.use(authMiddleware(apiKey));

	return client;
};

const memoryCache = await caching("memory", {
	max: 100,
	ttl: 10 * 1000 /*milliseconds*/,
});
