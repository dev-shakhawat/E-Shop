import React from 'react'

export default function BlogCategories() {
  return (
    <div className='bg-[#303030] rounded-[25px] p-10 mt-10   '>
        
        {/* title */}
        <h3 className=" font-poppins font-semibold text-[24px] leading-7.5 text-white   ">Categories</h3>

        {/* categories */}
        <ul className='mt-6.5 flex flex-col gap-5.5   '>
            <li className=' blogCategory   '  >Tech News</li>
            <li className=' blogCategory   '  >Product Reviews</li>
            <li className=' blogCategory   '  >How-To Guides</li>
            <li className=' blogCategory   '  >Lifestyle</li>
            <li className=' blogCategory   '  >Emerging Technologies</li>
        </ul>
    </div>
  )
}
