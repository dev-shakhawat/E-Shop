import React from 'react';
import Button from "../common/Button.jsx";

function BestSellerRight() {
    return (
        <div className={`text-center pb-5 lg:pb-0  `}>
            <h2 className="font-poppins font-semibold text-xl sm:text-[25px] md:text-[28px] lg:text-[36px] lg:leading-[46px] text-primary mt-5 sm:mt-10 md:mt-15 lg:mt-20   ">Buy
                One,<br/>
                Get One Free!</h2>
            <p className="font-montserrat font-normal text-[14px] md:text-base lg:text-[18px] leading-[30px] mt-2  lg:mt-5 text-primary   ">50%
                off
                promo for
                all
                headphones &
                earphones.</p>
            <Button text={`Shop Now`} style={` mt-5 sm:mt-7 md:mt-10   lg:mt-16 py-1.5 md:py-4 px-6 md:px-10  `}/>
        </div>
    );
}

export default BestSellerRight;
