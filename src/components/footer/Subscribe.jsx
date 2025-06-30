import React from 'react'

export default function Subscribe({isblack}) {
  return (
    <div className='pb-30'>
        <h2 className={`  text-center font-poppins font-semibold text-[36px] leading-[46px] text-white    `}>Subscribe to get our updates</h2>

        {/* input box */}
        <div className="flex mx-[25%] mt-[56px] gap-4 ">
            <input type="email" placeholder='Enter your email address ...' className={`outline-none   bg-white rounded-[10px] w-full py-6 px-10 font-montserrat font-normal text-[24px] text-primary  `}  />
            <button type="button" className={`bg-brand py-5 px-10 font-montserrat font-bold text-[24px] text-white rounded-[10px] cursor-pointer `}>Subscribe</button>
        </div>
    </div>
  )
}
