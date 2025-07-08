import React, {useEffect, useRef, useState} from 'react';
import ArrowDown from "../../assets/icons/ArrowDown.jsx";

import ToggleMenu from "../../helpers/toggleMenu.js"

function Shortby({shortsArr, shortWidth}) {

    const [shortVal, setShortVal] = useState(shortsArr[0]);
    const [isModal, setIsModal] = useState(false);
    const modalref = useRef(null);

    // short set function
    const handelShort = (short) => {
        setShortVal(short)
        setIsModal(false)
    }

    // outside click toggle modal
    useEffect(() => {
        window.addEventListener('mousedown', ToggleMenu(modalref , setIsModal ));
        return () => window.removeEventListener('mousedown', ToggleMenu(modalref , setIsModal ));
    }, [])
    return (
        <div ref={modalref} className={`flex items-center cursor-pointer relative   `} onClick={() => setIsModal(!isModal)}>
            <p className={`${shortWidth} line-clamp-1 text-ellipsis    font-montserrat font-semibold lg:font-bold  text-xs xl:text-sm 2xl:text-base leading-[24px] text-brand`}
                >{shortVal}</p>
            {isModal ? <ArrowDown style={` w-[11px] h-[6px]  rotate-[180deg]`}/> :
                <ArrowDown style={`w-[11px] h-[6px] `}/>}

            {/*  shortBy modal  */}
            {isModal &&
                <div
                    
                    className={`max-h-[300px]  absolute top-8 left-0 bg-white w-full shadow-lg rounded-md z-10 border border-tertary  overflow-y-scroll overflow-x-hidden `}>
                    <ul>
                        {shortsArr.map((short, index) => <li key={index}
                                                             onClick={() => handelShort(short)}
                                                             className={` line-clamp-1 text-ellipsis  ${short == shortVal ? "bg-brand hover:bg-brand text-white" : "hover:bg-tertary/50 "} py-1 p-5 font-montserrat font-normal text-base leading-[24px] text-primary `}>{short}</li>)}
                    </ul>
                </div>}
        </div>
    );
}

export default Shortby;
