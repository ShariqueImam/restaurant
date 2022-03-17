import React from "react";
import Fade from "react-reveal/Fade";
import { useDispatch } from 'react-redux';
import { cartItemsActions } from '../../../store/cartItemsReducer'
const SingleDish = ({ imageURL, name, price, info, id }) => {
  const dispatch = useDispatch()
  // adding items to cart
  const addToCartHandler = () => {
    // passing the data as payload to addItems function in reducers
    dispatch(
      cartItemsActions.addItem({
        id: id,
        name: name,
        price: +price,
        amount: 1,
        displayImage: imageURL,
      })
    );
  };

  return (
    <Fade bottom duration={1500}>
      <div className="sadfasdfw-[100%] h-[100%] my-4">
        {/* image */}
        <div className="w-[100%] h-[60%] flex">
          <img
            src={`${imageURL}`}
            alt={`${name} Image`}
            className="w-[80%] h-[100%] mx-auto rounded-2xl"
          />
        </div>
        {/* name */}
        <div className="">
          <p
            className="text-center text-md sm:text-lg md:text-3xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            {name}
          </p>
        </div>
        {/* price */}
        <div className="w-[100%] flex justify-center items-center">
          <p className="border-t-2 border-gray-400 w-[30%] sm:w-[40%]"></p>
          <p className="text-center w-20%">${price} </p>
          <p className="border-t-2 border-gray-400 w-[30%] sm:w-[40%]"></p>
        </div>
        {/* info */}
        <div className="my-8">
          <p className="text-center text-xs sm:text-lg md:text-lg">{info}</p>
        </div>
        {/* order */}
        <div onClick={addToCartHandler} className="cursor-pointer hover:bg-opacity-[0.99] transition duration-[350ms] transform hover:translate-y-2 hover:text-gray-100 text-gray-300 rounded-md text-center py-2 sm:py-2 md:py-2 px-2 sm:px-2 md:px-0 bg-red-800 w-[70%] sm:w-[50%] md:w-[30%] mx-auto hover:bg-red-700">
          <p className="" >ORDER</p>
        </div>
      </div>
    </Fade>
  );
};

export default SingleDish;
