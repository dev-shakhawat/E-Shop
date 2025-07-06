import React, {useEffect,  useRef,  useState} from 'react';
import ArrowDown from "../../../assets/icons/ArrowDown.jsx"; 

function PriceChooser() { 
    const [isopen, setIsopen] = useState(true); 
    const priceboxRef = useRef(null);
    const [priceboxHeight, setPriceboxHeight] = useState(0); 
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500000);
    
    
    useEffect(() => {
        if (isopen) {
            setPriceboxHeight(priceboxRef.current.scrollHeight)
        } else {
            setPriceboxHeight(0)
        }

    }, [isopen])
 

    const handleChangePrice = (val , type) => { 
 
        if(type == "min"){
            const newMinValue = Math.min(val, maxPrice);
            setMinPrice(newMinValue);
        }
        else{
            const newMaxValue = Math.max(val, minPrice);
            setMaxPrice(newMaxValue);
        }
    }; 


    return (
        <div className={``}>

            {/*   head   */}
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsopen(!isopen)}>
                <h3 className="font-montserrat font-bold text-xl leading-[30px] text-primary">Price</h3>
                {isopen ? <ArrowDown style={` duration-400 w-[11px] h-[6px] rotate-[180deg] `}/> :
                    <ArrowDown style={`duration-400 w-[11px] h-[6px] rotate-[0deg]`}/>}
            </div>

            {/*  body   */}
            <div  ref={priceboxRef} className="overflow-hidden transition-all duration-400"
                  style={{height: `${priceboxHeight}px`}} >

                {/*  price box  */}
                <div className="flex gap-[11px] mt-[25px] mb-[30px]">

                    {/*   start price  */}
                    <div className="flex-1 py-[25px] border border-[#929292] rounded-[10px] text-center   ">
                        <h2
                            className="font-montserrat font-normal text-base leading-[24px] flex ml-[50%] -translate-x-[50%]  ">
                            <span>$</span>
                            <input  value={minPrice} onChange={(e)=> handleChangePrice(e.target.value , "min")} type="text" className='w-full outline-0 ml-1 '   />
                        </h2>
                    </div>


                    {/*   end price   */}
                    <div className="flex-1 py-[25px] border border-[#929292] rounded-[10px] text-center   ">
                        <h2 className="font-montserrat font-normal text-base leading-[24px] flex ml-[50%] -translate-x-[50%]  ">
                            <span>$</span>
                            <input value={maxPrice} onChange={(e)=> handleChangePrice(e.target.value , "max")} type="text" className='w-full outline-0 ml-1 ' />
                        </h2>
                    </div>

                </div>

                {/*  price changer radio  */} 
                <div className={`relative h-[50px] after:content-[]  after:w-full after:h-[2px] after:bg-tertary after:absolute after:top-0  `}>
                    <span style={{left: `${(minPrice / 500000) * 100}%` , width: `${((maxPrice - minPrice) / 500000) * 100}%`}} className='absolute top-0 z-1 left-0  h-[2px] bg-brand  ' ></span>
                    <input step={50} value={minPrice} onChange={(e)=> handleChangePrice(e.target.value , "min")} type="range" min={0} max={500000} className='absolute -top-[8px] z-1 left-0 w-full appearance-none slider pointer-events-none  ' />
                    <input step={50} value={maxPrice} onChange={(e)=> handleChangePrice(e.target.value , "max")} type="range" min={0} max={500000} className='absolute -top-[8px] z-1 left-0 w-full appearance-none slider pointer-events-none  ' />
                </div>


            </div>


        </div>
    );
}

export default PriceChooser;
