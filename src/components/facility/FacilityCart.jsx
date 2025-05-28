import React from 'react';

function FacilityCart({icon, title, text}) {
    return (
        <div className={`flex items-center gap-3 md:gap-6 basis-1/2 md:basis-1/3 lg:basis-auto `}>
            {icon}
            <div className="">
                <h4 className={`font-montserrat text-[12px] md:text-[14px] lg:text-base leading-6 text-primary font-bold `}>{title}</h4>
                <p className="font-montserrat text-[12px]  lg:text-base leading-4 lg:leading-6 text-primary font-normal mt-0.5 ">{text}</p>
            </div>
        </div>
    );
}

export default FacilityCart;
