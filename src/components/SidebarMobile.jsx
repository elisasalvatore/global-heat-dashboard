import React from "react";
//icons
import { FaHome, FaWind } from "react-icons/fa";
import { FaDiceD6, FaTemperatureHigh } from "react-icons/fa6";
import { MdBubbleChart } from "react-icons/md";

export const SidebarMobile = () => {
	return (
		<div className="flex items-center justify-evenly md:hidden w-[100vw] h-[150px] absolute bottom-0 left-0 bg-white">
			<div className="w-[80px] h-[80px] bg-lightBackground hover:bg-blueCustom-base hover:text-white focus:bg-blueCustom-base focus:text-white flex items-center justify-center rounded-md">
				<FaHome className="w-8 h-8" />
			</div>
			<div className="w-[80px] h-[80px] bg-lightBackground hover:bg-blueCustom-base hover:text-white  focus:bg-blueCustom-base flex items-center justify-center rounded-md shadow-sm">
				<FaTemperatureHigh className="w-8 h-8" />
			</div>
			<div className="w-[80px] h-[80px] bg-lightBackground hover:bg-blueCustom-base hover:text-white  focus:bg-blueCustom-base flex items-center justify-center rounded-md shadow-sm">
				<FaWind className="w-8 h-8" />
			</div>
			<div className="w-[80px] h-[80px] bg-lightBackground hover:bg-blueCustom-base hover:text-white  focus:bg-blueCustom-base flex items-center justify-center rounded-md shadow-sm">
				<MdBubbleChart className="w-8 h-8" />
			</div>
			<div className="w-[80px] h-[80px] bg-lightBackground hover:bg-blueCustom-base hover:text-white  focus:bg-blueCustom-base flex items-center justify-center rounded-md shadow-sm">
				<FaDiceD6 className="w-8 h-8" />
			</div>
		</div>
	);
};
