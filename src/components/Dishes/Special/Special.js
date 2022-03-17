import React from "react";
import SingleSpecial from "./SignleSpecial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
        autoPlay={true}
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
              id="1"
              name={"SUSHI"}
              price="6.99"
              info={
                "Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
              }
              imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/2_ih619d.png"}
            />
          </Roll>
        </div>
        <div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
          <Roll right duration={600}>
            <SingleSpecial
              id="2"
              name={"CHIKCEN SLICES"}
              price="4.99"
              info={
                "Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
              }
              imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/3_rnyvmf.png"}
            />
          </Roll>
        </div>
        <div className=" text-red-800 sm:w-[90%] md:w-[80%] h-[70%] mx-auto sm:my-8 md:my-2">
          <Roll right duration={900}>
            <SingleSpecial
              id="3"
              name={"CHICKEN"}
              price="7.99"
              info={
                "Lorem ipsum dolor, sit acolor quauredolores. quam quibusdam veritatis earum!"
              }
              imageURL={"https://res.cloudinary.com/shariqcloud/image/upload/v1647506500/William%20Barley/mainImages/5_q4tuog.png"}
            />
          </Roll>
        </div>

      </Carousel>
      ;
    </div>
  );
};

export default Special;
