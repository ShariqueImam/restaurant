import React from "react";
import cookHeading from "../assets/images/chefsHeading.png";
import MainCookCarousel from "./CookCarousel/MainCooksCarousel";
import Fade from 'react-reveal/Fade'
const Cooks = () => {
	return (
		<Fade bottom duration={1500}>
		<div className="h-[100%]">
			{/* add the cook heading */}
			<div className="h-[20%] flex w-[100%] ">
				<img src={`${cookHeading}`} alt=""  className="h-[60%] mx-auto"/>
			</div>
			{/* cook carousel */}
			<div className="h-[80%]">
				<MainCookCarousel />
			</div>
		</div>
		</Fade>
	);
};

export default Cooks;
