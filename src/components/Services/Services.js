import React from "react";
import Heading from "../Heading/Heading";
import CheckIcon from "@mui/icons-material/Check";
const Services = () => {
	const [displayHeading, setDisplayHeading] = React.useState(false);
	return (
		<div className="w-[100%] flex flex-col justify-center items-center h-[120%]">
			{/* heading */}
			<div className="flex mx-auto h-[100%] my-8 sm:my-8 md:my-8">
					<Heading heading="OUR SERVICES" />
			</div>
			<div className="flex w-[100%] sm:w-[75%] justify-around text-red-900 flex-col sm:flex-row items-center">
				<div className="flex text-md sm:text-lg md:text-xl my-4 items-center">
					<CheckIcon style={{ color: "green" }} />
					<p className="text-lg md:text-2xl">Quality Food</p>
				</div>
				<div className="flex text-md sm:text-lg md:text-xl my-4 items-center">
					<CheckIcon style={{ color: "green" }} />
					<p className="text-lg md:text-2xl">Instant Meal</p>
				</div>
				<div className="flex text-md sm:text-lg md:text-xl my-4 items-center">
					<CheckIcon style={{ color: "green" }} />
					<p className="text-lg md:text-2xl">Quality Serving</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
