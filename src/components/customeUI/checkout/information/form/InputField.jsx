import React from 'react'

import { LiaStarOfLifeSolid } from "react-icons/lia";



export default function InputField({title , required = true , placeholder , onChange , inputStyle , titleStyle}) {
  return (
    <div className=''>
        
        {/* title */}
        <p className={`${titleStyle ? titleStyle : "text-xl"} font-montserrat font-bold  leading-7.5 flex items-start gap-1  `}>
            {title} 
            {required && <span className='text-brand text-2xl '>*</span> }
        </p>

        {/* input */}
        <input onChange={onChange} type="text" className={`${inputStyle}  w-full outline-0 py-6 px-8 mt-3 border border-tertary rounded-[10px] font-montserrat font-normal text-[24px] leading-7.5   `} placeholder={placeholder} />

    </div>
  )
}
