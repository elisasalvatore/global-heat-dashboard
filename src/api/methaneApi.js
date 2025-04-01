import axios from "axios";
const METHANE_API_URL = import.meta.env.VITE_APP_API_METHANE;

export const fetchMethaneData = async () => {
	try {
		// Make an API request to fetch methane data
		const response = await axios.get(METHANE_API_URL);
		const data = response.data.methane;

		// Object to store methane data grouped by 5-year intervals
		const yearsData = {};

		// Iterate through the fetched data
		data.forEach((item) => {
			const year = Math.round(item.date); // Round the year value
			// Process data only for years from 1990 onward
			const fiveYearsPeriod = Math.floor(year / 5) * 5; // Group years into 5-year intervals
			if (fiveYearsPeriod >= 1990) {
				// Initialize the years entry if it does not exist
				if (!yearsData[fiveYearsPeriod]) {
					yearsData[fiveYearsPeriod] = { sum: 0, count: 0 };
				}
				// Sum up the methane emissions and count the occurrences
				yearsData[fiveYearsPeriod].sum += parseFloat(item.trend);
				yearsData[fiveYearsPeriod].count += 1;
			}
		});

		// Extract the sorted list of years
		const years = Object.keys(yearsData).map((year) => {
			return parseInt(year);
		});
		// Calculate the average methane emissions for each year
		const trends = years.map(
			(year) => yearsData[year].sum / yearsData[year].count
		);

		// Return the processed data
		return { years, trends };
	} catch (error) {
		console.log("🚀 ~ fetchMethaneData ~ error:", error);
		return null;
	}
};
