import { Route, Routes } from "react-router-dom";
//components
import { DashboardSidebar } from "./components/Sidebar";
import { SidebarMobile } from "./components/SidebarMobile";
import { Homepage } from "./pages/Homepage";
import { Temperature } from "./pages/Temperature";

function App() {
	return (
		<div className="w-[100vw] h-[100vh] bg-blueCustom-dark flex justify-center items-center">
			<div className="w-[90%] h-[90%] bg-lightBackground lg:bg-[#f2f6fc] rounded-3xl flex">
				<SidebarMobile />
				<DashboardSidebar />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/temperature" element={<Temperature />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
