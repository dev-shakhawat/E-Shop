import React from 'react';
import Container from "../common/Container.jsx";
import BestSellerLeft from "./BestSellerLeft.jsx";
import BestSellerRight from "./BestSellerRight.jsx";

function BestSeller() {
    return (
        <div className={`py-5 sm:py-10 md:py-15 lg:py-20`}>
            <Container>
                <div className="flex lg:flex-row flex-col  gap-x-18.5">

                    {/*  left  */}
                    <div className="flex-2">
                        <BestSellerLeft/>
                    </div>

                    {/*  right  */}
                    <div className="flex-1 bg-[#F4F4F4] rounded-[10px]">
                        <BestSellerRight/>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default BestSeller;
