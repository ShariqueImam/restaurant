import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "../assets/images/whiteSignature.png";
import ContactForm from "./ContactForm";
import Location from "./Location";
const Footer = (props) => {
	const homeClickHandler = () => {
		props.onScroll('home');
	}
	;
	const specialityClickHandler = () => {
		props.onScroll("speciality");

	};
	const cookClickHandler = () => {
		props.onScroll("cook");

	};
	const ourpartnersClickHandler = () => {
		props.onScroll("ourpartners");

	};
	const contactClickHandler = () => {
		props.onScroll("contact");

	};
	return (
		<div className="w-[100%] h-[100%] bg-red-800 text-white">
			{/* top block */}
			<div className="h-[30%] w-[100%] md:w-[50%] mx-auto flex justify-between items-center">
				<a
					className={` flex flex-col justify-center tracking-wider w-[45%] h-[100%] sm:h-[100%] md:h-[80%] text-center ani bg-red-900 p-4 py-10 sm:py-10 md:py-8 my-2 sm:my-2 md:my-2 rounded-3xl  text-white cursor-pointer transform hover:translate-y-3`}
					href="whatsapp://send?text=William Barley Here! How can we help you?&phone=+923174290702"
				>
					<div className="text-sm">Contact Us at +92317 4290702</div>
					<div className="text-center" style={{ color: "white" }}>
						<PhoneIcon />
					</div>
				</a>
				<div className={` flex flex-col justify-center tracking-wider ani w-[45%] h-[100%] sm:h-[100%] md:h-[80%] text-center  bg-red-900 p-4 py-8 my-2 sm:my-2 md:my-2 rounded-3xl  text-white cursor-pointer transform hover:translate-y-3`}>
					<div className="text-sm">
						Office No 2 ,Main Boulevard, California.
					</div>
					<div className="text-center" style={{ color: "white" }}>
						<LocationOnIcon />
					</div>
				</div>
			</div>

			{/* center block */}
			<div className="h-[55%] w-[100%] mx-0 md:mx-8 my-4 grid grid-cols-1 sm:grid-cols-2 md:flex">
				{/* company info */}
				<div className="w-[100%] md:w-[30%] flex flex-col">
					<img
						src={`${Logo}`}
						alt="William Barley"
						className="h-[50%] md:h-[30%] w-60% md:w-[50%] mx-auto"
					/>
					<div className="text-white text-xs md:text-sm text-center mb-8 sm:mb-0">
						Lorem omnis sed quaeomnis sed quaerat consequatrat
						consequaturr quia fugit accusamus labore et possimus
						doloremque molestias molestiae sequi blanditi.
					</div>
				</div>
				{/* navigation */}
				<div className="w-[100%] md:w-[20%] flex flex-col">
					<h2 className="text-center">QUICK LINKS</h2>
					<ul
						style={{
							fontFamily: "PT Sans Narrow, sans-serif",
						}}
						className="font-thin text-sm flex flex-col items-center my-auto"
					>
						<li className="m-2 cursor-pointer" onClick={homeClickHandler}>HOME</li>
						<li className="m-2 cursor-pointer" onClick={specialityClickHandler}>SPECIALITY</li>
						<li className="m-2 cursor-pointer" onClick={cookClickHandler}>CHEFS</li>
						<li className="m-2 cursor-pointer" onClick={ourpartnersClickHandler}>OUR PARTNERS</li>
						<li className="m-2 cursor-pointer" onClick={contactClickHandler}>CONTACT</li>
					</ul>
				</div>
				{/* contact */}
				<div className="w-[100%] md:w-[25%]">
					<h2 className="w-50% mx-auto mt-8 sm:mt-0 text-center sm:text-justify">CONTACT US</h2>
					<ContactForm />
				</div>
				{/* map */}
				<div className="w-[100%] md:w-[10%] flex items-center justify-center">
					<Location />
				</div>
			</div>

			{/* bottom block */}
			<div
				className="h-[15%] bg-red-900 w-[100%] flex flex-col"
				style={{
					color: "rgb(255,255,255)",
					fontFamily: "Fira Sans, sans-serif",
				}}
			>
				{/* icons */}
				<div className="w-[50%] sm:w-[35%] md:w-[10%] flex mx-auto justify-around p-1">
					<div className="cursor-pointer">
						<a href="https://google.com">
							<FacebookIcon />
						</a>
					</div>
					<div className="cursor-pointer">
						<a href="https://google.com">

							<InstagramIcon />
						</a>
					</div>
					<div className="cursor-pointer">
						<a href="https://google.com">
							<TwitterIcon />
						</a>
					</div>
					<div className="cursor-pointer">
						<a href="https://google.com">

							<LinkedInIcon />
						</a>
					</div>
				</div>
				{/* copywrite */}
				<div className="mx-auto text-sm md:text-xs p-4 md:p-1 text-center">
					Copywrite @2021 Fnatic, All rights reserved. CRAFTED BY SHARIQUE
				</div>
			</div>
		</div>
	);
};

export default Footer;
