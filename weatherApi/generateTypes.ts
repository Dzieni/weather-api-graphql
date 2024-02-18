import openapiTS from "openapi-typescript";
import fs from "node:fs/promises";
import { format } from "prettier";

const SCHEMA_URL =
	process.env.OPENAPI_SCHEMA_URL ||
	"https://api.swaggerhub.com/apis/WeatherAPI.com/WeatherAPI/1.0.2";

// convert swagger 2.0 to openapi 3.0
// todo: consider using https://www.npmjs.com/package/swagger2openapi
const convertedSchemaUrl = new URL("https://converter.swagger.io/api/convert");
convertedSchemaUrl.searchParams.set("url", SCHEMA_URL);

const types = await openapiTS(convertedSchemaUrl);

await fs.writeFile(
	new URL("./__types__.ts", import.meta.url).pathname,
	await format(types, {
		parser: "typescript",
	})
);
