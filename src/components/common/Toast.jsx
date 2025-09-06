import React from 'react'

// icons
import { GoAlert } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

export default function Toast({message , success}) {
  return (
    

<div
  id="toast-default"
  className=" fixed top-1/2 left-1/2 -translate-1/2 z-10   flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm dark:text-gray-400 dark:bg-gray-800"
  role="alert"
>
  <div className={`inline-flex items-center justify-center shrink-0 w-8 h-8 text-white ${success ? 'bg-green-500' : 'bg-red-500'}   rounded-lg   `}>

    {success ? <IoIosCheckmarkCircleOutline className='text-2xl'/> : <GoAlert className='text-2xl'/>}

    <span className="sr-only">Fire icon</span>
  </div>
  <div className={`ms-3 text-sm font-normal  ${success ? 'text-green-500' : 'text-red-500'}  `}>{message}</div>
 
</div>



  )
}
