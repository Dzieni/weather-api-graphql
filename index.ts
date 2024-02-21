import express from "express";
import { createYoga } from "graphql-yoga";
import { schema } from "./graphql/schema.ts";
import { WeatherApiClient, createClient } from "./weatherApi/client.ts";
import { caching, Cache } from "cache-manager";

const cache = await caching("memory", { ttl: 60 * 60 * 1000 });
const weatherApi = createClient(
	process.env.WEATHERAPI_KEY!,
	process.env.WEATHERAPI_BASE_URL,
	{ cacheManager: cache }
);

const app = express();

const yoga = createYoga({
	schema,
	context: { weatherApi, cache },
});
app.use(yoga.graphqlEndpoint, yoga);

app.listen(3000, () => {
	console.log("Running a GraphQL API server at http://localhost:3000/graphql");
});
