import { createClient } from "./client.ts";
import fs from "node:fs/promises";
import { format } from "prettier";

const client = createClient(
	process.env.WEATHERAPI_KEY!,
	process.env.WEATHERAPI_BASE_URL
);

const fixtures = {
	current: await client.GET("/current.json", {
		params: { query: { q: "Warsaw", aqi: "yes" } },
	}),

	currentPl: await client.GET("/current.json", {
		params: { query: { q: "Warsaw", lang: "pl" } },
	}),

	forecast: await client.GET("/forecast.json", {
		// "days" don't seem to work, d'oh
		params: { query: { q: "Warsaw", days: 3, dt: "2024-02-28" } },
	}),

	forecastPl: await client.GET("/forecast.json", {
		params: {
			query: { q: "Warsaw", days: 3, dt: "2024-02-28", lang: "pl" },
		},
	}),

	forecastWithExtras: await client.GET("/forecast.json", {
		params: {
			query: {
				q: "Warsaw",
				days: 3,
				dt: "2024-02-22",
				hour: 11,
				alerts: "yes",
				aqi: "yes",
			},
		},
	}),

	history: await client.GET("/history.json", {
		params: {
			query: {
				q: "Warsaw",
				dt: "2024-02-18",
			},
		},
	}),

	historyWithHour: await client.GET("/history.json", {
		params: {
			query: {
				q: "Warsaw",
				dt: "2024-02-18",
			},
		},
	}),

	historyWithRange: await client.GET("/history.json", {
		params: {
			query: {
				q: "Warsaw",
				dt: "2024-02-01",
				end_dt: "2024-02-04",
			},
		},
	}),
};

await fs
	.rm(new URL(`./__fixtures__`, import.meta.url).pathname, {
		recursive: true,
	})
	.catch((e) => {
		if (e.code !== "ENOENT") throw e;
	});
await fs.mkdir(new URL(`./__fixtures__`, import.meta.url).pathname);

for (const [name, result] of Object.entries(fixtures)) {
	const url = new URL(result.response.url);
	url.searchParams.delete("key");

	const toSave = {
		pathname: url.pathname,
		params: Object.fromEntries(url.searchParams.entries()),
		result: result.data,
	};

	await fs.writeFile(
		new URL(`./__fixtures__/${name}.json`, import.meta.url).pathname,
		await format(JSON.stringify(toSave), {
			parser: "json",
		})
	);
}
