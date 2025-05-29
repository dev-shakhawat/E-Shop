import React, {useEffect, useState} from 'react';
import Button from "../common/Button.jsx";

function SpringCounter() {

    const [timeleft, setTimeleft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const saleEndtime = new Date("Jun 7 , 2025 12:00 AM GMT+6").getTime();
        const currentDate = new Date().getTime();
        const diffrent = saleEndtime - currentDate;

        if (diffrent < 0) {
            return {day: 0, hour: 0, munite: 0, second: 0}
        }

        return {
            day: Math.floor(diffrent / (1000 * 60 * 60 * 24)),
            hour: Math.floor((diffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            munite: Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60)),
            second: Math.floor((diffrent % (1000 * 60)) / 1000)
        }
    }

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
            <Button text={`Shop Now`} style={` mt-5 sm:mt-7 md:mt-10   lg:mt-16 py-1.5 md:py-4 px-6 md:px-10  `}/>
        </div>
    );
}

export default SpringCounter;
