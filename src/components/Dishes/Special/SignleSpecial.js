import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Card = styled.div`
  border-radius: 50%;
  background: #ffd1d1;
  box-shadow: inset 23px 23px 0px #665454, inset -23px -23px 0px #ffffff;
`;
const SignleSpecial = (props) => {
  return (
    <Fade bottom duration={1000}>
      <Card className="w-[100%] h-[100%]">
        {/* image */}
        <div className="w-[100%] h-[60%] flex">
          <img
            src={`${props.imageURL}`}
            alt={`${props.name} Image`}
            className="w-[80%] h-[100%] mx-auto rounded-2xl"
          />
        </div>
        {/* name */}
        <div className="">
          <p
            className="text-center text-md sm:text-lg md:text-3xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {props.name}
          </p>
        </div>
        {/* price */}
        <div className="w-[100%] flex justify-center items-center">
          <p className="border-t-2 border-gray-400 w-[30%] sm:w-[40%]"></p>
          <p className="text-center w-[20%]">{props.price} </p>
          <p className="border-t-2 border-gray-400 w-30% sm:w-[40%]"></p>
        </div>
        {/* info */}
        <div className="my-2">
          <p className="text-center">{props.info}</p>
        </div>
        {/* order */}
        <div className="tracking-wider cursor-pointer my-8 rounded-md text-center py-2 sm:py-2 md:py-2 lg:py-2 px-0 sm:px-2 md:px-0 bg-red-800 w-[70%] sm:w-[50%] md:w-[30%] mx-auto hover:bg-opacity-[0.99] transition duration-[350ms] transform hover:translate-y-2 hover:text-gray-100 text-gray-300 hover:bg-red-700">
          <p className="">ORDER</p>
        </div>
      </Card>
    </Fade>
  );
};

export default SignleSpecial;
