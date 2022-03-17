import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsActions } from "../../store/cartItemsReducer";
import SingleCartItems from "./SingleCartItems";
import Logo from '../Navbar/Logo'
import CustomerDetailsForm from './CustomerDetailsForm'
import Footer from '../Footer/Footer'
import { Slide } from 'react-reveal'
const style = {
  cart: "",
  header: "w-[100%] h-[60%] flex flex-col",
  cartHeading: "w-[100%] flex justify-center",
  cartContainer: "rounded-2xl bg-red-100 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] flex flex-col mx-auto my-16 p-3 py-8 md:p-10",
  cartItemsContainer: "flex flex-col",
  total: "flex text-xl sm:text-xl md:text-xl lg:text-xl ml-auto",
  totalHeading: "text-red-800 font-semibold mx-1",
  customerDetailsContainer: "",
  customerDetailsForm: "",
  input: "outline-none px-2 py-2 sm:px-2 sm:py-2 md:px-2 md:py-2 lg:px-4 lg:py-4",
  emptyCart: 'text-xl sm:text-xl md:text-2xl lg:text-3xl text-red-700 mx-auto mb-12'
};


const Cart = () => {
  // cartItems is from the index.js(store)
  const cartItemsFromStore = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  // handling  adding  items to cart
  const cartItemAddHandler = (item) => {
    dispatch(cartItemsActions.addItem({ ...item, amount: 1 }));
    console.log(item)
  };
  // handling remove items from cart
  const cartItemRemoveHandler = (id) => {
    dispatch(cartItemsActions.removeItem(id));

  };

  return (
    <Slide bottom className={style.cart}>
      {/* add the signature of the site */}
      <div className={style.header}>
        <Logo />
      </div>
      {/* add the cart heading */}
      <div className={style.cartHeading}>
        <img src="https://fontmeme.com/permalink/220316/34c2d7db96cc3c93e394fb1b37f2762a.png" alt="signature-fonts" border="0" />
      </div>
      {/* add the cart container */}
      <div className={style.cartContainer}>
        {/* displaying cart Items */}
        <div className={style.cartItemsContainer}>
          {/* map the items that are added to cart */}
          {/* no item found */}
          {!cartItemsFromStore.items.length > 0 && <div className={style.emptyCart} style={{ fontFamily: 'Barriecito, cursive' }}>Cart is empty</div>}
          {cartItemsFromStore.items.map((item) => <SingleCartItems item={item} key={item.id} onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(
              null,
              item.id
            )} />)}
        </div>
        {/* displaying the total of the cart items */}
        <div className={style.total} style={{ fontFamily: 'Barriecito, cursive' }}>
          <h2 className={style.totalHeading}>Total : </h2>
          <h2 className={style.totalHeading}> ${!cartItemsFromStore.items.length == 0 ? cartItemsFromStore.totalAmount.toFixed(2) : '0'}</h2>
        </div>
      </div>
      {/* enter your details */}
      <div className={style.customerDetailsContainer}>
        {/* add the detils form  */}
        <CustomerDetailsForm />
      </div>
      <Footer />
    </Slide>
  );
};

export default Cart;
