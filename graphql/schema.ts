import fs from "node:fs/promises";
import { createSchema } from "graphql-yoga";
import { resolvers } from "./resolvers.ts";

export const schema = createSchema({
	typeDefs: (
		await fs.readFile(new URL(`./schema.graphql`, import.meta.url).pathname)
	).toString(),
	resolvers,
	inheritResolversFromInterfaces: true,
});
