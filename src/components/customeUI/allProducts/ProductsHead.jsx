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
    
      const handleFilter = (e) => { 
        e.stopPropagation();
        dispatch(filterMobile(!isFilter));
      }
      
  return (
    <div className='w-full   '>
    <h2 className=" font-poppins font-semibold 2xl:text-[36px] xl:text-[32px] lg:text-[30px] md:text-[28px] sm:text-[26px] text-xl  2xl:leading-[46px] text-primary    ">Products</h2>

    {/* short by tab */}
    <div className="xl:flex justify-between 2xl:mt-6 xl:mt-5 md:mt-4 mt-1    ">
        <p className='w-[300px] font-montserrat text-base leading-[24px] text-primary '>Showing {paginationCurrent == 1 ? 1 : (paginationCurrent - 1) * 16} - { paginationCurrent * 16 } of {allpagi * 16} results</p>

        <div className="flex lg:justify-between gap-3 flex-wrap mt-3 md:mt-0 ">

            {/* short one */}
            <div className="flex flex-1 gap-4 items-center 2xl:mr-6 xl:mr-4 lg:mr-2 mr-0 relative  after:content-[''] xl:after:w-[1px] after:h-[32px] after:bg-tertary after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[24px]   ">
                <p className="font-montserrat font-normal 2xl:text-base  text-sm leading-[24px] text-primary w-[100px]  ">Sort by </p>
                <Shortby shortsArr={['Popularity', 'Most Recent']} shortWidth={`w-full  lg:w-[130px] xl:w-[135px]  `}/>
            </div>

            {/* short two */}
            <div className="flex flex-1 gap-4 items-center 2xl:mx-6 xl:mx-5 md:mx-4 mx-2 relative  after:content-[''] xl:after:w-[1px] after:h-[32px] after:bg-tertary after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-[24px]">
                <Shortby shortsArr={['Price Low-to-High', 'Price High-to-Low' , 'Name A-Z', 'Name Z-A']} shortWidth={`w-full  lg:w-[130px] xl:w-[160px] 2xl:w-[200px]  `}/>
            </div>

            {/* short three */}
            <div className="2xl:ml-6 xl:ml-5 md:ml-4 ml-0 flex items-center gap-4 ">
                <GridView onClick={() => handleModeChange('grid') } className={`${viewmode == 'grid' ? 'text-brand' : 'text-tertary'}  2xl:w-6 2xl:h-6 w-[16px] h-[16px] cursor-pointer  `} />
                <ListView onClick={() => handleModeChange('list')} className={`${viewmode == 'list' ? 'text-brand' : 'text-tertary'}  2xl:w-6 2xl:h-6 w-[16px] h-[16px] cursor-pointer  `} />

                {/* filters */}
                <button onClick={(e) => handleFilter(e)} type="button"><CiFilter className='text-xl text-[#9c9c9c] cursor-pointer md:hidden inline-block -mt-1  '/></button>
            </div>

        </div>
    </div>
</div>
  )
}
