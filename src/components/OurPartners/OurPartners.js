import React from 'react'
import ourpartnersHeading from '../assets/images/ourpartnersHeading.png'
import Fade from 'react-reveal/Fade'

import partner1 from '../assets/ourpartners/1.png'
import partner2 from '../assets/ourpartners/2.png'
import partner3 from '../assets/ourpartners/3.png'
import partner4 from '../assets/ourpartners/4.png'
import partner5 from '../assets/ourpartners/5.png'
import partner6 from '../assets/ourpartners/6.png'
const OurPartners = () => {
    return (
        <Fade bottom duration={1500}>
        <div className="w-[100%] h-[100%] flex flex-col">
            {/* ourpartners heading */}
            <div className="w-[100%] h-[30%] flex">
                <img src={`${ourpartnersHeading}`} alt=""  className="mx-auto w-[60%] sm:w-[30%] md:w-[15%] h-[45%] sm:h-[45%] md:h-[95%]"/>
            </div>
            {/* all the partners */}
            <div className="flex flex-wrap w-[90%] md:w-[60%] h-[100%] mx-auto justify-between md:justify-around">
                <img src={`${partner1}`} alt="" className="transform scale-50 w-[35%] sm:w-[30%] h-[30%]"/>
                <img src={`${partner2}`} alt="" className="transform scale-50 w-[35%] sm:w-[30%] h-[30%]"/>
                <img src={`${partner3}`} alt="" className="transform scale-50 w-[35%] sm:w-[30%] h-[30%]"/>
                <img src={`${partner5}`} alt="" className="transform scale-100 w-[35%] sm:w-[30%] h-[30%]"/>
                <img src={`${partner6}`} alt="" className="transform scale-75 w-[35%] sm:w-[30%] h-[30%]"/>
                <img src={`${partner4}`} alt="" className="transform scale-100 w-[35%] sm:w-[30%] h-[30%]"/>
                
            </div>
        </div>
        </Fade>
    )
}

export default OurPartners
