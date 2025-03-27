//components
import { DashboardSidebar } from "./components/Sidebar";
import { SidebarMobile } from "./components/SidebarMobile";
function App() {
	return (
		<div className="w-[100vw] h-[100vh] bg-blueCustom-base flex justify-center items-center">
			<div className="w-[90%] h-[90%] bg-lightBackground lg:bg-[#f2f6fc] rounded-3xl flex">
				<SidebarMobile />
				<DashboardSidebar className="hidden md:inline" />
			</div>
		</div>
	);
}

export default App;
