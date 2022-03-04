import React from "react";
import NavDrawer from "./NavDrawer";
const MainNavbar = (props) => {
  const [Link, setLink] = React.useState("home");
  const [isOpen, setIsOpen] = React.useState(false);

  // const BgBlur = styled.div`
  // 	background: rgba(255, 255, 255, 0.05);
  // 	border-radius: 6px;
  // 	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  // 	backdrop-filter: blur(7.9px);
  // 	-webkit-backdrop-filter: blur(${isOpen ? "25px" : "7.9px"});
  // 	z-index: 9999;
  // `;
  const navClickHandler = (clickedNav) => {
    props.onScroll(clickedNav);
    setLink(clickedNav);
    setIsOpen(false);
  };
 

  return (
    <div className="flex z-40 w-[100%]">
      {/* placing the border into the navbar content */}

      <div className="w-[100%] ">
        <nav
          // className={` h-7v flex ${
          // 	isOpen ? "h-42v" : ""
          // }  bg-transparent opacity-90 flex`}
          className="h-[6vh] flex bg-transparent opacity-90"
        >
          <div className="h-[100%] my-auto px-2 sm:px-8 lg:px-8 lg:flex p-0 mx-auto">
            <div className="h-[100%] flex items-center justify-between">
              <div className="hidden sm:flex items-center w-screen m-auto ">
                <div className="md:flex w-screen flex flex-row">
                  <div className="flex mx-auto">
                    <div
                      className="m-auto text-center flex tracking-wide"
                      style={{
                        fontFamily: "PT Sans Narrow, sans-serif",
                      }}
                    >
                      <div
                        onClick={() => { navClickHandler('home') }}
                        className={`nav-bar-animation inline text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex  cursor-pointer transform hover:translate-y-1 tracking-widest xl:tracking-wide ${Link === "home" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">HOME</p>
                      </div>
                      {/* products dropdown */}
                      <div
                        onClick={() => { navClickHandler('speciality') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex   cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${Link === "speciality" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">SPECIALITY</p>
                      </div>

                      <div
                        onClick={() => { navClickHandler('chefs') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex   cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${Link === "cook" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">CHEFS</p>
                      </div>
                      <div
                        onClick={() => { navClickHandler('ourpartners') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex  cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${Link === "ourpartners" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">OUR PARTNERS</p>
                      </div>
                      <div
                        onClick={() => { navClickHandler('contact') }}
                        className={`nav-bar-animation  text-red-800 sm:px-8 md:px-2 py-2  text-sm sm:text-md md:text-lg font-medium md:mx-8 flex  cursor-pointer transform hover:translate-y-1 tracking-widest mfd:tracking-widest ${Link === "contact" && "border-b-2 border-red-800"
                          }`}
                      >
                        <p className=" mx-1">CONTACT</p>
                      </div>
                    </div>
                  </div>
                </div>
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
