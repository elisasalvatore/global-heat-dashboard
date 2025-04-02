import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import logo from "../assets/images/logo.png";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
export const DataHorizontalBarChart = ({
	data,
	chartTitle,
	titleTextX,
	titleTextY,
}) => {
	return (
		<div className="md:hidden flex items-center justify-center m-auto w-[100%] h-[90%] p-2">
			<div className="absolute top-[65px] w-[60px] h-[60px]">
				<img src={logo} alt="" />
			</div>
			<div className="flex items-center justify-center w-full h-[500px]">
				<Bar
					data={data}
					options={{
						responsive: true,
						maintainAspectRatio: false,
						indexAxis: "y",
						plugins: {
							legend: {
								position: "bottom",
								labels: {
									font: {
										size: 15, // Change label text size
									},
									color: "#333", // Change label color
								},
							},
							title: {
								display: true,
								text: chartTitle,
								font: {
									size: 18, // Change label text size
								},
							},
						},
						scales: {
							y: {
								title: {
									display: true,
									text: titleTextX,
									font: { weight: "bold", size: 14 },
									color: "#333",
								},
								ticks: { font: { size: 12 } },
								reverse: true,
							},
							x: {
								title: {
									display: true,
									text: titleTextY,
									font: { weight: "bold", size: 14 },
									color: "#333",
								},
								ticks: { font: { size: 12 } },
							},
						},
					}}
				/>
			</div>
		</div>
	);
};
