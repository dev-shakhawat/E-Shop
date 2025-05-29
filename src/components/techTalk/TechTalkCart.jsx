import React from 'react';

// image
import product from "../../assets/images/product.png";
import Button from "../common/Button.jsx";
import {Link} from "react-router";
import Timer from "../../assets/icons/Timer.jsx";

function TechTalkCart({title, buttontxt, date, buttonlink, image = product}) {
    return (
        <div
            className={`duration-300 hover:p-4 sm:hover:p-7 md:hover:p-10  lg:hover:p-[52px] border border-transparent hover:border-tertary/50 rounded-[10px] md:rounded-[15px] lg:rounded-[25px]`}>

            {/*  images  */}
            <div className=" rounded-[10px] md:rounded-[15px] lg:rounded-[25px] ">
                <img src={image} alt="image" className={`w-full object-cover`}/>
            </div>

            {/*  body/text  */}
            <div className="">
                <h3 className="line-clamp-2 font-poppins font-semibold text-[13px] sm:text-base md:text-xl lg:text-[24px] lg:leading-[30px] text-primary mt-8  ">{title}</h3>

                {/*  button/link/date  */}
                <div className="flex items-center justify-between mt-2 sm:mt-4 md:mt-6 lg:mt-8">
                    <Link to={buttonlink}
                          className={`font-montserrat font-bold text-[14px] lg:text-base leading-[24px] rounded-[10px] text-white bg-brand px-5 py-2`}>{buttontxt}</Link>

                    {/*  date  */}
                    <div className="flex items-center gap-2.5">
                        <Timer/>
                        <span
                            className={`font-montserrat font-normal text-sm leading-[20px] text-primary`}>{date}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TechTalkCart;
