import React from 'react';

// image
import product from "../../assets/images/product.png";
import Button from "../common/Button.jsx";
import {Link} from "react-router";
import Timer from "../../assets/icons/Timer.jsx";

function TechTalkCart({title, buttontxt, date, buttonlink, image = product}) {
    return (
        <div className={`p-[52px] border border-transparent hover:border-tertary/50 rounded-[25px]`}>

            {/*  images  */}
            <div className=" rounded-[25px] ">
                <img src={image} alt="image" className={`w-full object-cover`}/>
            </div>

            {/*  body/text  */}
            <div className="">
                <h3 className="font-poppins font-semibold text-[24px] leading-[30px] text-primary mt-8  ">{title}</h3>

                {/*  button/link/date  */}
                <div className="flex items-center justify-between mt-8">
                    <Link to={buttonlink}
                          className={`font-montserrat font-bold text-base leading-[24px] rounded-[10px] text-white bg-brand px-5 py-2`}>{buttontxt}</Link>

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
