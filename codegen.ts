import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "./graphql/schema.graphql",
	generates: {
		"./graphql/__resolverTypes__.ts": {
			config: {
				scalars: {
					LocationQuery: "string",
					Date: "string",
					LocalDate: "string",
					URL: "string",
					LocalDateTime: "string",
					TimeZone: "string",
				},
				mappers: {
					Location: "WeatherApi['schemas']['location']",
					WeatherCondition:
						"NonNullable<WeatherApi['schemas']['current']['condition']>",
					AirQuality:
						"NonNullable<WeatherApi['schemas']['current']['air_quality']>",
					WeatherCurrent: "NonNullable<WeatherApi['schemas']['current']>",
					DayWeatherForecast:
						"NonNullable<NonNullable<WeatherApi['schemas']['forecast']['forecastday']>[number]['day']>",
					HourWeatherForecast:
						"NonNullable<NonNullable<WeatherApi['schemas']['forecast']['forecastday']>[number]['hour']>[number]",
					WeatherForecast:
						"NonNullable<WeatherApi['schemas']['forecast']['forecastday']>[number]",
					AstroForecast:
						"NonNullable<NonNullable<WeatherApi['schemas']['forecast']['forecastday']>[number]['astro']>",
				},
			},
			plugins: [
				{
					add: {
						content:
							"import {components as WeatherApi} from '../weatherApi/__types__.ts';",
					},
				},
				"typescript",
				"typescript-resolvers",
			],
		},
	},
};
export default config;
