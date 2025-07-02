import React from 'react'

export default function BlogTags() {
  return (
<div className='bg-[#F4F4F4] rounded-[25px] p-10 mt-10   '>
        
    {/* title */}
    <h3 className=" font-poppins font-semibold text-[24px] leading-7.5 text-[#303030]   ">Tags</h3>

    {/* tags */}
    <ul className='mt-6.5 flex  gap-2 flex-wrap   '>
        <li className=' blogTag   '  >Tech</li>
        <li className=' blogTag   '  >Trends</li>
        <li className=' blogTag   '  >Innovation</li>
        <li className=' blogTag   '  >Tips</li>
        <li className=' blogTag   '  >Gadget</li>
        <li className=' blogTag   '  >Guide</li>
        <li className=' blogTag   '  >Gadget Review</li>
    </ul>
</div>
  )
}
