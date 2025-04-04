import React from "react";
import { Link } from "react-router-dom";
//icons
import { FaCloud } from "react-icons/fa";
import { FaBottleDroplet, FaDiceD6, FaTemperatureHigh } from "react-icons/fa6";
import { MdBubbleChart } from "react-icons/md";

export const MobileSidebar = () => {
	return (
		<div className="flex items-center justify-evenly lg:hidden w-[100vw] h-[100px] absolute bottom-0 left-0 bg-white px-2">
			{/* <div className="flex flex-col items-center justify-center rounded-md">
				<Typography
					variant="p"
					color="blue-gray"
					className="text-sm flex flex-col items-center"
				>
					<FaHome className="w-6 h-6" />
					Home
				</Typography>
			</div> */}

			{/* Temperature */}
			<Link to="/temperature">
				<div className="w-[60px] h-[60px] md:w-[85px] md:h-[85px] flex flex-col items-center justify-center text-blue-gray-700 text-sm rounded-md leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blueCustom-base focus:text-blueCustom-base cursor-pointer">
					<FaTemperatureHigh className="w-6 h-6" />
					Heat
				</div>
			</Link>

			{/* Carbon Dioxide CO2 */}
			<Link to="/carbon-dioxide">
				<div className="w-[60px] h-[60px] md:w-[85px] md:h-[85px] flex flex-col items-center justify-center text-blue-gray-700 text-sm rounded-md leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blueCustom-base focus:text-blueCustom-base cursor-pointer">
					<FaCloud className="w-6 h-6" />
					CO2
				</div>
			</Link>

			{/* Methane */}
			<Link to="/methane">
				<div className="w-[60px] h-[60px]  md:w-[85px] md:h-[85px] flex flex-col items-center justify-center text-blue-gray-700 text-sm rounded-md leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blueCustom-base focus:text-blueCustom-base cursor-pointer">
					<MdBubbleChart className="w-6 h-6" />
					Methane
				</div>
			</Link>

			{/* Nitrous Oxide N2O*/}
			<Link to="/nitrous-oxide">
				<div className="w-[60px] h-[60px]  md:w-[85px] md:h-[85px] flex flex-col items-center justify-center text-blue-gray-700 text-sm rounded-md leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blueCustom-base focus:text-blueCustom-base cursor-pointer">
					<FaBottleDroplet className="w-6 h-6" />
					N2O
				</div>
			</Link>

			{/* Polar Ice */}
			<Link to="/polar-ice">
				<div className="w-[60px] h-[60px]  md:w-[85px] md:h-[85px] flex flex-col items-center justify-center text-blue-gray-700 text-sm rounded-md leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blueCustom-base focus:text-blueCustom-base cursor-pointer">
					<FaDiceD6 className="w-6 h-6" />
					Polar Ice
				</div>
			</Link>
		</div>
	);
};
