import React from "react";
import SingleSpecial from "./SignleSpecial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Special1 from "../../assets/images/dishes/2.PNG";
import Special2 from "../../assets/images/dishes/3.PNG";
import Special3 from "../../assets/images/dishes/5.PNG";
import { Roll } from 'react-reveal'
const Special = () => {
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
        arrows={false}
        swipeable={true}
        draggable={false}
        // showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={ true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      // customButtonGroup={<ButtonGroup />}
      >
        <div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
          <Roll right duration={300}>
            <SingleSpecial
              name={"SUSHI"}
              price={"$6.99"}
              info={
                "Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
              }
              imageURL={Special1}
            />
          </Roll>
        </div>
        <div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
          <Roll right duration={600}>
            <SingleSpecial
              name={"STEAK"}
              price={"$4.99"}
              info={
                "Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
              }
              imageURL={Special2}
            />
          </Roll>
        </div>
        <div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
          <Roll right duration={900}>

            <SingleSpecial
              name={"CHICKEN"}
              price={"$7.99"}
              info={
                "Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
              }
              imageURL={Special3}
            />
          </Roll>
        </div>

      </Carousel>
      ;
    </div>
  );
};

export default Special;
