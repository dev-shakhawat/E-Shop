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
        <div className={`bg-white px-12 py-8 rounded-[20px] w-full cursor-pointer   `}
             onClick={() => setIsOpen(!isOpen)}>

            {/*   accordian head   */}
            <div className="flex gap-8 items-center">

                {isOpen ? <AccordianArrow/> :
                    <AccordianArrow bg={`#FF624C`} outline={`#ffffff`}
                                    style={`-rotate-[90deg]  `}/>}
                <h3 className={`font-poppins font-semibold text-[24px] leading-[30px] text-primary   `}>{title}</h3>
            </div>

            {/*   accordian body   */}
            <div className={` overflow-hidden transition-all duration-300 `}
                 style={{height}} ref={contentRef}>
                {isOpen &&
                    <p className=" w-[750px] font-montserrat font-normal text-[20px] mt-4 ml-16 leading-[30px] text-primary">{description}</p>}
            </div>
        </div>
    );
}

export default Accordian;
