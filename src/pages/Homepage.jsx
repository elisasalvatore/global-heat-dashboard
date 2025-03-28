import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Homepage = () => {
	return (
		<div className="w-full h-full bg-homepageCustom bg-cover bg-no-repeat rounded-t-xl lg:rounded-s-none lg:rounded-e-xl p-6 flex items-center justify-center">
			<Link
				to="/"
				className="flex flex-col items-center justify-center w-4/6 md:w-2/6 lg:w-3/6 2xl:w-2/6 mb-4 lg:mb-0 cursor-pointer"
			>
				<img src={logo} alt="Global Heat Logo" />
			</Link>
		</div>
	);
};
