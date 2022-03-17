import React from 'react'

const SingleCook = (props) => {
    return (
        <div className="w-[100%] h-[100%]">
			{/* image */}
			<div className="w-[100%] h-[75%] flex">
                <img src={`${props.imageURL}`} alt={`${props.name} Image` }  className="w-[40%] h-[100%] mx-auto"/>
			</div>
			{/* name */}
			<div className="">
				<p className="text-center text-md sm:text-lg md:text-3xl" style={{ fontFamily: "Cormorant Garamond, serif" }} >{props.name}</p>
			</div>
			{/* exp */}
            <div className="w-[100%] flex justify-center items-center">
                <p className="border-t-2 border-gray-400 w-[30%] sm:w-[30%]"></p>
                <p className="text-center w-20%">{props.experience} </p>
                <p className="border-t-2 border-gray-400 w-[30%] sm:w-[30%]"></p>
			</div>
			{/* expertise*/}
            <div className="my-2 flex flex-col">
                <h4 className="mx-auto tracking-widest" style={{ fontFamily: "Cormorant Garamond, serif" }}>Expert In</h4>
				<p className="text-center tracking-widest">{props.expert}</p>
			</div>
		
           
		</div>
    )
}

export default SingleCook
