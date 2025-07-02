import React from 'react'

import SearchIcon from '../../../assets/icons/SearchIcon'

export default function BlogSearch() {
  return (
    <div className='p-10 rounded-[25px] bg-[#FF624C]  '>
        
        {/* title */}
        <h3 className=" font-poppins font-semibold text-[24px] leading-7.5 text-white   ">Blog Search</h3>

        {/* search */}
        <div className="relative bg-white rounded-[10px] mt-6 ">
            <input type="text" className=' py-4.5 pl-6 pr-10 w-full outline-0 font-montserrat font-normal text-sm leading-7.5   ' placeholder='Search Article ...' />
            <SearchIcon className={`absolute top-[25px] right-5`}/>
        </div>
    </div>
  )
}
