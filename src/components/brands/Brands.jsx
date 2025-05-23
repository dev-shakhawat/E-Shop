import React from 'react';
import Marquee from "react-fast-marquee";
import Container from "../common/Container.jsx";


function Brands() {
    return (
        <div className={`pb-[100px]`}>
            <Container>

                {/*  brands marque  */}
                <Marquee pauseOnHover={true}>
                    <div className="flex gap-x-40 items-center">

                        <img src="/images/brand1.png" alt="brand1"/>
                        <img src="/images/brand2.png" alt="brand2"/>
                        <img src="/images/brand3.png" alt="brand3"/>
                        <img src="/images/brand4.png" alt="brand4"/>
                        <img src="/images/brand5.png" alt="brand5"/>
                    </div>
                </Marquee>
            </Container>
        </div>
    );
}

export default Brands;
