import React from "react";
import "./SingleReview.css";
const SingleReview = (props) => {
	return (
		<div className=" w-[100%] h-[100%] my-12">
			{/* the container */}
            <div className="arrow w-[100%] bg-red-800 flex flex-col items-center justify-center">
                {/* heading */}
                <div className="w-[100%] flex">
                    <p className="mx-auto text-2xl sm:text-2xl md:text-3xl sm:my-2 md:my-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>{props.mainText}</p>
                </div>
                {/* reviewBody */}
                <div className="w-[100%] flex my-8 sm:my-4">
                    <p className="text-center tracking-wide text-sm sm:text-md md:text-md leading-6 mx-3" style={{ fontFamily: 'Open Sans, sans-serif'}}>{props.review}</p>
                </div>
            </div>
			{/* the image */}
            <div className="mx-auto w-[100%] flex flex-col justify-center items-center mt-12">
                {/* image of the customer for review */}
				<img
					src={`${props.imageURL}`}
					alt=""
					className="w-[25%] sm:w-[25%] md:w-[15%] h-[20%] sm:h-[15%] md:h-[15%] "
					style={{ borderRadius: "150px" }}
                />
                {/* name of the customer for review*/}
                <p className="text-red-800 font-bold">{props.nameOfReviewer}</p>
			</div>
		</div>
	);
};

export default SingleReview;
