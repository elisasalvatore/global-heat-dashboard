import axios from "axios";
const POLAR_ICE_API_URL = import.meta.env.VITE_APP_API_POLAR_ICE;

export const fetchPolarIceData = async () => {
	try {
		// Make an API request to fetch polar ice data
		// const response = await axios.get(POLAR_ICE_API_URL);
		const response = await axios.get(
			"https://global-warming.org/api/arctic-api"
		);
		const data = response.data.arcticData.data;

		// Object to store polar ice data grouped by 5-year intervals
		const yearsData = {};

		// Iterate through the fetched data
		Object.keys(data).forEach((key) => {
			const year = parseInt(key.substring(0, 4)); // Round the year value

			const fiveYearsPeriod = Math.floor(year / 5) * 5; // Group years into 5-year intervals

			// Process data only for years from 1990 onward
			if (fiveYearsPeriod >= 1990) {
				// Initialize the fiveYearsPeriod entry if it does not exist
				if (!yearsData[fiveYearsPeriod]) {
					yearsData[fiveYearsPeriod] = { sum: 0, count: 0 };
				}
				// Sum up the polar ice values and count the occurrences
				yearsData[fiveYearsPeriod].sum += parseFloat(data[key].value);
				yearsData[fiveYearsPeriod].count += 1;
			}
		});

		// Extract the sorted list of years (fiveYearsPeriods)
		const years = Object.keys(yearsData)
			.map((year) => parseInt(year))
			.sort((a, b) => a - b);
		// Calculate the average polar ice for each 5-year interval
		const values = years.map(
			(year) => yearsData[year].sum / yearsData[year].count
		);

		// Return the processed data
		return { years, values };
	} catch (error) {
		console.log("🚀 ~ fetchPolarIceData ~ error:", error);
		return null;
	}
};
