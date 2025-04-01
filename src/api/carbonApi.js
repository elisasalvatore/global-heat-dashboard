import axios from "axios";
const CO2_API_URL = import.meta.env.VITE_APP_API_CO2;

export const fetchCarbonData = async () => {
	try {
		// Make an API request to fetch carbon dioxide data
		const response = await axios.get(CO2_API_URL);
		const data = response.data.co2;

		// Object to store carbon emissions data grouped by year
		const yearsData = {};

		// Iterate through the fetched data
		data.forEach((item) => {
			const year = item.year;
			// Process data only for years from 2015 onward
			if (year >= 2015) {
				// Initialize the year entry if it does not exist
				if (!yearsData[year]) {
					yearsData[year] = { sum: 0, count: 0 };
				}
				// Sum up the carbon emissions and count the occurrences
				yearsData[year].sum += parseFloat(item.trend);
				yearsData[year].count += 1;
			}
		});

		// Extract the sorted list of years
		const years = Object.keys(yearsData).map((year) => parseInt(year));
		// Calculate the average carbon dioxide emissions for each year
		const trends = years.map(
			(year) => yearsData[year].sum / yearsData[year].count
		);
		// Return the processed data
		return { years, trends };
	} catch (error) {
		console.log("🚀 ~ fetchCarbonData ~ error:", error);
		return null;
	}
};
