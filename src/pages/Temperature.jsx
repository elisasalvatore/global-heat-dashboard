import React, { useEffect, useState } from "react";
import { fetchTemperatureData } from "../api/temperatureApi";
import { DataLineChart } from "../components/DataLineChart";
import { MobileHomeBtn } from "../components/MobileHomeBtn";

export const Temperature = () => {
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [],
	});

	useEffect(() => {
		const getTemperatureData = async () => {
			const data = await fetchTemperatureData();
			if (data) {
				setChartData({
					labels: data.years,
					datasets: [
						{
							label: "Average Globe Temperature",
							data: data.temps,
							borderColor: "#f79226",
							backgroundColor: "rgba(247, 146, 38, 0.2)",
							borderWidth: 2,
							pointRadius: 4,
						},
					],
				});
			}
		};
		getTemperatureData();
	}, []);
	return (
		<div className="w-full h-full flex items-start justify-center">
			<DataLineChart
				data={chartData}
				titleTextX="Years"
				titleTextY="Degrees °C"
			/>

			<MobileHomeBtn />
		</div>
	);
};
