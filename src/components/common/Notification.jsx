import React from 'react'

// icons
import { FcOk } from "react-icons/fc";
import { CiWarning } from "react-icons/ci";

export default function Notification({success, message}) {
  return (
    <div className={` ${success ? "bg-green-500/30 backdrop-blur-md " : "bg-red-600/50 backdrop-blur-[2px]"} rounded-md font-poppins font-semibold text-base leading-[24px} animate-notify fixed top-1/2 left-1/2 -translate-1/2 z-10 py-3 px-5  `}>
        {success ? <FcOk className=' absolute -top-4 left-1/2 -translate-x-1/2 text-3xl  ' /> : <CiWarning className=' absolute -top-4 left-1/2 -translate-x-1/2 text-3xl text-red-500 ' />}
        <h3 className={`${success ? "text-primary" : "text-white"}  font-montserrat font-semibold text-base leading-[24px] mt-2 `}>{message}{success ? "!" : ""}</h3>
    </div>
  )
}
