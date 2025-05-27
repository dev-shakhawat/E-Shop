import React from 'react';
import Container from "../common/Container.jsx";


import specialdealone from "../../assets/images/specialdealone.png";
import specialdealtwo from "../../assets/images/specialdealtwo.png";
import Button from "../common/Button.jsx";

function SpecialDeal() {
    return (
        <Container>
            <div className="flex gap-3 md:gap-6 md:flex-row flex-col">
                {/*  left part  */}
                <div
                    className="flex-2 rounded-[15px] overflow-hidden pt-[40px] sm:pt-[65px] md:pt-[80px] lg:pt-[102px] pb-[101px] pl-5 sm:pl-7 md:pl-10 lg:pl-[59px] "
                    style={{
                        background: `url(${specialdealone})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}>

                    <h2 className="font-poppins font-semibold text-base sm:text-[18px] md:text-xl lg:text-[24px] leading-[36px] text-primary w-[250px]  ">Free
                        Shipping
                        Everywhere!</h2>
                    <p className="mt-2 md:mt-5 font-montserrat font-normal text-base md:text-xl leading-[30px] text-primary lg:w-[422px]   ">Special
                        for
                        orders over
                        $500.00
                        worldwide.
                        Available throughout May & June 2023.</p>
                    <Button text={`Shop Now`}
                            style={` mt-5 sm:mt-7 md:mt-10   lg:mt-16 py-1.5 md:py-4 px-6 md:px-10  `}/>
                </div>


                {/*  right part  */}
                <div className="flex-1 rounded-[15px] overflow-hidden pt-14 pl-14 pb-5 md:pb-0 " style={{
                    background: `url(${specialdealtwo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>

                    <h2 className="font-poppins font-semibold text-base sm:text-[18px] md:text-xl lg:text-[24px] leading-[36px] text-primary w-[250px]  ">Black
                        Friday
                        Clearance</h2>
                    <p className="mt-2 md:mt-5 font-montserrat font-normal text-base md:text-xl leading-[30px] text-primary lg:w-[422px]    ">
                        Up to 80% promo for all products!</p>
                    <Button text={`Shop Now`}
                            style={` mt-5 sm:mt-7 md:mt-10   lg:mt-16 py-1.5 md:py-4 px-6 md:px-10  `}/>

                </div>
            </div>
        </Container>
    );
}

export default SpecialDeal;
