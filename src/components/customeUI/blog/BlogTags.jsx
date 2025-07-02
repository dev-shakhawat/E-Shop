import React from 'react'

export default function BlogTags({title , allTags}) {
  
  return (
<div className='bg-[#F4F4F4] rounded-[25px] p-10 mt-10   '>
        
    {/* title */}
    {title &&  <h3 className=" font-poppins font-semibold text-[24px] leading-7.5 text-[#303030]   ">{title}</h3>}

    {/* tags */}
    <ul className='mt-6.5 flex  gap-2 flex-wrap   '>
      {allTags.map((item , index) => {
        return <li key={index} className=' blogTag   '  >{item}</li> 
      })} 
    </ul>
</div>
  )
}
