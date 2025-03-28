import {
	Card,
	List,
	ListItem,
	ListItemPrefix,
	Typography,
} from "@material-tailwind/react";
import { Link } from "react-router";
import favicon from "../assets/images/favicon.png";
//icons
import { FaCloud, FaHome } from "react-icons/fa";
import { FaBottleDroplet, FaDiceD6, FaTemperatureHigh } from "react-icons/fa6";
import { MdBubbleChart } from "react-icons/md";

export function DashboardSidebar() {
	return (
		<Card className="h-full w-full hidden lg:inline lg:max-w-[15rem] 2xl:max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none rounded-l-3xl">
			<div className="flex justify-star items-center mb-2 ps-3 pt-4">
				<img src={favicon} alt="Global Heat Icon" className="w-10 me-2" />
				<Typography
					variant="h2"
					color="blue-gray"
					className="text-2xl 2xl:text-3xl"
				>
					Global Heat
				</Typography>
			</div>
			<List className="text-sm lg:text-xl">
				<Link to="/">
					<ListItem className="lg:w-[200px] 2xl:w-full hover:text-blueCustom-base focus:text-blueCustom-base">
						<ListItemPrefix>
							<FaHome className="h-4 w-4 lg:w-5 lg:h-5" />
						</ListItemPrefix>
						Dashboard
					</ListItem>
				</Link>

				<Link to="/temperature">
					<ListItem className="lg:w-[200px] 2xl:w-full hover:text-blueCustom-base focus:text-blueCustom-base">
						<ListItemPrefix>
							<FaTemperatureHigh className="h-4 w-4 lg:w-5 lg:h-5" />
						</ListItemPrefix>
						Temperature
					</ListItem>
				</Link>

				<ListItem className="lg:w-[200px] 2xl:w-full hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaCloud className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Carbon Dioxide
				</ListItem>

				<ListItem className="lg:w-[200px] 2xl:w-full hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<MdBubbleChart className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Methane
				</ListItem>

				<ListItem className="lg:w-[200px] 2xl:w-full hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaBottleDroplet className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Nitrous Oxide
				</ListItem>

				<ListItem className="lg:w-[200px] 2xl:w-full hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaDiceD6 className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Polar Ice
				</ListItem>
			</List>
		</Card>
	);
}
