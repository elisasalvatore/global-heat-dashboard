import {
	Collapse,
	IconButton,
	Navbar,
	Typography,
} from "@material-tailwind/react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

import React, { useState } from "react";

function NavList() {
	return (
		<ul className="w-[100%] md:w-[60%] h-[92vh] bg-blueCustom-base flex flex-col justify-center items-center gap-6">
			<Typography
				as="li"
				variant="h4"
				color="white"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-orangeCustom-base transition-colors"
				>
					Dashboard
				</a>
			</Typography>
			<Typography
				as="li"
				variant="h4"
				color="white"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-orangeCustom-base transition-colors"
				>
					Temperature
				</a>
			</Typography>
			<Typography
				as="li"
				variant="h4"
				color="white"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-orangeCustom-base transition-colors"
				>
					Carbon Dioxide
				</a>
			</Typography>
			<Typography
				as="li"
				variant="h4"
				color="white"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-orangeCustom-base transition-colors"
				>
					Methane
				</a>
			</Typography>
			<Typography
				as="li"
				variant="h4"
				color="white"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-orangeCustom-base transition-colors"
				>
					Nitrous Oxide
				</a>
			</Typography>
			<Typography
				as="li"
				variant="h4"
				color="white"
				className="p-1 font-medium"
			>
				<a
					href="#"
					className="flex items-center hover:text-orangeCustom-base transition-colors"
				>
					Polar Ice
				</a>
			</Typography>
		</ul>
	);
}

export function NavbarResponsive() {
	const [openNav, setOpenNav] = useState(false);

	return (
		<Navbar className="lg:hidden  h-[100px] p-6 rounded-none bg-blueCustom-base border-none shadow-none backdrop-saturate-0 backdrop-blur-none bg-opacity-100">
			<div className="flex items-center justify-between">
				<Typography
					as="a"
					href="#"
					variant="h4"
					className="mr-4 cursor-pointer py-1.5"
				>
					Global Heat
				</Typography>

				<IconButton
					variant="text"
					className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<>
							<FaXmark
								className="h-6 w-6 mr-6 cursor-pointer hover:text-orangeCustom-base"
								strokeWidth={2}
							/>
						</>
					) : (
						<>
							<FaBarsStaggered
								className="h-6 w-6 mr-6 cursor-pointer hover:text-orangeCustom-base"
								strokeWidth={2}
							/>
						</>
					)}
				</IconButton>
			</div>

			<Collapse
				open={openNav}
				className=" w-full md:w-[100vw] flex items-center justify-end"
			>
				<NavList />
			</Collapse>
		</Navbar>
	);
}
