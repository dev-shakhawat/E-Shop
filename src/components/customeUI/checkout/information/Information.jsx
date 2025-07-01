import React from 'react'
import Form from './form/Form'
import Summary from './summary/Summary'
import Question from '../../../../assets/icons/Question'

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
            <Summary title='2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD' price='199.00' quantity='1' />
            <hr className=' text-[#c3c3c3] my-5   '/>
            <Summary title='Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band' price='199.00' quantity='1' />
            <hr className=' text-[#c3c3c3] my-5   '/>
            <Summary title='LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ' price='199.00' quantity='2' />
            <hr className=' text-[#c3c3c3] my-5   '/>
            <Summary title='Console Game Stick HD Wireless Bluetooth Connect' price='199.00' quantity='2' />
            <hr className=' text-[#c3c3c3] my-5   '/>
            <Summary title='Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28' price='199.00' quantity='1' /> 
            <hr className=' text-[#c3c3c3] my-5   '/>

            {/* shopping fee */}
            <div className="flex">
                <p className="font-montserrat font-normal text-xl leading-7.5 text-[#303030] flex gap-1.5   ">
                  <span>Shipping Fee</span>
                  <Question/>
                </p>
                <p className="font-poppins font-semibold text-[24px] leading-[30px] text-[#303030] ml-auto  ">${10}</p>
            </div>

            {/* order button */}
            <div className="mt-12  bg-white px-5 py-6 rounded-[10px]   ">
              
              <div className="flex items-center justify-between ">
                <h2 className=" font-montserrat font-bold text-4 leading-6 text-primary   ">Total</h2>
                <p className="font-monserrat font-bold text-[20px] leading-7.5 text-primary">${4334}</p>
              </div>

              {/* btn */}
              <button type="button" className='font-montserrat font-bold text-xl leading-7.5 text-white py-6 rounded-[10px] bg-brand mt-6 w-full cursor-pointer    '  >Order Now</button>
            </div>
        </div>

    </div>
  )
}
