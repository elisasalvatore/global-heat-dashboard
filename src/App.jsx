import { Route, Routes } from "react-router-dom";
//store
import { DataContextProvider } from "./store/DataContext";
//components
import { DashboardSidebar } from "./components/DashboardSidebar";
import { MobileSidebar } from "./components/MobileSidebar";
//pages
import { CarbonEmissions } from "./pages/CarbonEmissions";
import { Homepage } from "./pages/Homepage";
import { Temperature } from "./pages/Temperature";

function App() {
	return (
		<DataContextProvider>
			<div className="w-[100vw] h-[100vh] bg-blueCustom-dark flex justify-center items-center">
				<div className="w-[90%] h-[90%] bg-lightBackground lg:bg-[#f2f6fc] rounded-3xl flex">
					<MobileSidebar />
					<DashboardSidebar />
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/temperature" element={<Temperature />} />
						<Route path="/carbon-dioxide" element={<CarbonEmissions />} />
					</Routes>
				</div>
			</div>
		</DataContextProvider>
	);
}

export default App;
