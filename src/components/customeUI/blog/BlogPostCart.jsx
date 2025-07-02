import React from 'react'



// icons
import { RiUserFill } from "react-icons/ri";
import { IoTime } from "react-icons/io5";

export default function BlogPostCart({tag , preview , title , userName , postTime , onClick }) {



  return (
    <div onClick={onClick} className='cursor-pointer p-10 rounded-[25px] bg-[#ffffff] border border-transparent  hover:border-[#cbcbcb] duration-300  '>
        
        {/* preview image */}
        <div className="relative">

            {/* image */}
            {preview ?
            <img src={preview} alt={preview} className='w-full h-[294px] rounded-[25px] object-cover  '/>
            :
            <div className='w-full h-[294px] bg-[#D9D9D9] rounded-[25px] '></div>
            }

            {/* tips */}
            <p className="absolute top-6 left-6 font-montserrat font-bold text-base leading-6 py-2 px-5 rounded-[10px] bg-[#FF624C] text-white   ">{tag}</p>
        </div>

        {/* title */}
        <h2 className="  font-poppins font-semibold text-[24px] leading-7.5 text-[#303030] mt-6 line-clamp-2 overflow-hidden text-ellipsis   ">{title}</h2>

        {/* poster and time  */}
        <div className="flex items-center gap-8">

            {/* poster */}
            <div className="flex items-center gap-4 mt-5  text-[#646464]  ">
                <RiUserFill className='  text-2xl '/>
               <span>{userName}</span>
            </div>

            {/* postTime */}
            <div className="flex items-center gap-4 mt-5  text-[#646464]  ">
                <IoTime className='  text-2xl '/>
               <span>{postTime}</span>
            </div>

        </div>

    </div>
  )
}
