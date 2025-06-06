import React, { useState } from 'react'
import Shortby from '../common/Shortby'
import ListView from '../../assets/icons/ListView'
import GridView from '../../assets/icons/GridView'


export default function ProductsHead() {
    const [viewmode , setViewmode] = useState('grid')
  return (
    <div className='w-full   '>
    <h2 className=" font-poppins font-semibold text-[36px] leading-[46px] text-primary    ">Products</h2>

    {/* short by tab */}
    <div className="flex justify-between mt-6">
        <p className='w-[300px] font-montserrat text-base leading-[24px] text-primary '>Showing 1 - 16 of 160 results</p>

        <div className="flex ">

            {/* short one */}
            <div className="flex gap-4 items-center mr-6 ">
                <p className="font-montserrat font-normal text-base leading-[24px] text-primary    ">Sort by </p>
                <Shortby shortsArr={['Popularity', 'Most Recent']} shortWidth={135}/>
            </div>

            {/* short two */}
            <div className="flex gap-4 items-center mx-6">
                <Shortby shortsArr={['Price Low-to-High', 'Most Recent']} shortWidth={200}/>
            </div>

            {/* short three */}
            <div className="ml-6 flex items-center gap-4 ">
                <GridView onClick={() => setViewmode('grid')} className={`w-6 h-6 cursor-pointer `} fill={ viewmode == 'grid' ? `#FF624C` : `#cbcbcb`}/>
                <ListView onClick={() => setViewmode('list')} className={`w-6 h-6 cursor-pointer `} fill={ viewmode == 'list' ? `#FF624C` : `#cbcbcb`}/>
            </div>

        </div>
    </div>
</div>
  )
}
