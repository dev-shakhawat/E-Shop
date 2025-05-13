import React from 'react';

function Button({type, text}) {
    return (
        <button
            className={`py-4 px-10 bg-brand rounded-[10px] w-fit font-montserrat font-bold mt-4 text-[20px] leading-[30px] text-white `}
            type={type}>{text}</button>
    );
}

export default Button;
