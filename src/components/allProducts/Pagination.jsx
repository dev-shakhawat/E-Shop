import React, { useEffect, useState } from 'react'
import Arrow from '../../assets/icons/Arrow'
import { useDispatch, useSelector } from 'react-redux'
import { currentPagination } from '../../redux/slices/paginationSlice'

export default function Pagination() {

    const paginationCurrent = useSelector(state => state.pagination.value)
    const allpagi = useSelector(state => state.pagination.totalPagination)
    const [activePage , setActivePage] = useState(3)
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(currentPagination(Number(activePage)))
    }, [activePage])
    
    
    const handlePaginationMinus = () => {
        if(paginationCurrent == 1) return
        setActivePage(prev => prev - 1)
    }

    const handlePaginationPlus = () => {
        if(paginationCurrent == allpagi) return
        setActivePage(prev => prev + 1)
    }
    
    
    

    

  return (
    <div className="flex items-center justify-center mt-20 ">

        {/* pagination minus button */}
        <button onClick={handlePaginationMinus} type="button" className='p-3'>  <Arrow  className={`w-[12px] h-[22px]  `} /> </button>

        {/* paginations number */}
        <div className="flex gap-[30px] mx-13 items-center">
            <button type='button' onClick={() => setActivePage(1)} className={`${paginationCurrent == 1 ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold text-xl leading-[30px]  cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              1
            </button>
            <button type='button' onClick={() => paginationCurrent <= 3 && setActivePage(2)} className={`${paginationCurrent == 2 ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              {allpagi > 5 && paginationCurrent <= 3 ? "2" : "..."}
            </button>

            <button type='button' onClick={() => paginationCurrent > 3 ? setActivePage(allpagi - 2)  : setActivePage(3)} className={`${paginationCurrent >= 3 && paginationCurrent < allpagi -1 ? 'bg-brand text-white' : 'text-primary bg-transparent' } font-poppins font-semibold text-xl leading-[30px] py-[9px] px-[18px] rounded-[5px]  cursor-pointer `}>
              {allpagi > 5 && paginationCurrent > 3 && (paginationCurrent <= allpagi-2 ? paginationCurrent : allpagi - 2) }
              {allpagi > 5 && paginationCurrent <= 3 && 3 }
            </button>
            
            <button type='button' onClick={() => paginationCurrent > 3 && setActivePage(allpagi - 1)} className={`${paginationCurrent == allpagi - 1 ? 'bg-brand text-white' : 'text-primary bg-transparent' }  font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              {allpagi > 5 && paginationCurrent > 3 && (paginationCurrent >= allpagi-2 ? allpagi - 1 : '...') }
              {allpagi > 5 && paginationCurrent <= 3 && '...'}
            </button>
            <button type='button' onClick={() => setActivePage(allpagi)}  className={` ${paginationCurrent == allpagi ? 'bg-brand text-white' : 'text-primary bg-transparent' }  font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              {allpagi}
            </button>
        </div>



        {/* pagination plus button */}
        <button onClick={handlePaginationPlus} className='p-3' type="button"> <Arrow className={`w-[12px] h-[22px] rotate-[180deg]  `} /></button>
       
  </div>
  )
}
