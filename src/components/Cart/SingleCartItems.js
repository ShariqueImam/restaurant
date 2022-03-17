import React from "react";
const style = {
  singleItemContainer: "justify-between w-[100%] grid grid-cols-4 py-6 sm:p-6",
  imageContainer: 'col-span-1',
  image: "h-[] sm:h-[] md:h-[12vh] lg:h-[10vh] w-[] sm:w-[] md:w-[8vw] lg:w-[6vw] rounded-xl",
  name: "col-span-1 m-auto text-gray-700 text-sm sm:text-xl md:text-lg lg:text-xl text-center",
  qty: "flex col-span-1 items-center justify-around text-gray-800",
  controlButton: "cursor-pointer text-red-800 text-xl sm:text-xl md:text-2xl lg:text-xl my-auto font-semibold",
  qtyValue: "border-r-2 border-l-2 border-red-800 px-2 sm:px-6 md:px-12 font-bold tracking-wide",
  price: "col-span-1 m-auto font-bold tracking-widest text-gray-800 text-sm sm:text-xl md:text-xl lg:text-xl"
};

const SingleCartItem = ({ item, onAdd, onRemove }) => {
  return (

    <div className={style.singleItemContainer}>
      <div className={style.imageContainer}>
        <img src={item.displayImage} alt={`Image for ${item.name}`} className={style.image} />
      </div>
      <div className={style.name} style={{ fontFamily: 'Barriecito, cursive' }}

      >{item.name}</div>
      <div className={style.qty} >
        <div className={style.controlButton} onClick={onAdd}>+</div>
        <div className={style.qtyValue}>{item.amount}</div>
        <div className={style.controlButton} onClick={onRemove}>-</div>
      </div>
      <div className={style.price} style={{ fontFamily: 'Roboto Serif, sans-serif' }}
      >${item.price}</div>
    </div>
  );
};

export default SingleCartItem;
