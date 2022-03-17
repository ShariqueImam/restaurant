import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleReview from "./SingleReview";
const ReviewsCarousel = () => {
	const width = window.innerWidth;
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 6000, min: 1400 },
			items: 3,
		},
		desktop: {
			breakpoint: { max: 1400, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 700 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 700, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="h-[80%]">
			<Carousel
				responsive={responsive}
				arrows={true}
				swipeable={width < 1000 ? true : false}
				draggable={false}
				// showDots={true}
				ssr={true} // means to render carousel on server-side.
				infinite={true}
				autoPlay={width > 1100 ? false : true}
				autoPlaySpeed={3000}
				keyBoardControl={true}
				customTransition="all 1s"
				transitionDuration={1000}
				containerClass="carousel-container"
				removeArrowOnDeviceType={["tablet", "mobile"]}
				// deviceType={this.props.deviceType}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-40-px"
				// customButtonGroup={<ButtonGroup />}
            >
                
				<div className=" text-red-800 w-[70%] sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:mx-auto sm:my-8 md:my-2">
					<SingleReview nameOfReviewer={'Sharique'} imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506464/William%20Barley/reviews/review1_wtbv39.png"} mainText={'Good quality food...'} review={'Lorem ipsum dolo Aperiam doloribus voluptas non ut, aspernatur fures mium? Minima laboriosam unde ipsum. periam dolort, aspernatur fures mium? Minim'}/>
				</div>
				<div className="text-red-800 w-[70%] sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:mx-auto sm:my-8 md:my-2">
					<SingleReview nameOfReviewer={'Ana'} mainText={'Well served...'} imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506464/William%20Barley/reviews/review1_wtbv39.png"} review={'Lorem ipsum dolor sitctetur  Aperiam dolor, aspernatur fures mium? Minima laboriosam unde ipsum. periam dolort, aspernatur fures mium? Minim'}/>
				</div>
				<div className="text-red-800 w-[70%] sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:mx-auto sm:my-8 md:my-2">
					<SingleReview nameOfReviewer={'Williamson'} mainText={'Instant delivery...'} imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506464/William%20Barley/reviews/review1_wtbv39.png"} review={'Lorem ipsusit amet consectetur  Aperiam dolort, aspernatur fures mium? Minima laboriosam unde ipsum. periam dolort, aspernatur fures mium? Minim'}/>
				</div>
				<div className="text-red-800 w-[70%] sm:w-[90%] md:w-[80%] h-[60%]	 mx-auto sm:mx-auto sm:my-8 md:my-2">
					<SingleReview nameOfReviewer={'Kane'} mainText={'Fresh food...'} imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506464/William%20Barley/reviews/review1_wtbv39.png"} review={'Lorem ipsum dolor sit amet ctetur  Aperiam doloribus voluptas non ut, aspernaboriosam unde ipsum. periam dolort, aspernatur fures mium? Minim'}/>
				</div>
				<div className="text-red-800 w-[70%] sm:w-[90%] md:w-[80%] h-[60%]	 mx-auto sm:mx-auto sm:my-8 md:my-2">
					<SingleReview nameOfReviewer={'Robert'} mainText={'Best ever chicken...'} imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506464/William%20Barley/reviews/review1_wtbv39.png"} review={'Lorem ipsum dolor amet consectetur  Aperiam doloribus voluptas non ut, aspernatur friosam unde ipsum. periam dolort, aspernatur fures mium? Minim'}/>
				</div>
				<div className="text-red-800 w-[70%] sm:w-[90%] md:w-[80%] h-[60%]	 mx-auto sm:mx-auto sm:my-8 md:my-2">
					<SingleReview nameOfReviewer={'Milne'} mainText={'Loved the Pasta...'} imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506464/William%20Barley/reviews/review1_wtbv39.png"} review={'Lorem ipsum dolor sit amet consectetur  Aperiam doloris mium? Minima laboriosam unde ipsum.periam dolort, aspernatur fures mium? Minim '}/>
				</div>
				<div className="text-red-800 w-[70%] sm:w-[90%] md:w-[80%] h-[60%]	 mx-auto sm:mx-auto sm:my-8 md:my-2">
					<SingleReview nameOfReviewer={'John'} mainText={'Very coperative...'} imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506464/William%20Barley/reviews/review1_wtbv39.png"} review={'Lorem ipsum dolor sit amet consectetur  Aperitas non ut, aspernatur fures mium? Minima laboriosam unde ipsum.periam dolort, aspernatur fures mium? Minim'}/>
				</div>
			</Carousel>
			;
		</div>
	);
};

export default ReviewsCarousel;
