export const WeatherConditionAllFields = /* GraphQL */ `
	fragment WeatherConditionAllFields on WeatherCondition {
		text
		iconUrl
		code
	}
`;

export const AirQualityAllFields = /* GraphQL */ `
	fragment AirQualityAllFields on AirQuality {
		co
		no2
		o3
		so2
		pm2_5
		pm10
		epaIndex
		defraIndex
	}
`;

export const AstroForecastAllFields = /* GraphQL */ `
	fragment AstroForecastAllFields on AstroForecast {
		sunrise
		sunset
		moonrise
		moonset
		moonPhase
		moonIllumination
	}
`;

export const LocationAllFields = /* GraphQL */ `
	fragment LocationAllFields on Location {
		name
		region
		country
		latitude
		longitude
		timeZone
		localTime
	}
`;

export const WeatherResultAllFields = /* GraphQL */ `
	fragment WeatherResultAllFields on WeatherResult {
		cloud
		condition {
			...WeatherConditionAllFields
		}
		feelsLike(unit: C)
		humidity
		isDay
		precipitation(unit: MM)
		pressure(unit: HPA)
		temperature(unit: C)
		uvIndex
		visibility(unit: KM)
		windDegree
		windDirection
		windGust(unit: KPH)
		windSpeed(unit: KPH)
	}
`;

export const WeatherCurrentAllFields = /* GraphQL */ `
	fragment WeatherCurrentAllFields on WeatherCurrent {
		...WeatherResultAllFields
		airQuality {
			...AirQualityAllFields
		}
		updatedAt
	}
`;

export const DayWeatherForecastAllFields = /* GraphQL */ `
	fragment DayWeatherForecastAllFields on DayWeatherForecast {
		maxTemperature(unit: C)
		minTemperature(unit: C)
		avgTemperature(unit: C)
		maxWind(unit: KPH)
		totalPrecipitation(unit: MM)
		avgVisibility(unit: KM)
		avgHumidity
		willItRain
		chanceOfRain
		willItSnow
		chanceOfSnow
		condition {
			...WeatherConditionAllFields
		}
		uvIndex
	}
`;

export const HourWeatherForecastAllFields = /* GraphQL */ `
	fragment HourWeatherForecastAllFields on HourWeatherForecast {
		...WeatherResultAllFields
		dewPoint(unit: C)
		heatIndex(unit: C)
		willItRain
		chanceOfRain
		willItSnow
		chanceOfSnow
		windChill(unit: C)
		localTime
	}
`;

export const WeatherForecastAllFields = /* GraphQL */ `
	fragment WeatherForecastAllFields on WeatherForecast {
		date
		day {
			...DayWeatherForecastAllFields
		}
		hour {
			...HourWeatherForecastAllFields
		}
		astro {
			...AstroForecastAllFields
		}
	}
`;
