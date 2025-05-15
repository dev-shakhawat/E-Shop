import React from 'react';

function FacilityCart({icon, title, text}) {
    return (
        <div className={`flex items-center gap-6  `}>
            {icon}
            <div className="">
                <h4 className={`font-montserrat text-base leading-6 text-primary font-bold `}>{title}</h4>
                <p className="font-montserrat text-base leading-6 text-primary font-normal mt-0.5 ">{text}</p>
            </div>
        </div>
    );
}

export default FacilityCart;
