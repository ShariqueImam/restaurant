import React from 'react'
import ourpartnersHeading from '../assets/images/ourpartnersHeading.png'
import Fade from 'react-reveal/Fade'


const OurPartners = () => {
    return (
        <Fade bottom duration={1500}>
            <div className="w-[100%] h-[100%] flex flex-col">
                {/* ourpartners heading */}
                <div className="w-[100%] h-[35%] flex">
                    <img src={`${ourpartnersHeading}`} alt="" className="mx-auto w-[60%] sm:w-[30%] md:w-[15%] h-[55%] sm:h-[45%] md:h-[100%]" />
                </div>
                {/* all the partners */}
                <div className="flex flex-wrap w-[90%] md:w-[60%] h-[100%] mx-auto justify-between md:justify-around">
                    <img src={`${"https://res.cloudinary.com/shariqcloud/image/upload/v1647506479/William%20Barley/ourpartners/3_gswoho.png"}`} alt="" className="transform scale-[0.7] w-[35%] sm:w-[30%] h-[30%]" />
                    <img src={`${"https://res.cloudinary.com/shariqcloud/image/upload/v1647506479/William%20Barley/ourpartners/5_dpogpo.png"}`} alt="" className="transform scale-[0.8] w-[35%] sm:w-[30%] h-[30%]" />
                    <img src={`${"https://res.cloudinary.com/shariqcloud/image/upload/v1647506479/William%20Barley/ourpartners/4_s0me1z.png"}`} alt="" className="transform scale-[0.8] w-[35%] sm:w-[30%] h-[30%]" />
                    <img src={`${"https://res.cloudinary.com/shariqcloud/image/upload/v1647506479/William%20Barley/ourpartners/6_nlipoo.png"}`} alt="" className="transform scale-[0.8] scale-x-[1] w-[35%] sm:w-[30%] h-[30%]" />
                    <img src={`${"https://res.cloudinary.com/shariqcloud/image/upload/v1647506478/William%20Barley/ourpartners/2_uqknsb.png"}`} alt="" className="transform scale-75 w-[35%] sm:w-[30%] h-[30%]" />
                    <img src={`${"https://res.cloudinary.com/shariqcloud/image/upload/v1647506478/William%20Barley/ourpartners/1_vlotvg.png"}`} alt="" className="transform scale-[0.8] w-[35%] sm:w-[30%] h-[30%]" />

                </div>
            </div>
        </Fade>
    )
}

export default OurPartners
