import { GraphQLError } from "graphql";
import {
	CardinalDirection,
	PrecipitationUnit,
	PressureUnit,
	Resolvers,
	SpeedUnit,
	TemperatureUnit,
	VisibilityUnit,
} from "./__resolverTypes__.ts";
import type { WeatherApiClient } from "../weatherApi/client.ts";
import {
	DateTimeResolver,
	LocalDateResolver,
	LocalTimeResolver,
	TimeZoneResolver,
	URLResolver,
} from "graphql-scalars";

type AllUnits =
	| TemperatureUnit
	| SpeedUnit
	| PrecipitationUnit
	| PressureUnit
	| VisibilityUnit;

const unitAliases: Record<AllUnits, string> = {
	[PrecipitationUnit.Inch]: "in",
	[PrecipitationUnit.Mm]: "mm",
	[PressureUnit.Hpa]: "mb",
	[PressureUnit.InchHg]: "in",
	[PressureUnit.Mb]: "mb",
	[SpeedUnit.Kph]: "kph",
	[SpeedUnit.Mph]: "mph",
	[TemperatureUnit.C]: "c",
	[TemperatureUnit.F]: "f",
	[VisibilityUnit.Km]: "km",
	[VisibilityUnit.Miles]: "miles",
};

const unitResolver =
	<Field extends string, Unit extends AllUnits>(origFieldName: Field) =>
	// todo: type root so it complains if origFieldName doesn't exist
	(root: any, { unit }: { unit: Unit }) => {
		return root[`${origFieldName}_${unitAliases[unit]}`] as number;
	};

const localTimeResolver =
	<Field extends string>(origFieldName: Field) =>
	(root: { [F in Field]?: string }) => {
		const result = root[origFieldName]?.split(" ").at(1);
		if (!result) return null;
		if (result.length === 4) return `0${result}`;
		return result;
	};

const numericBoolResolver =
	<Field extends string>(origFieldName: Field) =>
	(root: { [F in Field]?: number }) =>
		typeof root[origFieldName] === "number" ? !!root[origFieldName] : null;

export const resolvers: Resolvers<{ weatherApi: WeatherApiClient }> = {
	// Scalars
	// TODO: add a resolver for LocationQuery

	DateTime: DateTimeResolver,
	LocalTime: LocalTimeResolver,
	LocalDate: LocalDateResolver,
	URL: URLResolver,
	TimeZone: TimeZoneResolver,

	// Types and interfaces
	WeatherResult: {
		__resolveType: (root) => {
			if ("time" in root) return "HourWeatherForecast";
			return "WeatherCurrent";
		},
		feelsLike: unitResolver("feelslike"),
		isDay: numericBoolResolver("is_day"),
		precipitation: unitResolver("precip"),
		pressure: unitResolver("pressure"),
		temperature: unitResolver("temp"),
		uvIndex: (root) => root.uv ?? null,
		visibility: unitResolver("vis"),
		windDegree: (root) => root.wind_degree ?? null,
		windDirection: (root) => (root.wind_dir as CardinalDirection) ?? null,
		windGust: unitResolver("gust"),
		windSpeed: unitResolver("wind"),
	},
	WeatherCurrent: {
		airQuality: (root) => root.air_quality ?? null,
		updatedAt: (root) => new Date(root.last_updated_epoch! * 1000),
	},
	HourWeatherForecast: {
		dewPoint: unitResolver("dewpoint"),
		heatIndex: unitResolver("heatindex"),
		willItRain: numericBoolResolver("will_it_rain"),
		chanceOfRain: (root) => root.chance_of_rain ?? null,
		willItSnow: numericBoolResolver("will_it_snow"),
		chanceOfSnow: (root) => root.chance_of_rain ?? null,
		windChill: unitResolver("windchill"),
		localTime: localTimeResolver("time"),
	},
	DayWeatherForecast: {
		maxTemperature: unitResolver("maxtemp"),
		minTemperature: unitResolver("mintemp"),
		avgTemperature: unitResolver("avgtemp"),
		maxWind: unitResolver("maxwind"),
		totalPrecipitation: unitResolver("totalprecip"),
		avgVisibility: unitResolver("avgvis"),
		avgHumidity: (root) => root.avghumidity ?? null,
		willItRain: numericBoolResolver("daily_will_it_rain"),
		chanceOfRain: (root) => root.daily_chance_of_rain ?? null,
		willItSnow: numericBoolResolver("daily_will_it_snow"),
		chanceOfSnow: (root) => root.daily_chance_of_snow ?? null,
	},
	AstroForecast: {
		moonPhase: (root) => root.moon_phase ?? null,
		moonIllumination: (root) => root.moon_illumination ?? null,
	},
	WeatherCondition: {
		iconUrl: (root) => (root.icon ? `https:${root.icon}` : null),
	},
	AirQuality: {
		epaIndex: (root) => root["us-epa-index"] ?? null,
		defraIndex: (root) => root["gb-defra-index"] ?? null,
	},
	Location: {
		localTime: localTimeResolver("localtime"),
		timeZone: (root) => root.tz_id ?? null,
		latitude: (root) => root.lat ?? null,
		longitude: (root) => root.lon ?? null,
	},

	// Operations
	// TODO: DRY the error handling
	Query: {
		weatherCurrent: async (_, { q, lang }, { weatherApi }) => {
			const apiResult = await weatherApi.GET("/current.json", {
				params: {
					query: {
						q,
						lang: lang ?? undefined,
						aqi: "yes",
					},
				},
			});
			if (apiResult.error) {
				// yup, error.error 🙈
				// todo: check, it might've happened due to oas 2.0 -> 3.0 conversion
				const error = (apiResult.error as any).error as typeof apiResult.error;
				throw new GraphQLError(error.message!, {
					extensions: { code: error.code },
				});
			}
			const { location, current } = apiResult.data;
			return { location, weather: current };
		},
		weatherForecast: async (_, { q, lang, date }, { weatherApi }) => {
			const apiResult = await weatherApi.GET("/forecast.json", {
				// days are hardcoded cause they don't seem to work :(
				// see fixtures
				params: { query: { q, lang: lang ?? undefined, days: 1, dt: date } },
			});
			if (apiResult.error) {
				// yup, error.error 🙈
				// todo: check, it might've happened due to oas 2.0 -> 3.0 conversion
				const error = (apiResult.error as any).error as typeof apiResult.error;
				throw new GraphQLError(error.message!, {
					extensions: { code: error.code },
				});
			}
			const { location, forecast } = apiResult.data;
			return { location, weather: forecast?.forecastday };
		},
		weatherHistory: async (_, { q, lang, date, dateEnd }, { weatherApi }) => {
			const apiResult = await weatherApi.GET("/history.json", {
				params: {
					query: {
						q,
						lang: lang ?? undefined,
						dt: date,
						end_dt: dateEnd ?? undefined,
					},
				},
			});
			if (apiResult.error) {
				// yup, error.error 🙈
				// todo: check, it might've happened due to oas 2.0 -> 3.0 conversion
				const error = (apiResult.error as any).error as typeof apiResult.error;
				throw new GraphQLError(error.message!, {
					extensions: { code: error.code },
				});
			}
			const { location, forecast: history } = apiResult.data;
			return { location, weather: history?.forecastday };
		},
	},
};
