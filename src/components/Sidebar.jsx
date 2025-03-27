import {
	Card,
	List,
	ListItem,
	ListItemPrefix,
	Typography,
} from "@material-tailwind/react";

export function DashboardSidebar() {
	return (
		<Card className="h-full w-full hidden lg:inline lg:max-w-[18rem] 2xl:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none rounded-l-3xl">
			<div className="mb-2 p-4">
				<Typography variant="h2" color="blue-gray">
					Global Heat
				</Typography>
			</div>
			<List className="text-xl">
				<ListItem>
					<ListItemPrefix>
						{/* <PresentationChartBarIcon className="h-5 w-5" /> */}
					</ListItemPrefix>
					Dashboard
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						{/* <ShoppingBagIcon className="h-5 w-5" /> */}
					</ListItemPrefix>
					Temperature
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						{/* <InboxIcon className="h-5 w-5" /> */}
					</ListItemPrefix>
					Carbon Dioxide
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						{/* <UserCircleIcon className="h-5 w-5" /> */}
					</ListItemPrefix>
					Methane
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						{/* <Cog6ToothIcon className="h-5 w-5" /> */}
					</ListItemPrefix>
					Nitrous Oxide
				</ListItem>
				<ListItem>
					<ListItemPrefix>
						{/* <PowerIcon className="h-5 w-5" /> */}
					</ListItemPrefix>
					Polar Ice
				</ListItem>
			</List>
		</Card>
	);
}
