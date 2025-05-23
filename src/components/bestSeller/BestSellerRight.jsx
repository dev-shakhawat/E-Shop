import React from 'react';
import Button from "../common/Button.jsx";

function BestSellerRight() {
    return (
        <div className={`text-center  `}>
            <h2 className="font-poppins font-semibold text-[36px] leading-[46px] text-primary mt-20   ">Buy One,<br/>
                Get One Free!</h2>
            <p className="font-montserrat font-normal text-[18px] leading-[30px] mt-5 text-primary   ">50% off promo for
                all
                headphones &
                earphones.</p>
            <Button text={`Shop Now`} style={`px-10 py-4 mt-12`}/>
        </div>
    );
}

export default BestSellerRight;
