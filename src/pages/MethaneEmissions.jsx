import React, { useContext, useEffect } from "react";
//api
import { fetchMethaneData } from "../api/methaneApi";
//store
import APIContext from "../store/DataContext";
//components
import { DataLineChart } from "../components/DataLineChart";
import { MobileHomeBtn } from "../components/MobileHomeBtn";

export const MethaneEmissions = () => {
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
		// Function to fetch methane data and update the chart state
		const getMethaneData = async () => {
			const data = await fetchMethaneData(); // Fetch methane data

			// Update chart labels and axis titles
			setChartLabel("Average Methane Emissions");
			setTitleTextX("Year");
			setTitleTextY("Part per million (ppm)");

			if (data) {
				// Update chart data with the fetched methane emissions values
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
				console.log("🚀 ~ getMethaneData ~ error fetching methane data");
			}
		};

		getMethaneData();
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
