import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SingleCook from './SingleCook'
import { Slide } from 'react-reveal'
const MainCarousel = () => {
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
            items: 3,
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
                swipeable={width < 700 ? true : false}
                draggable={false}
                // showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={width > 700 ? false : true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all 1s"
                transitionDuration={100}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                <Slide right duration={500}>

                    <div className=" text-red-800 sm:w-90%[] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
                        <SingleCook
                            name={"REYNOLDS REMON"}
                            experience={"4 YEARS"}
                            expert={
                                "CHICKEN STAKE, CHAPLI KEBAB"
                            }
                            imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506536/William%20Barley/mainImages/pexels-miquel-ferran-gomez-figueroa-3814446-removebg-preview_ecsrad.png"}
                        />
                    </div>
                </Slide>

                <Slide right duration={900}>

                    <div className=" text-red-800 sm:w-90%[] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
                        <SingleCook
                            name={"WILLIAM BARLEY"}
                            experience={"6 YEARS"}
                            expert={
                                "PASTA, PIZZA"
                            }
                            imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506536/William%20Barley/mainImages/pexels-kampus-production-6605421-removebg-preview_lkto0p.png"}
                        />
                    </div>
                </Slide>

                <Slide right duration={1200}>

                    <div className=" text-red-800 sm:w-90%[] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
                        <SingleCook
                            name={"MIKE ARNOLDS"}
                            experience={"2 YEARS"}
                            expert={
                                "FRIED CHICKEN"
                            }
                            imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506536/William%20Barley/mainImages/cook3_n9gmrs.png"}
                        />
                    </div>
                </Slide>
            </Carousel>
            ;
        </div>
    )
}

export default MainCarousel
