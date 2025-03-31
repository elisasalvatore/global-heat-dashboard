import React from "react";
import { MobileHomeBtn } from "../components/MobileHomeBtn";

export const Temperature = () => {
	return (
		<div className="w-full h-full flex items-start justify-center">
			<div className="w-5/6 h-full bg-green-200 flex flex-col items-center justify-center">
				<div className="w-full h-fit bg-yellow-100 flex items-start justify-start pb-4">
					<h1 className="text-3xl font-bold">Temperature</h1>
				</div>
				<div className="w-full h-fit bg-yellow-100 flex items-start justify-start pb-8 ">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Exercitationem quod, expedita quia accusamus vero ipsum ratione
					incidunt sint. Cumque accusantium dolores laudantium sed alias sunt
					quos quasi adipisci animi debitis! Incidunt sapiente similique atque
					id ratione eligendi explicabo recusandae!
				</div>
				<div className="w-full h-3/6 bg-red-100 flex items-center justify-center">
					grafico
				</div>
			</div>

			<MobileHomeBtn />
		</div>
	);
};
