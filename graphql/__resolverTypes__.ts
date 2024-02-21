import { components as WeatherApi } from "../weatherApi/__types__.ts";
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  LocalDate: { input: string; output: string };
  LocalTime: { input: any; output: any };
  LocationQuery: { input: string; output: string };
  TimeZone: { input: string; output: string };
  URL: { input: string; output: string };
};

export type AirQuality = {
  __typename?: "AirQuality";
  co?: Maybe<Scalars["Float"]["output"]>;
  defraIndex?: Maybe<Scalars["Int"]["output"]>;
  epaIndex?: Maybe<Scalars["Int"]["output"]>;
  no2?: Maybe<Scalars["Float"]["output"]>;
  o3?: Maybe<Scalars["Float"]["output"]>;
  pm2_5?: Maybe<Scalars["Float"]["output"]>;
  pm10?: Maybe<Scalars["Float"]["output"]>;
  so2?: Maybe<Scalars["Float"]["output"]>;
};

export type AstroForecast = {
  __typename?: "AstroForecast";
  moonIllumination?: Maybe<Scalars["String"]["output"]>;
  moonPhase?: Maybe<Scalars["String"]["output"]>;
  moonrise?: Maybe<Scalars["String"]["output"]>;
  moonset?: Maybe<Scalars["String"]["output"]>;
  sunrise?: Maybe<Scalars["String"]["output"]>;
  sunset?: Maybe<Scalars["String"]["output"]>;
};

export enum CardinalDirection {
  E = "E",
  Ene = "ENE",
  Ese = "ESE",
  N = "N",
  Ne = "NE",
  Nne = "NNE",
  Nnw = "NNW",
  Nw = "NW",
  S = "S",
  Se = "SE",
  Sse = "SSE",
  Ssw = "SSW",
  Sw = "SW",
  W = "W",
  Wnw = "WNW",
  Wsw = "WSW",
}

export type DayWeatherForecast = {
  __typename?: "DayWeatherForecast";
  avgHumidity?: Maybe<Scalars["Float"]["output"]>;
  avgTemperature?: Maybe<Scalars["Float"]["output"]>;
  avgVisibility?: Maybe<Scalars["Float"]["output"]>;
  chanceOfRain?: Maybe<Scalars["Float"]["output"]>;
  chanceOfSnow?: Maybe<Scalars["Float"]["output"]>;
  condition?: Maybe<WeatherCondition>;
  maxTemperature?: Maybe<Scalars["Float"]["output"]>;
  maxWind?: Maybe<Scalars["Float"]["output"]>;
  minTemperature?: Maybe<Scalars["Float"]["output"]>;
  totalPrecipitation?: Maybe<Scalars["Float"]["output"]>;
  uvIndex?: Maybe<Scalars["Int"]["output"]>;
  willItRain?: Maybe<Scalars["Boolean"]["output"]>;
  willItSnow?: Maybe<Scalars["Boolean"]["output"]>;
};

export type DayWeatherForecastAvgTemperatureArgs = {
  unit: TemperatureUnit;
};

export type DayWeatherForecastAvgVisibilityArgs = {
  unit: VisibilityUnit;
};

export type DayWeatherForecastMaxTemperatureArgs = {
  unit: TemperatureUnit;
};

export type DayWeatherForecastMaxWindArgs = {
  unit: SpeedUnit;
};

export type DayWeatherForecastMinTemperatureArgs = {
  unit: TemperatureUnit;
};

export type DayWeatherForecastTotalPrecipitationArgs = {
  unit: PrecipitationUnit;
};

export type HourWeatherForecast = WeatherResult & {
  __typename?: "HourWeatherForecast";
  chanceOfRain?: Maybe<Scalars["Float"]["output"]>;
  chanceOfSnow?: Maybe<Scalars["Float"]["output"]>;
  cloud?: Maybe<Scalars["Float"]["output"]>;
  condition?: Maybe<WeatherCondition>;
  dewPoint?: Maybe<Scalars["Float"]["output"]>;
  feelsLike?: Maybe<Scalars["Float"]["output"]>;
  heatIndex?: Maybe<Scalars["Float"]["output"]>;
  humidity?: Maybe<Scalars["Float"]["output"]>;
  isDay?: Maybe<Scalars["Boolean"]["output"]>;
  localTime?: Maybe<Scalars["LocalTime"]["output"]>;
  precipitation?: Maybe<Scalars["Float"]["output"]>;
  pressure?: Maybe<Scalars["Float"]["output"]>;
  temperature?: Maybe<Scalars["Float"]["output"]>;
  uvIndex?: Maybe<Scalars["Int"]["output"]>;
  visibility?: Maybe<Scalars["Float"]["output"]>;
  willItRain?: Maybe<Scalars["Boolean"]["output"]>;
  willItSnow?: Maybe<Scalars["Boolean"]["output"]>;
  windChill?: Maybe<Scalars["Float"]["output"]>;
  windDegree?: Maybe<Scalars["Float"]["output"]>;
  windDirection?: Maybe<CardinalDirection>;
  windGust?: Maybe<Scalars["Float"]["output"]>;
  windSpeed?: Maybe<Scalars["Float"]["output"]>;
};

export type HourWeatherForecastDewPointArgs = {
  unit: TemperatureUnit;
};

export type HourWeatherForecastFeelsLikeArgs = {
  unit: TemperatureUnit;
};

export type HourWeatherForecastHeatIndexArgs = {
  unit: TemperatureUnit;
};

export type HourWeatherForecastPrecipitationArgs = {
  unit: PrecipitationUnit;
};

export type HourWeatherForecastPressureArgs = {
  unit: PressureUnit;
};

export type HourWeatherForecastTemperatureArgs = {
  unit: TemperatureUnit;
};

export type HourWeatherForecastVisibilityArgs = {
  unit: VisibilityUnit;
};

export type HourWeatherForecastWindChillArgs = {
  unit: TemperatureUnit;
};

export type HourWeatherForecastWindGustArgs = {
  unit: SpeedUnit;
};

export type HourWeatherForecastWindSpeedArgs = {
  unit: SpeedUnit;
};

export enum LanguageCode {
  Ar = "ar",
  Bg = "bg",
  Bn = "bn",
  Cs = "cs",
  Da = "da",
  De = "de",
  El = "el",
  Es = "es",
  Fi = "fi",
  Fr = "fr",
  Hi = "hi",
  Hu = "hu",
  It = "it",
  Ja = "ja",
  Jv = "jv",
  Ko = "ko",
  Mr = "mr",
  Nl = "nl",
  Pa = "pa",
  Pl = "pl",
  Pt = "pt",
  Ro = "ro",
  Ru = "ru",
  Si = "si",
  Sk = "sk",
  Sr = "sr",
  Sv = "sv",
  Ta = "ta",
  Te = "te",
  Tr = "tr",
  Uk = "uk",
  Ur = "ur",
  Vi = "vi",
  Zh = "zh",
  ZhCmn = "zh_cmn",
  ZhHsn = "zh_hsn",
  ZhTw = "zh_tw",
  ZhWuu = "zh_wuu",
  ZhYue = "zh_yue",
  Zu = "zu",
}

export type Location = {
  __typename?: "Location";
  country?: Maybe<Scalars["String"]["output"]>;
  latitude?: Maybe<Scalars["Float"]["output"]>;
  localTime?: Maybe<Scalars["LocalTime"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  region?: Maybe<Scalars["String"]["output"]>;
  timeZone?: Maybe<Scalars["TimeZone"]["output"]>;
};

export enum PrecipitationUnit {
  Inch = "INCH",
  Mm = "MM",
}

export enum PressureUnit {
  Hpa = "HPA",
  InchHg = "INCH_HG",
  Mb = "MB",
}

export type Query = {
  __typename?: "Query";
  weatherCurrent?: Maybe<WeatherCurrentQueryResult>;
  weatherForecast?: Maybe<WeatherForecastQueryResult>;
  weatherHistory?: Maybe<WeatherForecastQueryResult>;
};

export type QueryWeatherCurrentArgs = {
  lang?: InputMaybe<LanguageCode>;
  q: Scalars["LocationQuery"]["input"];
};

export type QueryWeatherForecastArgs = {
  date: Scalars["LocalDate"]["input"];
  lang?: InputMaybe<LanguageCode>;
  q: Scalars["LocationQuery"]["input"];
};

export type QueryWeatherHistoryArgs = {
  date: Scalars["LocalDate"]["input"];
  dateEnd?: InputMaybe<Scalars["LocalDate"]["input"]>;
  lang?: InputMaybe<LanguageCode>;
  q: Scalars["LocationQuery"]["input"];
};

export enum SpeedUnit {
  Kph = "KPH",
  Mph = "MPH",
}

export enum TemperatureUnit {
  C = "C",
  F = "F",
}

export enum VisibilityUnit {
  Km = "KM",
  Miles = "MILES",
}

export type WeatherCondition = {
  __typename?: "WeatherCondition";
  code?: Maybe<Scalars["Int"]["output"]>;
  iconUrl?: Maybe<Scalars["URL"]["output"]>;
  text?: Maybe<Scalars["String"]["output"]>;
};

export type WeatherCurrent = WeatherResult & {
  __typename?: "WeatherCurrent";
  airQuality?: Maybe<AirQuality>;
  cloud?: Maybe<Scalars["Float"]["output"]>;
  condition?: Maybe<WeatherCondition>;
  feelsLike?: Maybe<Scalars["Float"]["output"]>;
  humidity?: Maybe<Scalars["Float"]["output"]>;
  isDay?: Maybe<Scalars["Boolean"]["output"]>;
  precipitation?: Maybe<Scalars["Float"]["output"]>;
  pressure?: Maybe<Scalars["Float"]["output"]>;
  temperature?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  uvIndex?: Maybe<Scalars["Int"]["output"]>;
  visibility?: Maybe<Scalars["Float"]["output"]>;
  windDegree?: Maybe<Scalars["Float"]["output"]>;
  windDirection?: Maybe<CardinalDirection>;
  windGust?: Maybe<Scalars["Float"]["output"]>;
  windSpeed?: Maybe<Scalars["Float"]["output"]>;
};

export type WeatherCurrentFeelsLikeArgs = {
  unit: TemperatureUnit;
};

export type WeatherCurrentPrecipitationArgs = {
  unit: PrecipitationUnit;
};

export type WeatherCurrentPressureArgs = {
  unit: PressureUnit;
};

export type WeatherCurrentTemperatureArgs = {
  unit: TemperatureUnit;
};

export type WeatherCurrentVisibilityArgs = {
  unit: VisibilityUnit;
};

export type WeatherCurrentWindGustArgs = {
  unit: SpeedUnit;
};

export type WeatherCurrentWindSpeedArgs = {
  unit: SpeedUnit;
};

export type WeatherCurrentQueryResult = {
  __typename?: "WeatherCurrentQueryResult";
  location?: Maybe<Location>;
  weather?: Maybe<WeatherCurrent>;
};

export type WeatherForecast = {
  __typename?: "WeatherForecast";
  astro?: Maybe<AstroForecast>;
  date?: Maybe<Scalars["LocalDate"]["output"]>;
  day?: Maybe<DayWeatherForecast>;
  hour?: Maybe<Array<Maybe<HourWeatherForecast>>>;
};

export type WeatherForecastQueryResult = {
  __typename?: "WeatherForecastQueryResult";
  location?: Maybe<Location>;
  weather?: Maybe<Array<Maybe<WeatherForecast>>>;
};

export type WeatherResult = {
  cloud?: Maybe<Scalars["Float"]["output"]>;
  condition?: Maybe<WeatherCondition>;
  feelsLike?: Maybe<Scalars["Float"]["output"]>;
  humidity?: Maybe<Scalars["Float"]["output"]>;
  isDay?: Maybe<Scalars["Boolean"]["output"]>;
  precipitation?: Maybe<Scalars["Float"]["output"]>;
  pressure?: Maybe<Scalars["Float"]["output"]>;
  temperature?: Maybe<Scalars["Float"]["output"]>;
  uvIndex?: Maybe<Scalars["Int"]["output"]>;
  visibility?: Maybe<Scalars["Float"]["output"]>;
  windDegree?: Maybe<Scalars["Float"]["output"]>;
  windDirection?: Maybe<CardinalDirection>;
  windGust?: Maybe<Scalars["Float"]["output"]>;
  windSpeed?: Maybe<Scalars["Float"]["output"]>;
};

export type WeatherResultFeelsLikeArgs = {
  unit: TemperatureUnit;
};

export type WeatherResultPrecipitationArgs = {
  unit: PrecipitationUnit;
};

export type WeatherResultPressureArgs = {
  unit: PressureUnit;
};

export type WeatherResultTemperatureArgs = {
  unit: TemperatureUnit;
};

export type WeatherResultVisibilityArgs = {
  unit: VisibilityUnit;
};

export type WeatherResultWindGustArgs = {
  unit: SpeedUnit;
};

export type WeatherResultWindSpeedArgs = {
  unit: SpeedUnit;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  WeatherResult:
    | NonNullable<
        NonNullable<
          WeatherApi["schemas"]["forecast"]["forecastday"]
        >[number]["hour"]
      >[number]
    | NonNullable<WeatherApi["schemas"]["current"]>;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AirQuality: ResolverTypeWrapper<
    NonNullable<WeatherApi["schemas"]["current"]["air_quality"]>
  >;
  AstroForecast: ResolverTypeWrapper<
    NonNullable<
      NonNullable<
        WeatherApi["schemas"]["forecast"]["forecastday"]
      >[number]["astro"]
    >
  >;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CardinalDirection: CardinalDirection;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  DayWeatherForecast: ResolverTypeWrapper<
    NonNullable<
      NonNullable<
        WeatherApi["schemas"]["forecast"]["forecastday"]
      >[number]["day"]
    >
  >;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  HourWeatherForecast: ResolverTypeWrapper<
    NonNullable<
      NonNullable<
        WeatherApi["schemas"]["forecast"]["forecastday"]
      >[number]["hour"]
    >[number]
  >;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  LanguageCode: LanguageCode;
  LocalDate: ResolverTypeWrapper<Scalars["LocalDate"]["output"]>;
  LocalTime: ResolverTypeWrapper<Scalars["LocalTime"]["output"]>;
  Location: ResolverTypeWrapper<WeatherApi["schemas"]["location"]>;
  LocationQuery: ResolverTypeWrapper<Scalars["LocationQuery"]["output"]>;
  PrecipitationUnit: PrecipitationUnit;
  PressureUnit: PressureUnit;
  Query: ResolverTypeWrapper<{}>;
  SpeedUnit: SpeedUnit;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  TemperatureUnit: TemperatureUnit;
  TimeZone: ResolverTypeWrapper<Scalars["TimeZone"]["output"]>;
  URL: ResolverTypeWrapper<Scalars["URL"]["output"]>;
  VisibilityUnit: VisibilityUnit;
  WeatherCondition: ResolverTypeWrapper<
    NonNullable<WeatherApi["schemas"]["current"]["condition"]>
  >;
  WeatherCurrent: ResolverTypeWrapper<
    NonNullable<WeatherApi["schemas"]["current"]>
  >;
  WeatherCurrentQueryResult: ResolverTypeWrapper<
    Omit<WeatherCurrentQueryResult, "location" | "weather"> & {
      location?: Maybe<ResolversTypes["Location"]>;
      weather?: Maybe<ResolversTypes["WeatherCurrent"]>;
    }
  >;
  WeatherForecast: ResolverTypeWrapper<
    NonNullable<WeatherApi["schemas"]["forecast"]["forecastday"]>[number]
  >;
  WeatherForecastQueryResult: ResolverTypeWrapper<
    Omit<WeatherForecastQueryResult, "location" | "weather"> & {
      location?: Maybe<ResolversTypes["Location"]>;
      weather?: Maybe<Array<Maybe<ResolversTypes["WeatherForecast"]>>>;
    }
  >;
  WeatherResult: ResolverTypeWrapper<
    ResolversInterfaceTypes<ResolversTypes>["WeatherResult"]
  >;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AirQuality: NonNullable<WeatherApi["schemas"]["current"]["air_quality"]>;
  AstroForecast: NonNullable<
    NonNullable<
      WeatherApi["schemas"]["forecast"]["forecastday"]
    >[number]["astro"]
  >;
  Boolean: Scalars["Boolean"]["output"];
  DateTime: Scalars["DateTime"]["output"];
  DayWeatherForecast: NonNullable<
    NonNullable<WeatherApi["schemas"]["forecast"]["forecastday"]>[number]["day"]
  >;
  Float: Scalars["Float"]["output"];
  HourWeatherForecast: NonNullable<
    NonNullable<
      WeatherApi["schemas"]["forecast"]["forecastday"]
    >[number]["hour"]
  >[number];
  Int: Scalars["Int"]["output"];
  LocalDate: Scalars["LocalDate"]["output"];
  LocalTime: Scalars["LocalTime"]["output"];
  Location: WeatherApi["schemas"]["location"];
  LocationQuery: Scalars["LocationQuery"]["output"];
  Query: {};
  String: Scalars["String"]["output"];
  TimeZone: Scalars["TimeZone"]["output"];
  URL: Scalars["URL"]["output"];
  WeatherCondition: NonNullable<WeatherApi["schemas"]["current"]["condition"]>;
  WeatherCurrent: NonNullable<WeatherApi["schemas"]["current"]>;
  WeatherCurrentQueryResult: Omit<
    WeatherCurrentQueryResult,
    "location" | "weather"
  > & {
    location?: Maybe<ResolversParentTypes["Location"]>;
    weather?: Maybe<ResolversParentTypes["WeatherCurrent"]>;
  };
  WeatherForecast: NonNullable<
    WeatherApi["schemas"]["forecast"]["forecastday"]
  >[number];
  WeatherForecastQueryResult: Omit<
    WeatherForecastQueryResult,
    "location" | "weather"
  > & {
    location?: Maybe<ResolversParentTypes["Location"]>;
    weather?: Maybe<Array<Maybe<ResolversParentTypes["WeatherForecast"]>>>;
  };
  WeatherResult: ResolversInterfaceTypes<ResolversParentTypes>["WeatherResult"];
};

export type AirQualityResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["AirQuality"] = ResolversParentTypes["AirQuality"],
> = {
  co?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  defraIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  epaIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  no2?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  o3?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  pm2_5?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  pm10?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  so2?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AstroForecastResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["AstroForecast"] = ResolversParentTypes["AstroForecast"],
> = {
  moonIllumination?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  moonPhase?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  moonrise?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  moonset?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sunrise?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sunset?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DayWeatherForecastResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["DayWeatherForecast"] = ResolversParentTypes["DayWeatherForecast"],
> = {
  avgHumidity?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  avgTemperature?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<DayWeatherForecastAvgTemperatureArgs, "unit">
  >;
  avgVisibility?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<DayWeatherForecastAvgVisibilityArgs, "unit">
  >;
  chanceOfRain?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  chanceOfSnow?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  condition?: Resolver<
    Maybe<ResolversTypes["WeatherCondition"]>,
    ParentType,
    ContextType
  >;
  maxTemperature?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<DayWeatherForecastMaxTemperatureArgs, "unit">
  >;
  maxWind?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<DayWeatherForecastMaxWindArgs, "unit">
  >;
  minTemperature?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<DayWeatherForecastMinTemperatureArgs, "unit">
  >;
  totalPrecipitation?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<DayWeatherForecastTotalPrecipitationArgs, "unit">
  >;
  uvIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  willItRain?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  willItSnow?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HourWeatherForecastResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["HourWeatherForecast"] = ResolversParentTypes["HourWeatherForecast"],
> = {
  chanceOfRain?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  chanceOfSnow?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  cloud?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  condition?: Resolver<
    Maybe<ResolversTypes["WeatherCondition"]>,
    ParentType,
    ContextType
  >;
  dewPoint?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastDewPointArgs, "unit">
  >;
  feelsLike?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastFeelsLikeArgs, "unit">
  >;
  heatIndex?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastHeatIndexArgs, "unit">
  >;
  humidity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  isDay?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  localTime?: Resolver<
    Maybe<ResolversTypes["LocalTime"]>,
    ParentType,
    ContextType
  >;
  precipitation?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastPrecipitationArgs, "unit">
  >;
  pressure?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastPressureArgs, "unit">
  >;
  temperature?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastTemperatureArgs, "unit">
  >;
  uvIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  visibility?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastVisibilityArgs, "unit">
  >;
  willItRain?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  willItSnow?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  windChill?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastWindChillArgs, "unit">
  >;
  windDegree?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  windDirection?: Resolver<
    Maybe<ResolversTypes["CardinalDirection"]>,
    ParentType,
    ContextType
  >;
  windGust?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastWindGustArgs, "unit">
  >;
  windSpeed?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<HourWeatherForecastWindSpeedArgs, "unit">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LocalDateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["LocalDate"], any> {
  name: "LocalDate";
}

export interface LocalTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["LocalTime"], any> {
  name: "LocalTime";
}

export type LocationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Location"] = ResolversParentTypes["Location"],
> = {
  country?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  localTime?: Resolver<
    Maybe<ResolversTypes["LocalTime"]>,
    ParentType,
    ContextType
  >;
  longitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  timeZone?: Resolver<
    Maybe<ResolversTypes["TimeZone"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LocationQueryScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["LocationQuery"], any> {
  name: "LocationQuery";
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  weatherCurrent?: Resolver<
    Maybe<ResolversTypes["WeatherCurrentQueryResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryWeatherCurrentArgs, "q">
  >;
  weatherForecast?: Resolver<
    Maybe<ResolversTypes["WeatherForecastQueryResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryWeatherForecastArgs, "date" | "q">
  >;
  weatherHistory?: Resolver<
    Maybe<ResolversTypes["WeatherForecastQueryResult"]>,
    ParentType,
    ContextType,
    RequireFields<QueryWeatherHistoryArgs, "date" | "q">
  >;
};

export interface TimeZoneScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["TimeZone"], any> {
  name: "TimeZone";
}

export interface UrlScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["URL"], any> {
  name: "URL";
}

export type WeatherConditionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WeatherCondition"] = ResolversParentTypes["WeatherCondition"],
> = {
  code?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  iconUrl?: Resolver<Maybe<ResolversTypes["URL"]>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeatherCurrentResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WeatherCurrent"] = ResolversParentTypes["WeatherCurrent"],
> = {
  airQuality?: Resolver<
    Maybe<ResolversTypes["AirQuality"]>,
    ParentType,
    ContextType
  >;
  cloud?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  condition?: Resolver<
    Maybe<ResolversTypes["WeatherCondition"]>,
    ParentType,
    ContextType
  >;
  feelsLike?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherCurrentFeelsLikeArgs, "unit">
  >;
  humidity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  isDay?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  precipitation?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherCurrentPrecipitationArgs, "unit">
  >;
  pressure?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherCurrentPressureArgs, "unit">
  >;
  temperature?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherCurrentTemperatureArgs, "unit">
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  uvIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  visibility?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherCurrentVisibilityArgs, "unit">
  >;
  windDegree?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  windDirection?: Resolver<
    Maybe<ResolversTypes["CardinalDirection"]>,
    ParentType,
    ContextType
  >;
  windGust?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherCurrentWindGustArgs, "unit">
  >;
  windSpeed?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherCurrentWindSpeedArgs, "unit">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeatherCurrentQueryResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WeatherCurrentQueryResult"] = ResolversParentTypes["WeatherCurrentQueryResult"],
> = {
  location?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  weather?: Resolver<
    Maybe<ResolversTypes["WeatherCurrent"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeatherForecastResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WeatherForecast"] = ResolversParentTypes["WeatherForecast"],
> = {
  astro?: Resolver<
    Maybe<ResolversTypes["AstroForecast"]>,
    ParentType,
    ContextType
  >;
  date?: Resolver<Maybe<ResolversTypes["LocalDate"]>, ParentType, ContextType>;
  day?: Resolver<
    Maybe<ResolversTypes["DayWeatherForecast"]>,
    ParentType,
    ContextType
  >;
  hour?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["HourWeatherForecast"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeatherForecastQueryResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WeatherForecastQueryResult"] = ResolversParentTypes["WeatherForecastQueryResult"],
> = {
  location?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  weather?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["WeatherForecast"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WeatherResultResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes["WeatherResult"] = ResolversParentTypes["WeatherResult"],
> = {
  __resolveType: TypeResolveFn<
    "HourWeatherForecast" | "WeatherCurrent",
    ParentType,
    ContextType
  >;
  cloud?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  condition?: Resolver<
    Maybe<ResolversTypes["WeatherCondition"]>,
    ParentType,
    ContextType
  >;
  feelsLike?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherResultFeelsLikeArgs, "unit">
  >;
  humidity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  isDay?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  precipitation?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherResultPrecipitationArgs, "unit">
  >;
  pressure?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherResultPressureArgs, "unit">
  >;
  temperature?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherResultTemperatureArgs, "unit">
  >;
  uvIndex?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  visibility?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherResultVisibilityArgs, "unit">
  >;
  windDegree?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  windDirection?: Resolver<
    Maybe<ResolversTypes["CardinalDirection"]>,
    ParentType,
    ContextType
  >;
  windGust?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherResultWindGustArgs, "unit">
  >;
  windSpeed?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType,
    RequireFields<WeatherResultWindSpeedArgs, "unit">
  >;
};

export type Resolvers<ContextType = any> = {
  AirQuality?: AirQualityResolvers<ContextType>;
  AstroForecast?: AstroForecastResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DayWeatherForecast?: DayWeatherForecastResolvers<ContextType>;
  HourWeatherForecast?: HourWeatherForecastResolvers<ContextType>;
  LocalDate?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  LocationQuery?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  TimeZone?: GraphQLScalarType;
  URL?: GraphQLScalarType;
  WeatherCondition?: WeatherConditionResolvers<ContextType>;
  WeatherCurrent?: WeatherCurrentResolvers<ContextType>;
  WeatherCurrentQueryResult?: WeatherCurrentQueryResultResolvers<ContextType>;
  WeatherForecast?: WeatherForecastResolvers<ContextType>;
  WeatherForecastQueryResult?: WeatherForecastQueryResultResolvers<ContextType>;
  WeatherResult?: WeatherResultResolvers<ContextType>;
};
