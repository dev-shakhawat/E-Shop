import React from 'react';
import {Link} from "react-router";

function Button({text, style = "", to = "#"}) {
    return (
        <Link to={to}
              className={` ${style}  inline-block bg-brand rounded-[5px] md:rounded-[10px] w-fit font-montserrat font-bold  text-[14px] md:text-base lg:text-[20px] leading-[30px] text-white cursor-pointer`}
        >{text}</Link>
    );
}

export default Button;
