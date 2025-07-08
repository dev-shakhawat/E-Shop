import React from 'react'

export default function Subscribe({isblack}) {
  return (
    <div className='2xl:pb-30 xl:pb-25 lg:pb-20 md:pb-15 sm:pb-10 pb-5   '>
        <h2 className={`  text-center font-poppins font-semibold 2xl:text-[36px] xl:text-[30px] lg:text-[26px] md:text-[22px] sm:text-[18px] text-sm leading-[46px] text-white    `}>Subscribe to get our updates</h2>

        {/* input box */}
        <div className="flex lg:mx-[25%] md:mx-[15%] mx-[5%] 2xl:mt-[56px] xl:mt-[50px] lg:mt-[40px] md:mt-[30px] sm:mt-[20px] mt-[10px] xl:gap-4 gap-2 ">
            <input type="email" placeholder='Enter your email address ...' className={`outline-none   bg-white lg:rounded-[10px] rounded-[5px] w-full 2xl:py-6 xl:py-5 lg:py-4 md:py-3 sm:py-2 py-1 2xl:px-10 xl:px-8 lg:px-6 md:px-5 sm:px-4 px-2 font-montserrat font-normal 2xl:text-[24px] xl:text-xl lg:text-base md:text-sm text-xs text-primary  `}  />
            <button type="button" className={`bg-brand 2xl:py-5 xl:py-4 lg:py-3 md:py-2 sm:py-1 py-0.5 2xl:px-10 xl:px-8 lg:px-6 md:px-5 sm:px-4 px-2 font-montserrat font-bold 2xl:text-[24px] xl:text-xl lg:text-base md:text-sm text-xs text-white lg:rounded-[10px] rounded-[5px] cursor-pointer `}>Subscribe</button>
        </div>
    </div>
  )
}
