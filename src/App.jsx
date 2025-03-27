//components
import { NavbarResponsive } from "./components/Navbar";
import { DashboardSidebar } from "./components/Sidebar";
function App() {
	return (
		<div className="w-[100vw] h-[100vh] bg-blueCustom-base flex justify-center items-center">
			<div className="w-full h-full lg:w-[90%] lg:h-[90%] bg-lightBackground lg:bg-[#f2f6fc] rounded-3xl flex">
				<NavbarResponsive />
				<DashboardSidebar />
			</div>
		</div>
	);
}

export default App;
