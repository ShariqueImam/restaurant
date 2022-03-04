import React from "react";

const Heading = (props) => {
	return (
		<div
			className="flex items-center mx-auto mb-2 md:mb-4"
			style={{ fontfamily: 'Work Sans, sans-serif'}}
		>
			<h1 className="text-2xl md:text-3xl text-red-800 tracking-widest">
				{props.heading}
			</h1>
		</div>
	);
};

export default Heading;
