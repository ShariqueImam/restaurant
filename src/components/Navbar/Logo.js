import React from "react";
import signatureImg from '../assets/images/signature.png'
const Logo = () => {
	return (
		<div className="mx-auto">
            <div className="h-[60%]">
                <img src={`${signatureImg}`} alt=""  className="w-[36vh] h-[14vh] -rotate-3 scale-[0.75] sm:scale-[1]"/>
            </div>
			<div className="text-red-800 text-center md:text-2xl tracking-wide md:tracking-widest" style={{fontFamily: "PT Sans Narrow, sans-serif"}}>RESTAURANT</div>
		</div>
	);
};

export default Logo;
