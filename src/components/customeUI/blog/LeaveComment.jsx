import React from 'react'
import InputField from '../checkout/information/form/InputField'

export default function LeaveComment() {
  return (
    <div className='mt-25 py-14 pl-20 pr-[70px] bg-[#F4F4F4] rounded-[25px]     '>
      
      {/* title */}
      <h2 className=" font-poppins font-semibold text-[36px] leading-[46px] text-primary pb-3   ">Leave A Comment</h2>
      <p className=" font-montserrat font-normal text-base leading-6 text-primary      ">Your email will not be shown on the comment section. Required fields are marked.*</p>

      {/* form */}
      <div className=" mt-10 ">
        <p className=" font-montserrat font-bold text-base leading-6 text-primary     ">Your Review <span className='text-[#FF0000]'>*</span></p>

        <textarea name="comment" id="comment" className='mt-3 py-6 px-8 font-montserrat font-normal text-xl leading-7.5 w-full bg-white rounded-[10px] outline-0 min-h-[173px]    ' placeholder='Enter your review message ...'></textarea>
        
        {/* name and email */}
        <div className="grid grid-cols-2 gap-5 mt-5  ">
          <InputField titleStyle="text-base"  title="Name" placeholder={`Amelia Robert`} inputStyle={`bg-white border-transparent `} />
          <InputField titleStyle="text-base"  title="Email" placeholder={`Amelia Robert`} inputStyle={`bg-white border-transparent `} />
        </div>
      </div>

      {/* button for submit */}
      <button type="button" className='commonButton mt-10 '>Submit</button>
    </div> 
  )
}
