import React, { useContext, useEffect } from "react";
//api
import { fetchTemperatureData } from "../api/temperatureApi";
//store
import APIContext from "../store/DataContext";
//components
import { DataLineChart } from "../components/DataLineChart";
import { MobileHomeBtn } from "../components/MobileHomeBtn";

export const Temperature = () => {
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
		const getTemperatureData = async () => {
			const data = await fetchTemperatureData(); // Fetch temperature data
			// console.log("🚀 ~ getTemperatureData ~ data:", data);

			// Update chart labels and axis titles
			setChartLabel("Average Global Temperature");
			setTitleTextX("Year");
			setTitleTextY("Degrees (°C)");

			if (data) {
				// Update chart data with the fetched temperature values
				setChartData({
					labels: data.years,
					datasets: [
						{
							label: chartLabel,
							data: data.temps,
							borderColor: "#f79226",
							backgroundColor: "rgba(247, 146, 38, 0.2)",
							borderWidth: 2,
							pointRadius: 4,
						},
					],
				});
			} else {
				console.log(
					"🚀 ~ getTemperatureData ~ error fetching temperature data"
				);
			}
		};

		getTemperatureData();
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
