import React, {useEffect, useState} from 'react'; 
import {calculateTimeLeft} from "../../../helpers/calculateTime.js";

function SpringCounter() {

    const [timeleft, setTimeleft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeleft(calculateTimeLeft())
        }, 1000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div className={`pb-15 lg:pb-0`}>

            <h2 className="font-poppins font-bold text-[25px] sm:text-[30px] md:text-[40px] lg:text-[56px] leading-[68px] text-primary">Spring
                Sale</h2>

            {/*  counter down  */}
            <div className="mt-10 flex gap-2 md:gap-4 lg:gap-6">

                {/*  day  */}
                <div className="text-center">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[46px] text-brand mb-2 ">
                        {timeleft.day < 9 ? `0${timeleft.day}` : timeleft.day}</h3>
                    <span className={`font-montserrat font-normal text-base text-primary capitalize`}>days</span>
                </div>
                <span
                    className={`font-poppins font-semibold text-xl sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[46px] text-brand`}>:</span>

                {/*  hour  */}
                <div className="text-center">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[46px] text-brand mb-2 ">
                        {timeleft.hour < 9 ? `0${timeleft.hour}` : timeleft.hour}</h3>
                    <span className={`font-montserrat font-normal text-base text-primary capitalize`}>hours</span>
                </div>
                <span
                    className={`font-poppins font-semibold text-xl sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[46px] text-brand`}>:</span>

                {/*  munite  */}
                <div className="text-center">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[46px] text-brand mb-2 ">
                        {timeleft.munite < 9 ? `0${timeleft.munite}` : timeleft.munite}</h3>
                    <span className={`font-montserrat font-normal text-base text-primary capitalize`}>munites</span>
                </div>
                <span
                    className={`font-poppins font-semibold text-xl sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[46px] text-brand`}>:</span>

                {/*  second  */}
                <div className="text-center">
                    <h3 className="font-poppins font-semibold text-xl sm:text-[24px] md:text-[28px] lg:text-[36px] leading-[46px] text-brand mb-2 ">
                        {timeleft.second < 9 ? `0${timeleft.second}` : timeleft.second}</h3>
                    <span className={`font-montserrat font-normal text-base text-primary capitalize`}>seconds</span>
                </div>

            </div>


            {/*  button  */}
            <button type="button" className='commonButton mt-18   ' >Shop Now</button>
        </div>
    );
}

export default SpringCounter;
