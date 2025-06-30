import React from 'react'
import Form from './form/Form'

export default function Information() {
  return (
    <div className='flex justify-between   '>
        
        {/* bill details */}
        <div className="w-[58%]   ">
            <h2 className="font-poppins font-semibold text-[36px] leading-[48px] text-primary pb-10    ">Billing Details</h2>
            <Form/>
        </div>


        {/* order summary */}
        <div className=" w-[40%] bg-[#f4f4f4] p-10 rounded-[25px] ">
            <h2 className=" font-semibold text-[24px] leading-[30px] text-[#303030] pb-12  ">Order Summary</h2>
        </div>

    </div>
  )
}
