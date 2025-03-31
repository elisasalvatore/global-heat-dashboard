import { Route, Routes } from "react-router-dom";
//components
import { DashboardSidebar } from "./components/DashboardSidebar";
import { Homepage } from "./pages/Homepage";

function App() {
	return (
		<>
			<div className="w-[100vw] h-[100vh] bg-blueCustom-dark flex justify-center items-center">
				<div className="w-[90%] h-[90%] bg-lightBackground lg:bg-[#f2f6fc] rounded-3xl flex">
					<DashboardSidebar />
					<Routes>
						<Route path="/" element={<Homepage />} />
						{/* <Route path="/temperature" element={<Temperature />} /> */}
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
