import React from "react";
import HomeContent from "./HomeContent";
import DineInButton from "./DineInButton";
const Home = (props) => {
	return (
		<div className="w-[100%] sm:w-[90%] md:w-[75%] h-[100%] sm:h-[90%] md:h-[85%] m-auto">
			{/* main content */}
			<div className="h-[100%] w-[100%] flex">
				<HomeContent onScroll={props.onScroll}/>
			</div>
			{/* button */}
			<div className=""></div>
		</div>
	);
};

export default Home;
