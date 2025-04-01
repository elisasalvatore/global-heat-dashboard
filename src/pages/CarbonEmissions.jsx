import React, { useContext, useEffect } from "react";
//api
import { fetchCarbonData } from "../api/carbonApi";
//store
import APIContext from "../store/DataContext";
//components
import { DataLineChart } from "../components/DataLineChart";
import { MobileHomeBtn } from "../components/MobileHomeBtn";

export const CarbonEmissions = () => {
	// Retrieve chart-related state and setters from APIContext
	const {
		chartData,
		setChartData,
		chartLabel,
		setChartLabel,
		titleTextX,
		setTitleTextX,
		titleTextY,
		setTitleTextY,
	} = useContext(APIContext);

	// Fetch temperature data when the component mounts
	useEffect(() => {
		// Function to fetch temperature data and update the chart state
		const getCarbonData = async () => {
			const data = await fetchCarbonData(); // Fetch carbon data

			// Update chart labels and axis titles
			setChartLabel("Average Co2 Emissions");
			setTitleTextX("Year");
			setTitleTextY("Part per million (ppm)");

			if (data) {
				// Update chart data with the fetched temperature values
				setChartData({
					labels: data.years,
					datasets: [
						{
							label: chartLabel,
							data: data.trends,
							borderColor: "#f79226",
							backgroundColor: "rgba(247, 146, 38, 0.2)",
							borderWidth: 2,
							pointRadius: 4,
						},
					],
				});
			} else {
				console.log("🚀 ~ getCarbonData ~ error fetching carbon data");
			}
		};

		getCarbonData();
	}, [setChartData, setChartLabel, chartLabel, setTitleTextX, setTitleTextY]);

	return (
		<div className="w-full h-full flex items-start justify-center">
			{/* Render the line chart with updated data */}
			<DataLineChart
				data={chartData}
				titleTextX={titleTextX}
				titleTextY={titleTextY}
			/>

			{/* Render a mobile home button */}
			<MobileHomeBtn />
		</div>
	);
};
