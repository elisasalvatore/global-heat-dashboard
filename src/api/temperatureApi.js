import axios from "axios";
const TEMPERATURE_API_URL = import.meta.env.VITE_APP_API_TEMPERATURE;

export const fetchTemperatureData = async () => {
	try {
		// Make an API request to fetch temperature data
		const response = await axios.get(TEMPERATURE_API_URL);
		const data = response.data.result;

		// Object to store temperature data grouped by 5-year intervals (decades)
		const decadeData = {};

		// Iterate through the fetched data
		data.forEach((item) => {
			const year = Math.round(item.time); // Round the year value
			const decade = Math.floor(year / 5) * 5; // Group years into 5-year intervals
			// Process data only for years from 1960 onward
			if (decade >= 1960) {
				// Initialize the decade entry if it does not exist
				if (!decadeData[decade]) {
					decadeData[decade] = { sum: 0, count: 0 };
				}
				// Sum up the temperatures and count the occurrences
				decadeData[decade].sum += parseFloat(item.station);
				decadeData[decade].count += 1;
			}
		});

		// Extract the sorted list of years (decades)
		const years = Object.keys(decadeData).map((year) => parseInt(year));
		// Calculate the average temperature for each 5-year interval
		const temps = years.map(
			(year) => decadeData[year].sum / decadeData[year].count
		);
		// Return the processed data
		return { years, temps };
	} catch (error) {
		console.log("🚀 ~ fetchTemperatureData ~ error:", error);
		return null;
	}
};
