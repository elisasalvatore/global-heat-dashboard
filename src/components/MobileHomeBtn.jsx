import React from "react";
import { Link } from "react-router-dom";
//icons
import { FaHome } from "react-icons/fa";

export const MobileHomeBtn = () => {
	return (
		<div className="w-10 h-10 lg:hidden bg-orangeCustom-base absolute bottom-20 right-5 rounded-full flex justify-center items-center text-white text-xl">
			<Link to="/">
				<FaHome />
			</Link>
		</div>
	);
};
