import React from "react";
import welcome from "../assets/images/welcome.png";
import Typing from "react-typing-animation";

const HomeContent = (props	) => {
	const getStartedClickHandler = () => { 
		props.onScroll('dishes')
	 }
	 const letsEatClickHandler = () => { 
		props.onScroll('dishes')
	 }
	return (
		<div className="h-[100%] w-[100%]">
			<div className="h-[60%] w-[100%] flex flex-col mt-12 sm:my-4 md:my-2">
				{/* mainline */}
				<div className="text-red-800 text-xl sm:text-2xl md:text-2xl flex w-[50%] sm:w-[25%] mx-auto">
					<img
						src={`${welcome}`}
						alt=""
						className="mx-auto sm:w-[80%] md:w-[60%]"
					/>
				</div>
				<div className="text-red-800 text-xl sm:text-2xl md:text-2xl flex w-[50%] mx-auto">
					<p className="mx-auto animate__animated animate__backInDown text-center my-6">
						WE PROVIDE <span className="">BEST QUALITY</span>
					</p>
				</div>
				{/* heading */}
				<div className="text-red-800 text-5xl sm:text-7xl md:text-5xl lg:text-7xl tracking-widest mx-auto my-3">
					<p className="mx-auto animate__animated animate__backInLeft">
						FOOD
					</p>
				</div>
				<div className="text-red-800 text-xl sm:text-2xl md:text-xl lg:text-2xl flex mt-4">
					<p className="text-center mx-auto animate__animated animate__backInUp">
						IN TOWN
					</p>
				</div>
				<div className="text-red-800 md:text-red-800 text-md sm:text-xl md:text-sm lg:text-lg flex my-0 sm:my-8 md:my-4">
					<p className="text-center mx-auto">
					Molestiae repellat ut deserunt harum, vero reprehenderit
							soluta optio obcaecati eos adipisci. Optio, totam
							molestias. Natus autem nisi sequi, minima labore
							recusandae!
						<Typing speed={30}>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						
						</Typing>
					</p>
				</div>
			</div>

			{/* buttons */}
			<div className="h-[40%] w-[100%] flex sm:mt-4 md:mt-8">
				<div className="mx-auto w-[100%] sm:w-[70%] md:w-[50%] flex justify-around h-[30%] items-center">
					<button style={{ fontFamily: 'Open Sans, sans-serif'}} onClick={getStartedClickHandler} className="mt-12 hover:bg-opacity-[0.85] transition duration-[350ms] transform hover:translate-y-2 px-4 sm:px-2 md:px-2 py-2 sm:py-4 md:py-4 rounded-lg tracking-wider w-[40%] sm:w-[35%] md:w-[30%]  bg-red-900 text-gray-300 font-serif  hover:text-gray-100">
						Get Started
					</button>
					<button style={{ fontFamily: 'Open Sans, sans-serif'}} onClick={letsEatClickHandler} className="mt-12 hover:bg-opacity-[0.85] transition duration-[350ms] transform hover:translate-y-2 px-4 sm:px-2 md:px-2 py-2 sm:py-4 md:py-4 rounded-lg tracking-wider w-[40%] sm:w-[35%] md:w-[30%]  bg-red-900 text-gray-300 font-serif  hover:text-gray-100">
						Lets Eat
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
