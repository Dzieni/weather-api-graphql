import express from "express";
import { createYoga } from "graphql-yoga";
import { schema } from "./graphql/schema.ts";
import { createClient } from "./weatherApi/client.ts";
import { caching } from "cache-manager";
import oidc from "express-openid-connect";
import { useGenericAuth } from "@envelop/generic-auth";

const PORT = Number(process.env.PORT || 3000);

const cache = await caching("memory", { ttl: 60 * 60 * 1000 });
const weatherApi = createClient(
	process.env.WEATHERAPI_KEY!,
	process.env.WEATHERAPI_BASE_URL,
	{ cacheManager: cache }
);

const app = express();

// adds /login, /logout, /callback
app.use(
	oidc.auth({
		authRequired: false,
		auth0Logout: true,
		secret: process.env.OIDC_COOKIE_SECRET,
		baseURL: process.env.BASE_URL || `http://localhost:${PORT}`,
		clientID: process.env.OIDC_CLIENT_ID,
		issuerBaseURL: process.env.OIDC_ISSUER_BASE_URL,
	})
);

const yoga = createYoga<{ req: Express.Request }>({
	schema,
	context: ({ req }) => ({ weatherApi, cache, user: req.oidc.user }),
	plugins: [
		useGenericAuth({
			resolveUserFn: ({ user }) => user,
			mode: "protect-all",
		}),
	],
});
app.use(yoga.graphqlEndpoint, yoga);

app.listen(PORT, () => {
	console.log(
		`Running a GraphQL API server at http://localhost:${PORT}/graphql`
	);
});
