import React, { useContext, useEffect } from "react";
//api
import { fetchNitrousData } from "../api/nitrousApi";
//store
import APIContext from "../store/DataContext";
//components
import { DataHorizontalBarChart } from "../components/DataHorizontalBarChart";
import { DataLineChart } from "../components/DataLineChart";
import { MobileHomeBtn } from "../components/MobileHomeBtn";

export const NitrousEmissions = () => {
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

	// Fetch nitrous oxide emissions data when the component mounts
	useEffect(() => {
		// Function to fetch nitrous oxide data and update the chart state
		const getNitrousData = async () => {
			const data = await fetchNitrousData(); // Fetch nitrous oxide data

			// Update chart labels and axis titles
			setChartLabel("Average No2 Emissions");
			setTitleTextX("Year");
			setTitleTextY("Nitrous Oxide mole fraction (ppb)");

			if (data) {
				// Update chart data with the fetched nitrous oxide values
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
				console.log("🚀 ~ getNitrousData ~ error fetching nitrous data");
			}
		};

		getNitrousData();
	}, [setChartData, setChartLabel, chartLabel, setTitleTextX, setTitleTextY]);

	return (
		<div className="w-full h-full flex items-start justify-center">
			{/* Render the line chart with updated data */}
			<DataLineChart
				data={chartData}
				chartTitle="Globe Nitrous Oxide Emissions"
				titleTextX={titleTextX}
				titleTextY={titleTextY}
			/>

			{/* For mobile screens */}
			<DataHorizontalBarChart
				data={chartData}
				chartTitle="Globe Nitrous Oxide Emissions"
				titleTextX={titleTextX}
				titleTextY={titleTextY}
			/>
			{/* Render a mobile home button */}
			<MobileHomeBtn />
		</div>
	);
};
