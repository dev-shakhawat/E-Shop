import React from 'react'
import { Link } from 'react-router'

export default function TrackingBilling() {
  return (
    <div className='flex gap-6 '>
        
        {/* treaking order */}
        <Link to={'#'} className="  text-primary  duration-300 p-12 bg-[#F4F4F4] rounded-[25px] flex-1   ">
           <p className="cmnHeadTwo w-1/2 text-primary    ">Order Tracking</p>
           <span className=" mt-4.5 font-montserrat font-normal text-[24px] leading-7.5 text-primary   ">See your order history.</span>
        </Link>

        {/* billing address */}
        <Link to={'/checkout'} className="  text-primary  duration-300 p-12 bg-[#F4F4F4] rounded-[25px]  flex-1  ">
           <p className="cmnHeadTwo w-1/2 text-primary    ">Billing Address</p>
           <span className=" mt-4.5 font-montserrat font-normal text-[24px] leading-7.5 text-primary   ">Set your billing address.</span>
        </Link>
    </div>
  )
}
