import axios from "axios";

export const fetchTemperatureData = async () => {
	try {
		// Make an API request to fetch temperature data
		const response = await axios.get(
			"https://global-warming.org/api/temperature-api"
		);
		const data = response.data.result;

		// Object to store temperature data grouped by 5-year intervals
		const yearsData = {};

		// Iterate through the fetched data
		data.forEach((item) => {
			const year = Math.round(item.time); // Round the year value
			// Process data only for years from 2015 onward
			if (year >= 2015) {
				// Initialize the year entry if it does not exist
				if (!yearsData[year]) {
					yearsData[year] = { sum: 0, count: 0 };
				}
				// Sum up the temperatures and count the occurrences
				yearsData[year].sum += parseFloat(item.station);
				yearsData[year].count += 1;
			}
		});

		// Extract the sorted list of years (fiveYearsPeriods)
		const years = Object.keys(yearsData).map((year) => parseInt(year));
		// Calculate the average temperature for each 5-year interval
		const temps = years.map(
			(year) => yearsData[year].sum / yearsData[year].count
		);
		// Return the processed data
		return { years, temps };
	} catch (error) {
		console.log("🚀 ~ fetchTemperatureData ~ error:", error);
		return null;
	}
};
