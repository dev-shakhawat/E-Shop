import React from 'react'

export default function TextAreaField({title , required = true , placeholder , onChange , className}) {




  return (
    <div className={className}>
        
    {/* title */}
    <p className=" font-montserrat font-bold text-xl leading-7.5 flex items-start gap-1  ">
        {title} 
        {required && <span className='text-brand text-2xl '>*</span> }
    </p>

    {/* input */}
    <textarea onChange={onChange} type="text" className='w-full mt-3 outline-0 py-6 px-8 border border-tertary rounded-[10px] font-montserrat font-normal text-[24px] leading-7.5   ' placeholder={placeholder} />

</div>
  )
}
