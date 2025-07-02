import React from 'react'
import Star from '../../../assets/icons/Star'
import Like from "../../../assets/icons/Like"
import { FaComment } from "react-icons/fa";

export default function BlogComment({title , profileImage , name , stars , comment , date }) {
  return (
    <div>
        
        {/* commenter information */}
        <div className="flex">
            {profileImage ? (
                <img src={profileImage} alt={profileImage} />
            ):
            <div className=' w-[62px] h-[62px] bg-[#D9D9D9] rounded-full    '></div>
            }

            {/* commenter details */}
            <div className=" ml-4 ">
                <h2 className="font-montserrat font-bold text-xl leading-7.5 text-[#303030]    ">{name}</h2>

                <div className="flex items-center gap-4   ">

                    {/* stars */}
                    <ul className='flex     '>
                        {Array(stars).fill(stars).map((item , index) => {
                            return <li key={index} className='text-[#FED550]   '  ><Star /></li> 
                        })}
                    </ul>
                    <span className='w-[2px] h-4 bg-[#646464]    '></span>
                    <p className=" font-montserrat font-normal text-base leading-6 text-[#646464]    ">{date}</p>
                    <span className='w-[2px] h-4 bg-[#646464]    '></span>
                    <div className="flex items-center gap-4 text-2xl text-[#303030]     ">
                        <Like/>
                        <FaComment className='opacity-50 cursor-pointer  ' />
                    </div>
                </div>
            </div>
        </div>

        {/* comment */} 
        <p className=" font-montserrat font-normal text-xl leading-7.5 text-[#303030] mt-4      ">{comment}</p>
    </div>
  )
}
