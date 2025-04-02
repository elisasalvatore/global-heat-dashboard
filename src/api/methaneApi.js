import axios from "axios";

export const fetchMethaneData = async () => {
	try {
		// Make an API request to fetch methane data
		const response = await axios.get(
			"https://global-warming.org/api/methane-api"
		);
		const data = response.data.methane;

		// Object to store methane data grouped by 5-year intervals
		const yearsData = {};

		// Iterate through the fetched data
		data.forEach((item) => {
			const year = Math.round(item.date); // Round the year value
			// Process data only for years from 2015 onward
			if (year >= 2015) {
				// Initialize the year entry if it does not exist
				if (!yearsData[year]) {
					yearsData[year] = { sum: 0, count: 0 };
				}
				// Sum up the methane emissions and count the occurrences
				yearsData[year].sum += parseFloat(item.trend);
				yearsData[year].count += 1;
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
