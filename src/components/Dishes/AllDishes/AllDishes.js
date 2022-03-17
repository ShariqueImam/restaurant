import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleDish from "./SingleDish";

const AllDishes = () => {
	const width = window.innerWidth;
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 6000, min: 1400 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 1400, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 700 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 700, min: 0 },
			items: 2,
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
				autoPlay={true}
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
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						id='1'
						name={"BHAIL PURI"}
						price="2.99"
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506499/William%20Barley/mainImages/6_ya0oad.jpg"}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						id='2'
						name={"PASTA"}
						price="4.99"
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/10_gqhucs.jpg"}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						id='3'
						name={"PIZZA PASTA"}
						price="1.99"
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/9_sxtw8h.jpg"}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						id='4'
						name={"SAMOSA"}
						price="2.99"
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/11_xexm9b.jpg"}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						id='5'
						name={"WHITE KARAHI"}
						price="19.99"
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/12_aspdex.jpg"}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						id='6'
						name={"KHEER"}
						price="25.99"
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/13_unffoh.jpg"}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						id='7'
						name={"CHAPLI KEBAB"}
						price="9.99"
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/14_egyb8e.jpg"}
					/>
				</div>
			</Carousel>
			;
		</div>
	);
};

export default AllDishes;
