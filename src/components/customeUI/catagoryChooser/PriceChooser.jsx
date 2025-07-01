import React, {useEffect, useRef, useState} from 'react';
import ArrowDown from "../../../assets/icons/ArrowDown.jsx";
import {Range} from "react-range";
import { dir } from 'i18next';


function PriceChooser() {
    const STEP = 50;
    const MIN = 50;
    const MAX = 10000;
    const [isopen, setIsopen] = useState(true);
    const priceboxRef = useRef(null)
    const [priceboxHeight, setPriceboxHeight] = useState(0)
    const [startprice, setStartPrice] = useState(100);
    const [endprice, setEndPrice] = useState(10000);
    const [values, setValues] = useState([100, 5000]);
    const [minVal , setMinVal] = useState(values[0])
    const [maxVal , setMaxVal] = useState(values[1])
    
    useEffect(() => {
        setMinVal(values[0])
        setMaxVal(values[1])
    }, [values])
    

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
                {isopen ? <ArrowDown style={` duration-400 w-[11px] h-[6px] rotate-[180deg] `}/> :
                    <ArrowDown style={`duration-400 w-[11px] h-[6px] rotate-[0deg]`}/>}
            </div>

            {/*  body   */}
            <div ref={priceboxRef} className="overflow-hidden transition-all duration-400"
                 style={{height: `${priceboxHeight}px`}}>

                {/*  price box  */}
                <div className="flex gap-[11px] mt-[25px] mb-[30px]">

                    {/*   start price  */}
                    <div className="flex-1 py-[25px] border border-[#929292] rounded-[10px] text-center   ">
                        <h2
                            className="font-montserrat font-normal text-base leading-[24px] flex ml-[50%] -translate-x-[50%]  ">
                            <span>$</span>
                            <input onChange={(e)=> setValues([e.target.value , values[1]])} type="text" className='w-full outline-0 ml-1 ' value={minVal}  />
                        </h2>
                    </div>


                    {/*   end price   */}
                    <div className="flex-1 py-[25px] border border-[#929292] rounded-[10px] text-center   ">
                        <h2 className="font-montserrat font-normal text-base leading-[24px] flex ml-[50%] -translate-x-[50%]  ">
                            <span>$</span>
                            <input onChange={(e)=> setValues([values[0] , e.target.value])} type="text" className='w-full outline-0 ml-1 ' value={maxVal}/>
                        </h2>
                    </div>

                </div>

                {/*  price changer radio  */}
                <Range
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    values={values}
                    className=""
                    onChange={(values) => setValues(values)}
                    renderTrack={({props, children}) => (
                        <div {...props} style={{
                            ...props.style,
                            height: "2px",
                            width: "100%",
                            backgroundColor: "#FF624C",
                            zIndex: "-1",
                            margin: "0px 10px 0px"
                        }}>
                            {children}
                        </div>
                    )}
                    renderThumb={({props , index}) => (
                        <div 
                        key={index}
                        {...props} 
                        style={{
                            ...props.style,
                            height: "16px",
                            width: "16px",
                            borderRadius: "50%",
                            zIndex: "1",
                        }}
                        className={` ${index === 1 && " -left-[20px]  "} outline-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-full after:bg-[#FF624C] after:z-[1]`}
                        >
                            <span key={index} {...props} className={`${index === 0 && " -left-[500px] -top-[15px] "}  w-[500px]  h-[2px] bg-[#c3c3c3] top-[7px]    `}     ></span>
                        </div>
                    )}
                />
                <div>
                </div>


            </div>


        </div>
    );
}

export default PriceChooser;
