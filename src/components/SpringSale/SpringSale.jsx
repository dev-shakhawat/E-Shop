import React from 'react';
import SpringCounter from "./SpringCounter.jsx";
import SpringSlider from "./SpringSlider.jsx";
import Container from "../common/Container.jsx";

// shap
import springsaleshape from "../../assets/images/springsaleshape.png"

function SpringSale() {
    return (
        <div className={`bg-[#F4F4F4] py-5 sm:py-7 md:py-10 lg:py-16`}>
            <Container>

                <div className="xl:flex justify-between ">


                    {/*  spring counter  */}
                    <div className="flex items-center justify-center relative">
                        <SpringCounter/>

                        {/*  shap  */}
                        <img src={springsaleshape} alt="springsaleshape"
                             className={`absolute bottom-0 left-0 w-[70px] lg:w-auto`}/>
                    </div>


                    {/*  spring salider   */}
                    <div className="mt-5 lg:mt-0">
                        <SpringSlider/>
                    </div>

                </div>


            </Container>
        </div>
    );
}

export default SpringSale;
