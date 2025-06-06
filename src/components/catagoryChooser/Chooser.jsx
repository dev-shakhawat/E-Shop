import React, {useEffect, useRef, useState} from 'react';
import ArrowDown from "../../assets/icons/ArrowDown.jsx";
import CheckboxOutline from "../../assets/icons/CheckboxOutline.jsx";
import CheckboxChecked from "../../assets/icons/CheckboxChecked.jsx";

function Chooser({allcatagories}) {

    const [isopen, setIsopen] = useState(true)
    const catagoryRef = useRef(null)
    const [catagoryHeight, setCatagoryHeight] = useState(0)


    useEffect(() => {
        if (isopen) {
            setCatagoryHeight(catagoryRef.current.scrollHeight)
        } else {
            setCatagoryHeight(0)
        }

    }, [isopen])

    const handelclick = (e) => {
        console.log(e.target.checked)
    }


    return (
        <div>

            {/*   catagory chooser head    */}
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsopen(!isopen)}>
                <h3 className="font-montserrat font-bold text-xl leading-[30px] text-primary">Categories</h3>
                {isopen ? <ArrowDown style={` duration-400 w-[11px] h-[6px] rotate-[180deg] `}/> :
                    <ArrowDown style={`duration-400 w-[11px] h-[6px] rotate-[0deg]`}/>}
            </div>

            {/*  all catagories list  */}
            <div ref={catagoryRef} className="flex flex-col gap-y-3 overflow-hidden transition-all duration-400"
                 style={{height: `${catagoryHeight}px`}}>
                {allcatagories.map((cata, index) => (
                    <label onClick={(e) => handelclick(e)}
                           key={index}
                           style={{width: "100%"}}
                           className={`flex gap-x-2 font-montserrat font-normal text-base leading-[24px] text-primary cursor-pointer`}
                           htmlFor="cata">
                        <input
                            id={`cata`}
                            className={`hidden`}
                            type="checkbox"/>

                        {/*   checkbox   */}
                        <CheckboxOutline/>
                        <CheckboxChecked/>

                        {/*   catagory name   */}
                        <h3 className="flex justify-between w-full">
                            <span>{cata.name}</span>
                            {cata.total && <span>({cata.total})</span>}
                        </h3>

                    </label>
                ))}

            </div>


        </div>
    );
}

export default Chooser;
