import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Dish1 from "../../assets/images/dishes/6.jpeg";
import Dish2 from "../../assets/images/dishes/7.jpeg";
import Dish3 from "../../assets/images/dishes/8.jpeg";
import Dish4 from "../../assets/images/dishes/11.jpeg";
import Dish5 from "../../assets/images/dishes/12.jpg";
import Dish6 from "../../assets/images/dishes/13.jpg";
import Dish7 from "../../assets/images/dishes/14.jpeg";
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
				responsive={responsive}
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
						name={"BHAIL PURI"}
						price={"$2.99"}
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={Dish1}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						name={"PASTA"}
						price={"$4.99"}
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={Dish2}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						name={"PIZZA PASTA"}
						price={"$8.99"}
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={Dish3}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						name={"SAMOSA"}
						price={"$2.99"}
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={Dish4}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						name={"WHITE KARAHI"}
						price={"$19.99"}
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={Dish5}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						name={"KHEER"}
						price={"$25.99"}
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={Dish6}
					/>
				</div>
				<div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[60%] mx-auto sm:my-8 md:my-2">
					<SingleDish
						name={"CHAPLI KEBAB"}
						price={"$9.99"}
						info={
							"Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
						}
						imageURL={Dish7}
					/>
				</div>
			</Carousel>
			;
		</div>
	);
};

export default AllDishes;
