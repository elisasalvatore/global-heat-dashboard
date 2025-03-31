import axios from "axios";

const TEMPERATURE_API_URL = import.meta.env.VITE_APP_API_TEMPERATURE;

export const fetchTemperatureData = async () => {
	try {
		const response = await axios.get(TEMPERATURE_API_URL);
		const data = response.data.result;

		const decadeData = {};

		data.forEach((item) => {
			const year = Math.round(item.time);
			const decade = Math.floor(year / 5) * 5;
			if (decade >= 1960) {
				if (!decadeData[decade]) {
					decadeData[decade] = { sum: 0, count: 0 };
				}
				decadeData[decade].sum += parseFloat(item.station);
				decadeData[decade].count += 1;
			}
		});

		const years = Object.keys(decadeData).map((year) => parseInt(year));
		const temps = years.map(
			(year) => decadeData[year].sum / decadeData[year].count
		);

		return { years, temps };
	} catch (error) {
		console.error("Error fetching temperature data:", error);
		return null;
	}
};
