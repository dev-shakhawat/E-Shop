import React from 'react'

export default function TextAreaField({title , required = true , placeholder , onChange , className}) {




  return (
    <div className={className}>
        
    {/* title */}
    <p className=" font-montserrat font-bold md:text-base lg:text-xl leading-7.5 flex items-start gap-1  ">
        {title} 
        {required && <span className='text-brand text-2xl '>*</span> }
    </p>

    {/* input */}
    <textarea onChange={onChange} type="text" className='w-full 2xl:mt-3 md:mt-2 mt-1 outline-0 2xl:py-6 xl:py-5 lg:py-4 md:py-3 py-2 2xl:px-8 lg:px-6 md:px-4 px-2 border border-tertary rounded-[10px] font-montserrat font-normal 2xl:text-[24px] xl:text-xl lg:text-[18px] md:text-base text-sm leading-7.5   ' placeholder={placeholder} />

</div>
  )
}
