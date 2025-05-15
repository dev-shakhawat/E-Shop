import React from 'react';

function Button({type, text, style = ""}) {
    return (
        <button
            className={` ${style}   bg-brand rounded-[10px] w-fit font-montserrat font-bold  text-[20px] leading-[30px] text-white cursor-pointer`}
            type={type}>{text}</button>
    );
}

export default Button;
