import React from 'react'
import ViewAll from '../../common/ViewAll'
import TechTalkCart from '../techTalk/TechTalkCart'

export default function RelatedArticle() {
  return (
    <div className='py-25'>
        
        {/* title */}
        <h2 className=" flex justify-between items-center font-poppins font-semibold text-[36px] leading-[46px] text-[#303030]   ">
            <p className="">Related Articles</p>
            <ViewAll/>
        </h2>

        {/* all articles */}
        <div className="grid grid-cols-3 mt-12 gap-12 ">
            <TechTalkCart title={`Top 10 Best-Selling Products of the Month: Tablet Edition`} buttontxt={`Review`} date={`6 April 2023`}   />
            <TechTalkCart title={`Learning about The Future of Smart Office Technology in 2023`} buttontxt={`trends`} date={`2 April 2023`}   />
            <TechTalkCart title={`How to Choose the Right Gaming Gadget for Your Needs`} buttontxt={`Tips`} date={`10 April 2023`}   />


        </div>
    </div>
  )
}
