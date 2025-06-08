import React, { useState } from 'react'
import Shortby from '../common/Shortby'
import ListView from '../../assets/icons/ListView'
import GridView from '../../assets/icons/GridView'
import { useDispatch, useSelector } from 'react-redux'
import {currentMode} from '../../redux/slices/viewmodeSlice'


export default function ProductsHead() {
    const [viewmode , setViewmode] = useState('grid')
    const dispatch = useDispatch()
    const allpagi = useSelector(state => state.pagination.totalPagination)
    const paginationCurrent = useSelector(state => state.pagination.value)

    const handleModeChange = (mode) => {
        setViewmode(mode)
        dispatch(currentMode(mode))
      }
    
      
  return (
    <div className='w-full   '>
    <h2 className=" font-poppins font-semibold text-[36px] leading-[46px] text-primary    ">Products</h2>

    {/* short by tab */}
    <div className="flex justify-between mt-6">
        <p className='w-[300px] font-montserrat text-base leading-[24px] text-primary '>Showing {paginationCurrent == 1 ? 1 : (paginationCurrent - 1) * 16} - { paginationCurrent * 16 } of {allpagi * 16} results</p>

        <div className="flex ">

            {/* short one */}
            <div className="flex gap-4 items-center mr-6 relative  after:content-[''] after:w-[1px] after:h-[32px] after:bg-tertary after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[24px]   ">
                <p className="font-montserrat font-normal text-base leading-[24px] text-primary    ">Sort by </p>
                <Shortby shortsArr={['Popularity', 'Most Recent']} shortWidth={135}/>
            </div>

            {/* short two */}
            <div className="flex gap-4 items-center mx-6 relative  after:content-[''] after:w-[1px] after:h-[32px] after:bg-tertary after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[24px]">
                <Shortby shortsArr={['Price Low-to-High', 'Price High-to-Low' , 'Name A-Z', 'Name Z-A']} shortWidth={200}/>
            </div>

            {/* short three */}
            <div className="ml-6 flex items-center gap-4 ">
                <GridView onClick={() => handleModeChange('grid') } className={`${viewmode == 'grid' ? 'text-brand' : 'text-tertary'}  w-6 h-6 cursor-pointer  `} />
                <ListView onClick={() => handleModeChange('list')} className={`${viewmode == 'list' ? 'text-brand' : 'text-tertary'}  w-6 h-6 cursor-pointer  `} />
            </div>

        </div>
    </div>
</div>
  )
}
