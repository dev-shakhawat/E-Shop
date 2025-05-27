import React, {useEffect, useRef, useState} from 'react';
import AccordianArrow from "../../assets/icons/AccordianArrow.jsx";

function Accordian({title, description, open = false}) {

    const [isOpen, setIsOpen] = useState(open);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div
            className={`bg-white px-3 sm:px-6 md:px-9 lg:px-12 py-2 sm:py-4 md:py-6 lg:py-8 rounded-[10px] lg:rounded-[20px] w-full cursor-pointer   `}
            onClick={() => setIsOpen(!isOpen)}>

            {/*   accordian head   */}
            <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">

                {isOpen ? <AccordianArrow style={`lg:w-[32px] w-[20px] lg:h-[32px] h-[20px]`}/> :
                    <AccordianArrow bg={`#FF624C`} outline={`#ffffff`}
                                    style={`-rotate-[90deg] lg:w-[32px] w-[20px] lg:h-[32px] h-[20px]  `}/>}
                <h3 className={`font-poppins font-semibold text-base sm:text-xl md:text-[22px] lg:text-[24px] lg:leading-[30px] text-primary   `}>{title}</h3>
            </div>

            {/*   accordian body   */}
            <div className={` overflow-hidden transition-all duration-300 `}
                 style={{height}} ref={contentRef}>
                {isOpen &&
                    <p className=" lg:w-[750px] font-montserrat font-normal text-[12px] sm:text-base md:text-[18px] lg:text-[20px] mt-2 lg:mt-4 ml-8 md:ml-12 lg:ml-16 lg:leading-[30px] text-primary">{description}</p>}
            </div>
        </div>
    );
}

export default Accordian;
