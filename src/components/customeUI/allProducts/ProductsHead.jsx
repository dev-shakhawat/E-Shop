import React, { useState } from 'react'
import Shortby from '../../common/Shortby'
import ListView from '../../../assets/icons/ListView'
import GridView from '../../../assets/icons/GridView'
import { useDispatch, useSelector } from 'react-redux'
import {currentMode} from '../../../redux/slices/viewmodeSlice'
import { filterMobile } from '../../../redux/slices/productSlice'


// icons
import { CiFilter } from "react-icons/ci";


export default function ProductsHead() {
    const [viewmode , setViewmode] = useState('grid')
    const dispatch = useDispatch()
    const allpagi = useSelector(state => state.pagination.productPagi.totalPage)
    const paginationCurrent = useSelector(state => state.pagination.productPagi.currentPage)
    const isFilter = useSelector(state => state.product.filter) 
     
    

    const handleModeChange = (mode) => {
        setViewmode(mode)
        dispatch(currentMode(mode))
      }
    
      
  return (
    <div className='w-full   '>
    <h2 className=" font-poppins font-semibold text-[36px] leading-[46px] text-primary    ">Products</h2>

    {/* short by tab */}
    <div className="md:flex justify-between mt-6">
        <p className='w-[300px] font-montserrat text-base leading-[24px] text-primary '>Showing {paginationCurrent == 1 ? 1 : (paginationCurrent - 1) * 16} - { paginationCurrent * 16 } of {allpagi * 16} results</p>

        <div className="flex md:justify-between gap-3 flex-wrap mt-3 md:mt-0 ">

            {/* short one */}
            <div className="flex gap-4 items-center 2xl:mr-6 xl:mr-4 lg:mr-2 mr-0 relative  after:content-[''] md:after:w-[1px] after:h-[32px] after:bg-tertary after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[24px]   ">
                <p className="font-montserrat font-normal 2xl:text-base  text-sm leading-[24px] text-primary    ">Sort by </p>
                <Shortby shortsArr={['Popularity', 'Most Recent']} shortWidth={`w-[90px] md:w-[120px] lg:w-[130px] xl:w-[135px]  `}/>
            </div>

            {/* short two */}
            <div className="flex gap-4 items-center 2xl:mx-6 xl:mx-5 md:mx-4 mx-2 relative  after:content-[''] md:after:w-[1px] after:h-[32px] after:bg-tertary after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[24px]">
                <Shortby shortsArr={['Price Low-to-High', 'Price High-to-Low' , 'Name A-Z', 'Name Z-A']} shortWidth={`w-[90px] md:w-[120px] lg:w-[130px] xl:w-[160px] 2xl:w-[200px]  `}/>
            </div>

            {/* short three */}
            <div className="2xl:ml-6 xl:ml-5 md:ml-4 ml-0 flex items-center gap-4 ">
                <GridView onClick={() => handleModeChange('grid') } className={`${viewmode == 'grid' ? 'text-brand' : 'text-tertary'}  2xl:w-6 2xl:h-6 w-[16px] h-[16px] cursor-pointer  `} />
                <ListView onClick={() => handleModeChange('list')} className={`${viewmode == 'list' ? 'text-brand' : 'text-tertary'}  2xl:w-6 2xl:h-6 w-[16px] h-[16px] cursor-pointer  `} />
            </div>

            {/* filters */}
            <button onClick={() => dispatch(filterMobile(!isFilter))} type="button"><CiFilter className='text-xl text-[#9c9c9c] cursor-pointer '/></button>

        </div>
    </div>
</div>
  )
}
