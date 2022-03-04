import React from "react";
import Services from "../Services/Services";
import SingleCounter from "./SingleCounter";
import Slide from "react-reveal/Slide";

const Counter = () => {
  return (


    <div className=" h-[100%] w-[100%]">
      {/* services */}
      <Slide bottom duration={500}>

        <div className="h-[40%] flex w-[100%]">
          <Services />
        </div>
      </Slide>

      {/* counter */}
      <div className="h-[60%] flex justify-around my-6">
        {/* orders */}
        <Slide bottom duration={800}>

          <div className="flex flex-col items-center justify-center">
            <SingleCounter start={0} end={300} duration={2} />
            <p className="text-red-800 text-md sm:text-lg md:text-2xl">
              Successful Orders
            </p>
          </div>
        </Slide>


        {/* fooditems */}
        <Slide bottom duration={1200}>

          <div className="flex flex-col items-center justify-center">
            <SingleCounter start={0} end={25} duration={1} />
            <p className="text-red-800 text-md sm:text-lg md:text-2xl">
              Food Items
            </p>
          </div>
        </Slide>


        {/* clients */}
        <Slide bottom duration={2000}>

          <div className="flex flex-col items-center justify-center">
            <SingleCounter start={0} end={150} duration={2} />
            <p className="text-red-800 text-md sm:text-lg md:text-2xl">
              Happy Clients
            </p>
          </div>
        </Slide>
      </div>
    </div>

  );
};

export default Counter;
