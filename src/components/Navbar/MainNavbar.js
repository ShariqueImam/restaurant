import React from "react";
import NavDrawer from "./NavDrawer";
import { RiShoppingBag3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const MainNavbar = (props) => {
  const [LinkClick, setLinkClick] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false);

  const navClickHandler = (clickedNav) => {
    props.onScroll(clickedNav);
    setLinkClick(clickedNav);
    setIsOpen(false);
  };


  return (
    <div className="flex z-40 w-[100%]">
      {/* placing the border into the navbar content */}

      <div className="w-[100%]">
        <nav
          // className={` h-7v flex ${
          // 	isOpen ? "h-42v" : ""
          // }  bg-transparent opacity-90 flex`}
          className="h-[6vh] flex bg-transparent opacity-90"
        >
          <div className="h-[100%] my-auto px-2 sm:px-8 lg:px-8 lg:flex p-0 mx-auto">
            <div className="h-[100%] flex items-center justify-between">
              <div className="hidden sm:grid sm:grid-cols-7 items-center">
                <div className="col-span-1"></div>
                <div className="md:flex flex flex-row mx-auto col-span-5">
                  <div className="flex mx-auto">
                    <div
                      className="m-auto text-center flex tracking-wide"
                      style={{
                        fontFamily: "PT Sans Narrow, sans-serif",
                      }}
                    >
                      <div
                        onClick={() => { navClickHandler('home') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex  cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide ${LinkClick === "home" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">HOME</p>
                      </div>
                      {/* products dropdown */}
                      <div
                        onClick={() => { navClickHandler('speciality') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex   cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${LinkClick === "speciality" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">SPECIALITY</p>
                      </div>

                      <div
                        onClick={() => { navClickHandler('cook') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex   cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${LinkClick === "cook" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">CHEFS</p>
                      </div>
                      <div
                        onClick={() => { navClickHandler('ourpartners') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex  cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${LinkClick === "ourpartners" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">OUR PARTNERS</p>
                      </div>
                      <div
                        onClick={() => { navClickHandler('contact') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex  cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${LinkClick === "contact" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">CONTACT</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* adding the cart button */}
                <Link to="/cart" className="px-6 py-2 flex text-gray-200 cursor-pointer items-center justify-center bg-red-800  mx-auto rounded-full" >
                  <p style={{
                    fontFamily: "PT Sans Narrow, sans-serif",
                  }} className="text-xl sm:text-xl md:text-xl lg:text-xl text-gray-200 tracking-widest">Cart</p>
                  <RiShoppingBag3Line className="  p-[5px] rounded-full text-4xl" />
                </Link>
              </div>
              <div className="flex sm:hidden w-[15vh] justify-center">
                {/* hamburger */}
                {<NavDrawer onScroll={navClickHandler} />}
              </div>
            </div>
          </div>
          {/* place of transiton */}
        </nav>
      </div>
    </div>
  );
};

export default MainNavbar;
