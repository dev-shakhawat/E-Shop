import React from 'react'

export default function DetailsTopic({topicNumber , title , text}) {
  return (
    <div className='flex'>
        
        {/* topic number */}
        <p className=" min-w-16 min-h-16 max-w-16 max-h-16 font-poppins font-semibold text-xl leading-7.5 text-white  flex items-center justify-center  bg-[#FF624C] rounded-full      ">
           {topicNumber}
        </p>

        {/* topic title */}
        <div className="ml-7.5">
            <p className="font-poppins font-semibold text-xl leading-7.5 text-primary   ">{title}</p>

            <p className="mt-2 font-montserrat font-normal text-xl leading-7.5 text-primary    ">{text}</p>
        </div>
    </div>
  )
}
