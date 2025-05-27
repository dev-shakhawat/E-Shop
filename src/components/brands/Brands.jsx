import React from 'react';
import Marquee from "react-fast-marquee";
import Container from "../common/Container.jsx";


function Brands() {
    return (
        <div className={` pb-10 sm:pb-15 md:b-20 lg:pb-[100px] pt-10 lg:pt-0`}>
            <Container>

                {/*  brands marque  */}
                <Marquee npm rpauseOnHover={true}>
                    <div className="flex gap-10 sm:gap-20 md:gap-30 lg:gap-40 items-center">

                        <img src="/images/brand1.png" alt="brand1"
                             className={`w-[50px] sm:w-[80px] md:w-[110px] lg:w-auto `}/>
                        <img src="/images/brand2.png" alt="brand2"
                             className={`w-[50px] sm:w-[80px] md:w-[110px] lg:w-auto `}/>
                        <img src="/images/brand3.png" alt="brand3"
                             className={`w-[50px] sm:w-[80px] md:w-[110px] lg:w-auto `}/>
                        <img src="/images/brand4.png" alt="brand4"
                             className={`w-[50px] sm:w-[80px] md:w-[110px] lg:w-auto `}/>
                        <img src="/images/brand5.png" alt="brand5"
                             className={`w-[50px]  sm:w-[80px]  md:w-[110px] lg:w-auto `}/>
                    </div>
                </Marquee>
            </Container>
        </div>
    );
}

export default Brands;
