import React from 'react'
import Shortby from '../common/Shortby'


export default function ProductsHead() {
  return (
    <div className='w-full'>
    <h2 className=" font-poppins font-semibold text-[36px] leading-[46px] text-primary    ">Products</h2>

    {/* short by tab */}
    <div className="flex justify-between">
        <p className='w-[300px] '>showing 1 - 16 of 160 results</p>

        <div className="flex">
            <div className="flex gap-4 items-center mr-6 ">
                <p className="font-montserrat font-normal text-base leading-[24px] text-primary    ">Sort by </p>
                <Shortby shortsArr={['Popularity', 'Most Recent']} shortWidth={135}/>
            </div>
            <div className="flex gap-4 items-center mx-6">
                <Shortby shortsArr={['Popularity', 'Most Recent']} shortWidth={200}/>
            </div>
        </div>
    </div>
</div>
  )
}
