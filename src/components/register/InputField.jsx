import React, { useState } from 'react'


// icons
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { IoCheckmark } from "react-icons/io5";

export default function InputField({title , type = "text" , placeholder , onChange , className , isUserNameAvailable = false}) {

    const [inputType , setInputType] = useState(type)

  return (
    <div className={`${className} relative`}>
        
        {/* title */}
        <p className=" font-montserrat font-bold text-xl leading-7.5    ">{title}</p>

        {/* input */}
        <input onChange={onChange} autoComplete='on' type={type == "password" ? inputType : type} className={`${type == "password" && "pr-12"}  py-6 px-8 bg-white rounded-[10px] font-montserrat font-normal text-xl leading-7.5 w-full mt-3 outline-0  `} placeholder={placeholder}/>
         
        
        {/* eye icon */}
        {type == "password" && 
        <button onClick={() => setInputType(prev => prev == "password" ? "text" : "password")} type='button' className='absolute bottom-3 right-0 p-3 text-[32px] cursor-pointer   '>
           {inputType == "password" ? <FaRegEyeSlash/> : <FaRegEye/> }
        </button>
        }

        {/* username availability */}
        {isUserNameAvailable  && 
        <button  type='button' className='absolute bottom-3 right-0 p-3 text-[24px] cursor-pointer text-brand   '>
           <IoCheckmark/>
        </button>
        }



    </div>
  )
}
