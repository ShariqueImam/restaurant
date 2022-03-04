import { SliderValueLabelUnstyled } from "@mui/base";
import React from "react";
import Logo from "./Logo";
import MainNavbar from "./MainNavbar";
const Navbar = (props) => {
	const onScroll = (value) => {
		props.onScroll(value)
	}
	
	return (
		<div className="h-[100%] w-[100%]">
			{/* signature */}
			<div className="w-[100%] h-[60%] flex">
				<Logo />
			</div>
			{/* main navbar */}
			<div className="w-[100%] h-[40%] flex">
				<MainNavbar onScroll={onScroll}/>
			</div>
		</div>
	);
};

export default Navbar;
