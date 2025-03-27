import {
	Card,
	List,
	ListItem,
	ListItemPrefix,
	Typography,
} from "@material-tailwind/react";
//icons
import { FaCloud, FaHome, FaWind } from "react-icons/fa";
import { FaDiceD6, FaTemperatureHigh } from "react-icons/fa6";
import { MdBubbleChart } from "react-icons/md";

export function DashboardSidebar() {
	return (
		<Card className="h-full w-full hidden md:inline md:max-w-[13rem] lg:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none rounded-l-3xl">
			<div className="mb-2 p-4">
				<Typography
					variant="h2"
					color="blue-gray"
					className="text-2xl lg:text-3xl"
				>
					Global Heat
				</Typography>
			</div>
			<List className="text-sm lg:text-xl">
				<ListItem className="hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaHome className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Dashboard
				</ListItem>
				<ListItem className="hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaTemperatureHigh className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Temperature
				</ListItem>
				<ListItem className="hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaWind className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Carbon Dioxide
				</ListItem>
				<ListItem className="hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<MdBubbleChart className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Methane
				</ListItem>
				<ListItem className="hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaCloud className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Nitrous Oxide
				</ListItem>
				<ListItem className="hover:text-blueCustom-base focus:text-blueCustom-base">
					<ListItemPrefix>
						<FaDiceD6 className="h-4 w-4 lg:w-5 lg:h-5" />
					</ListItemPrefix>
					Polar Ice
				</ListItem>
			</List>
		</Card>
	);
}
