import React, {useEffect, useRef, useState} from 'react';
import ArrowDown from "../../assets/icons/ArrowDown.jsx";

function Shortby({shortsArr, shortWidth = 137,}) {

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

        const handeloutside = (event) => {
            if (modalref.current && !modalref.current.contains(event.target)) {
                setIsModal(false)
            }
        }

        window.addEventListener('mousedown', handeloutside);

        return () => window.removeEventListener('mousedown', handeloutside);
    }, [])
    return (
        <div className={`flex items-center cursor-pointer relative   `} onClick={() => setIsModal(!isModal)}>
            <p className="font-montserrat font-semibold lg:font-bold text-[13px] lg:text-base leading-[24px] text-brand"
               style={{width: `${shortWidth}px`}}>{shortVal}</p>
            {isModal ? <ArrowDown style={` w-[11px] h-[6px]  rotate-[180deg]`}/> :
                <ArrowDown style={`w-[11px] h-[6px] `}/>}

            {/*  shortBy modal  */}
            {isModal &&
                <div
                    ref={modalref}
                    className={`absolute top-8 left-0 bg-white w-full shadow-lg rounded-md z-10 overflow-hidden border border-tertary h-[300px] overflow-y-scroll overflow-x-hidden `}>
                    <ul>
                        {shortsArr.map((short, index) => <li key={index}
                                                             onClick={() => handelShort(short)}
                                                             className={`${short == shortVal ? "bg-brand hover:bg-brand text-white" : "hover:bg-tertary/50 "} py-1 p-5 font-montserrat font-normal text-base leading-[24px] text-primary `}>{short}</li>)}
                    </ul>
                </div>}
        </div>
    );
}

export default Shortby;
