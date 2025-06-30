import React, { useEffect, useState } from 'react'

export default function SubscribeNotification({className ,title , text , setState}) {
    const [checked , setChecked] = useState(false) 

    useEffect(() => {
        setState(checked)
    }, [checked])
    
  return (
    <div className={`${className} flex   rounded-[10px]   `}>
        
        {/* switch */}
        <div className={` ${checked ? "bg-brand justify-end " : "bg-white justify-start "} flex transition-all duration-300 ease-in-out relative p-[5px] max-w-[68px] min-w-[68px] h-[34px] rounded-[25px]  `}>
            <input type="checkbox" onClick={(e) => setChecked(e.target.checked)} className='w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer '  />
           
           <span className={`w-6 h-6 rounded-full    ${checked ? "bg-white   " : "bg-tertary   "} transition-all duration-300 ease-in-out  `}></span>
            
        </div>

        {/* content */}
        <div className="ml-4  ">
            <h2 className=" font-montserrat font-bold text-base leading-6 text-primary   ">{title}</h2>
            <p className="font-montserrat font-normal text-base leading-6 text-primary mt-1">{text}</p>
        </div>


    </div>
  )
}
