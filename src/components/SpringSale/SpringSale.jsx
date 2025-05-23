import React from 'react';
import SpringCounter from "./SpringCounter.jsx";
import SpringSlider from "./SpringSlider.jsx";
import Container from "../common/Container.jsx";

// shap
import springsaleshape from "../../assets/images/springsaleshape.png"

function SpringSale() {
    return (
        <div className={`bg-[#F4F4F4] py-16`}>
            <Container>

                <div className="flex justify-between ">


                    {/*  spring counter  */}
                    <div className="flex items-center justify-center relative">
                        <SpringCounter/>

                        {/*  shap  */}
                        <img src={springsaleshape} alt="springsaleshape" className={`absolute bottom-0 left-0`}/>
                    </div>


                    {/*  spring salider   */}
                    <div className="">
                        <SpringSlider/>
                    </div>

                </div>


            </Container>
        </div>
    );
}

export default SpringSale;
