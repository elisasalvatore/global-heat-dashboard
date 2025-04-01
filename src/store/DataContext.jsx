import React, { createContext, useState } from "react";

const APIContext = createContext();
export default APIContext;

export const DataContextProvider = ({ children }) => {
	const [chartData, setChartData] = useState({
		labels: [],
		datasets: [],
	});
	const [chartLabel, setChartLabel] = useState("");
	const [titleTextX, setTitleTextX] = useState("");
	const [titleTextY, setTitleTextY] = useState("");

	return (
		<APIContext.Provider
			value={{
				chartData,
				setChartData,
				chartLabel,
				setChartLabel,
				titleTextX,
				setTitleTextX,
				titleTextY,
				setTitleTextY,
			}}
		>
			{children}
		</APIContext.Provider>
	);
};
