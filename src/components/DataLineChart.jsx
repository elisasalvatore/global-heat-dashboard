import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
	LineElement,
	CategoryScale,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
	Legend
);

export const DataLineChart = ({ data, titleTextX, titleTextY }) => {
	return (
		<div className="flex items-center justify-center m-auto w-[100%] 2xl:w-[80%] h-[90%] p-2 md:p-8 ">
			<div className="flex items-center justify-center m-auto w-full h-[400px] md:h-full">
				<Line
					data={data}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							legend: { position: "bottom" },
							// labels: { font: { size: 50 } },
							title: {
								display: false,
								// text: "Cambiamenti della Temperatura nel Tempo",
							},
						},
						scales: {
							x: {
								title: {
									display: true,
									text: titleTextX,
									font: { weight: "bold" },
								},
								// ticks: { font: { size: 14 } },
							},
							y: {
								title: {
									display: true,
									text: titleTextY,
									font: { weight: "bold" },
									// font: { size: 16 },
								},
								// ticks: { font: { size: 14 } },
							},
						},
					}}
				/>
			</div>
		</div>
	);
};
