import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const ScrollToTop = (props) => {
	const scrollButtonHandler = (params) => {
		props.onScrollToTop();
	};

	return (
		<div
			className="p-1 sm:p-2 fixed bg-red-900 rounded-3xl  cursor-pointer animate__animated animate__bounce animate__infinite m-4 bottom-0 right-0"
			onClick={scrollButtonHandler}
		>
			<ArrowUpwardIcon style={{ color: "white" }} />
		</div>
	);
};

export default ScrollToTop;
