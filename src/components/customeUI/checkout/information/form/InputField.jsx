import React from 'react'

import { LiaStarOfLifeSolid } from "react-icons/lia";



export default function InputField({title , type="text" , required = true , placeholder , onChange , inputStyle , titleStyle}) {
  return (
    <div className=''>
        
        {/* title */}
        <p className={`${titleStyle ? titleStyle : "md:text-base lg:text-xl"}    font-bold    flex items-start gap-1  `}>
            {title} 
            {required && <span className='text-brand md:text-base lg:text-xl 2xl:text-2xl'>*</span> }
        </p>

        {/* input */}
        <input onChange={onChange} type={type} className={`${inputStyle}  w-full outline-0 2xl:py-6 xl:py-5 lg:py-4 md:py-3 py-2 2xl:px-8 lg:px-6 md:px-4 px-2 2xl:mt-3 lg:mt-2 mt-0 border border-tertary rounded-[10px] font-montserrat font-normal 2xl:text-[24px] xl:text-xl lg:text-[18px] md:text-base text-sm leading-7.5   `} placeholder={placeholder} />

    </div>
  )
}
