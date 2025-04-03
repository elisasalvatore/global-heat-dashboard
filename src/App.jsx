import { Route, Routes } from "react-router-dom";
//store
import { DataContextProvider } from "./store/DataContext";
//components
import { DashboardSidebar } from "./components/DashboardSidebar";
import { MobileSidebar } from "./components/MobileSidebar";
import { SEOMetaTags } from "./components/seo/SEOMetaTags";
//pages
import { CarbonEmissions } from "./pages/CarbonEmissions";
import { Homepage } from "./pages/Homepage";
import { MethaneEmissions } from "./pages/MethaneEmissions";
import { NitrousEmissions } from "./pages/NitrousEmissions";
import { PolarIce } from "./pages/PolarIce";
import { Temperature } from "./pages/Temperature";

function App() {
	return (
		<DataContextProvider>
			<div className="w-[100vw] h-[100vh] bg-blueCustom-dark flex justify-center items-center">
				<div className="w-[90%] h-[90%] bg-lightBackground lg:bg-[#f2f6fc] rounded-3xl flex">
					{/* Head - SEO Meta Tags */}
					<SEOMetaTags />
					{/* Sidebar */}
					<MobileSidebar />
					<DashboardSidebar />
					{/* Pages */}
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/temperature" element={<Temperature />} />
						<Route path="/carbon-dioxide" element={<CarbonEmissions />} />
						<Route path="/methane" element={<MethaneEmissions />} />
						<Route path="/nitrous-oxide" element={<NitrousEmissions />} />
						<Route path="/polar-ice" element={<PolarIce />} />
					</Routes>
				</div>
			</div>
		</DataContextProvider>
	);
}

export default App;
