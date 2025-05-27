import React, {useEffect, useRef, useState} from 'react';
import ArrowDown from "../../assets/icons/ArrowDown.jsx";
import MultiRangeSlider from "multi-range-slider-react";
import {Range} from "react-range";


function PriceChooser() {
    const STEP = 1;
    const MIN = 0;
    const MAX = 10000;
    const [isopen, setIsopen] = useState(false);
    const priceboxRef = useRef(null)
    const [priceboxHeight, setPriceboxHeight] = useState(0)
    const [startprice, setStartPrice] = useState(100);
    const [endprice, setEndPrice] = useState(5000);
    const [values, setValues] = useState([100, 5000]);

    useEffect(() => {
        if (isopen) {
            setPriceboxHeight(priceboxRef.current.scrollHeight)
        } else {
            setPriceboxHeight(0)
        }

    }, [isopen])


    return (
        <div className={``}>

            {/*   head   */}
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsopen(!isopen)}>
                <h3 className="font-montserrat font-bold text-xl leading-[30px] text-primary">Price</h3>
                {isopen ? <ArrowDown style={` duration-400  rotate-[180deg] `}/> :
                    <ArrowDown style={`duration-400  rotate-[0deg]`}/>}
            </div>

            {/*  body   */}
            <div ref={priceboxRef} className="overflow-hidden transition-all duration-400"
                 style={{height: `${priceboxHeight}px`}}>

                {/*  price box  */}
                <div className="flex gap-[11px] mt-[25px] mb-[30px]">

                    {/*   start price  */}
                    <div className="flex-1 py-[25px] border border-[#929292] rounded-[10px] text-center   ">
                        <span
                            className="font-montserrat font-normal text-base leading-[24px]  ">$ {values[0]}</span>
                    </div>


                    {/*   end price   */}
                    <div className="flex-1 py-[25px] border border-[#929292] rounded-[10px] text-center   ">
                        <span className="font-montserrat font-normal text-base leading-[24px]  ">$ {values[1]}</span>
                    </div>

                </div>

                {/*  price changer radio  */}
                <Range
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({props, children}) => (
                        <div {...props} style={{
                            ...props.style,
                            height: "2px",
                            width: "100%",
                            backgroundColor: "#c3c3c3",
                        }}>
                            {children}
                        </div>
                    )}
                    renderThumb={({props}) => (
                        <div {...props} style={{
                            ...props.style,
                            height: "16px",
                            width: "16px",
                            backgroundColor: "#FF624C",
                            borderRadius: "50%",
                        }}/>
                    )}
                />
                <div>
                    Selected range: {values[0]} - {values[1]}
                </div>


            </div>


        </div>
    );
}

export default PriceChooser;
