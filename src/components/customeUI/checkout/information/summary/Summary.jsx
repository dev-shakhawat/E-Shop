import React from 'react'

export default function Summary({title = "2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD" ,price , quantity }) {
  return (
    <div className='flex items-center justify-between   '>
        
        {/* product name/title */}
        <p className=" font-montserrat font-normal text-xl leading-7.5 text-[#303030] max-w-[250px] line-clamp-2  ">{title}</p>

        {/* quantity */}
        <span className=' font-montserrat font-bold text-xl leading-7.5 text-[#303030]   '>{quantity}</span>

        {/* price */}
        <p className="font-poppins font-semibold text-xl leading-7.5 text-[#303030]     ">BDT: {price}</p>

    </div>
  )
}
