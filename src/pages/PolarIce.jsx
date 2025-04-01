import React, { useContext, useEffect } from "react";
//api
import { fetchPolarIceData } from "../api/polarIceApi";
//store
import APIContext from "../store/DataContext";
//components
import { DataLineChart } from "../components/DataLineChart";
import { MobileHomeBtn } from "../components/MobileHomeBtn";

export const PolarIce = () => {
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

	// Fetch methane data when the component mounts
	useEffect(() => {
		// Function to fetch polar ice data and update the chart state
		const getPolarIceData = async () => {
			const data = await fetchPolarIceData(); // Fetch polar ice data

			// Update chart labels and axis titles
			setChartLabel("Average Polar Ice Extent");
			setTitleTextX("Year");
			setTitleTextY("Million Square (km)");

			if (data) {
				// Update chart data with the fetched polar ice extend values
				setChartData({
					labels: data.years,
					datasets: [
						{
							label: chartLabel,
							data: data.values,
							borderColor: "#f79226",
							backgroundColor: "rgba(247, 146, 38, 0.2)",
							borderWidth: 2,
							pointRadius: 4,
						},
					],
				});
			} else {
				console.log("🚀 ~ getPolarIceData ~ error fetching polar ice data");
			}
		};

		getPolarIceData();
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
