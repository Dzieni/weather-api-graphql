import { afterAll, beforeAll, expect, test, vi } from "vitest";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";
import { schema } from "./schema.ts";
import { createClient } from "../weatherApi/client.ts";
import { buildHTTPExecutor } from "@graphql-tools/executor-http";
import { parse } from "graphql";
import {
	AirQualityAllFields,
	AstroForecastAllFields,
	DayWeatherForecastAllFields,
	HourWeatherForecastAllFields,
	LocationAllFields,
	WeatherConditionAllFields,
	WeatherCurrentAllFields,
	WeatherForecastAllFields,
	WeatherResultAllFields,
} from "./fragments.ts";
import { AddressInfo } from "net";
import weatherCurrentFixture from "../weatherApi/__fixtures__/current.json";
import weatherForecastFixture from "../weatherApi/__fixtures__/forecast.json";
import weatherHistoryFixture from "../weatherApi/__fixtures__/history.json";

// the goal was to use undici's MockAgent
// but a mismatch between native fetch and undici fetch version was a mayhem
let mockedStatus = 200;
let mockedResponse: any = null;
const mockedServer = createServer((_, res) => {
	res.writeHead(mockedStatus, { "Content-Type": "application/json" });
	res.end(JSON.stringify(mockedResponse));
});
await mockedServer.listen();

const { address, port } = mockedServer.address() as AddressInfo;
const weatherApi = createClient("someApiKey", `http://[${address}]:${port}`);

const yoga = createYoga({
	schema,
	context: {
		weatherApi,
	},
});

const executor = buildHTTPExecutor({
	fetch: yoga.fetch,
});

function assertSingleValue<TValue extends object>(
	value: TValue | AsyncIterable<TValue>
): asserts value is TValue {
	if (Symbol.asyncIterator in value) {
		throw new Error("Expected single value");
	}
}

beforeAll(async () => {});
afterAll(async () => {
	await mockedServer.close();
});

test("weatherCurrent: basic", async () => {
	mockedResponse = weatherCurrentFixture.result;
	const res = await executor({
		document: parse(/* GraphQL */ `
			query {
				weatherCurrent(q: "Warsaw") {
					location {
						...LocationAllFields
					}
					weather {
						...WeatherCurrentAllFields
					}
				}
			}
			${LocationAllFields}
			${WeatherCurrentAllFields}
			${WeatherResultAllFields}
			${AirQualityAllFields}
			${WeatherConditionAllFields}
		`),
	});
	assertSingleValue(res);
	expect(res.errors).toBeFalsy();
	expect(res.data).toMatchSnapshot();
});

test("weatherForecast: basic", async () => {
	mockedResponse = weatherForecastFixture.result;
	const res = await executor({
		document: parse(/* GraphQL */ `
			query {
				weatherForecast(q: "Warsaw", date: "2024-02-28") {
					location {
						...LocationAllFields
					}
					weather {
						...WeatherForecastAllFields
					}
				}
			}
			${LocationAllFields}
			${WeatherForecastAllFields}
			${AstroForecastAllFields}
			${DayWeatherForecastAllFields}
			${HourWeatherForecastAllFields}
			${WeatherConditionAllFields}
			${WeatherResultAllFields}
		`),
	});
	assertSingleValue(res);
	expect(res.errors).toBeFalsy();
	expect(res.data).toMatchSnapshot();
});

test("weatherHistory: basic", async () => {
	mockedResponse = weatherHistoryFixture.result;
	const res = await executor({
		document: parse(/* GraphQL */ `
			query {
				weatherHistory(q: "Warsaw", date: "2024-02-01", dateEnd: "2024-02-04") {
					location {
						...LocationAllFields
					}
					weather {
						...WeatherForecastAllFields
					}
				}
			}
			${LocationAllFields}
			${WeatherForecastAllFields}
			${AstroForecastAllFields}
			${DayWeatherForecastAllFields}
			${HourWeatherForecastAllFields}
			${WeatherConditionAllFields}
			${WeatherResultAllFields}
		`),
	});
	assertSingleValue(res);
	expect(res.errors).toBeFalsy();
	expect(res.data).toMatchSnapshot();
});
