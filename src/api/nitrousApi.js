import axios from "axios";

export const fetchNitrousData = async () => {
	try {
		// Make an API request to fetch nitrous oxide data
		const response = await axios.get(
			"https://global-warming.org/api/nitrous-oxide-api"
		);
		const data = response.data.nitrous;

		// Object to store nitrous oxide emissions data grouped by year
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
				// Sum up the nitrous oxide emissions and count the occurrences
				yearsData[year].sum += parseFloat(item.trend);
				yearsData[year].count += 1;
			}
		});

		// Extract the sorted list of years
		const years = Object.keys(yearsData).map((year) => parseInt(year));
		// Calculate the average nitrous oxide emissions for each year
		const trends = years.map(
			(year) => yearsData[year].sum / yearsData[year].count
		);
		// Return the processed data
		return { years, trends };
	} catch (error) {
		console.log("🚀 ~ fetchNitrousData ~ error:", error);
		return null;
	}
};
