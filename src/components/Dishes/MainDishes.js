import React from "react";
import Special from "./Special/Special";
import AllDishes from "./AllDishes/AllDishes";
import DishesHeading from "../assets/images/dishesHeading.png";
import Divider from "@mui/material/Divider";
import Heading from "../Heading/Heading";
import Zoom from "react-reveal/Zoom";

const MainDishes = () => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col">
      {/* place the dished heading  */}
      <div className="w-[100%] flex h-[10%]">
        <img
          src={`${DishesHeading}`}
          alt=""
          className="mx-auto h-[60%] transform scale-[0.8]"
        />
      </div>
      {/* special  dishes */}
      <div className="">
        {/* heading */}

        <div className="flex my-6 sm:my-8 md:my-16">
          <Heading heading="OUR SPECIAlITY" />
        </div>

        {/* special dishes carousel */}
        <div className="my-8">
          <Special />
        </div>
      </div>

      {/* all dishes */}
      <div className="">
        {/* heading */}
          <div className="flex my-8 sm:my-8 md:my-16">
            <Heading heading="ALL DISHES" />
			</div>
        {/* all dishes carousel */}
        <div>
          <AllDishes />
        </div>
      </div>
    </div>
  );
};

export default MainDishes;
