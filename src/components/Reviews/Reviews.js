import React from "react";
	import Fade from 'react-reveal/Fade'
import "react-multi-carousel/lib/styles.css";
import ReviewsCarousel from "./ReviewCarousel";
import reviewsHeading from "../assets/images/reviewsheading.png";
const Reviews = () => {
	return (
		<Fade bottom duration={1500}>
		<div className="w-[100%] h-[100%]">
			{/* review heading */}
			<div className="w-[100%] flex h-[15%]">
				<img src={`${reviewsHeading}`} alt="" className="mx-auto transform scale-[0.7]" />
			</div>
			{/* main carousel */}
			<div className="">
				<ReviewsCarousel />
			</div>
		</div>
		</Fade>
	);
};

export default Reviews;
