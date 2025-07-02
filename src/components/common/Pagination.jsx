import React, { useEffect, useState } from 'react'
import Arrow from '../../assets/icons/Arrow'
import { useDispatch } from 'react-redux' 

export default function Pagination({currentPage , totalPage , currentPaginationPageDispatch }) {

    const [activePage , setActivePage] = useState(currentPage)
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(currentPaginationPageDispatch(Number(activePage)))
    }, [activePage])
    
    
    const handlePaginationMinus = () => {
        if(currentPage == 1) return
        setActivePage(prev => prev - 1)
    }

    const handlePaginationPlus = () => {
        if(currentPage == totalPage) return
        setActivePage(prev => prev + 1)
    }
     
    
    

  return (
    <div className="flex items-center justify-center mt-20 ">

        {/* pagination minus button */}
        <button onClick={handlePaginationMinus} type="button" className='p-3'>  <Arrow  className={`w-[12px] h-[22px]  `} /> </button>

        {/* paginations number */}
        <div className="flex gap-[30px] mx-13 items-center">
            <button type='button' onClick={() => setActivePage(1)} className={`${currentPage == 1 ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold text-xl leading-[30px]  cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              1
            </button>
            <button type='button' onClick={() => currentPage <= 3 && setActivePage(2)} className={`${currentPage == 2 ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              {totalPage > 5 && currentPage <= 3 ? "2" : "..."}
            </button>

            <button type='button' onClick={() => currentPage > 3 ? setActivePage(totalPage - 2)  : setActivePage(3)} className={`${currentPage >= 3 && currentPage < totalPage -1 ? 'bg-brand text-white' : 'text-primary bg-transparent' } font-poppins font-semibold text-xl leading-[30px] py-[9px] px-[18px] rounded-[5px]  cursor-pointer `}>
              {totalPage > 5 && currentPage > 3 && (currentPage <= totalPage-2 ? currentPage : totalPage - 2) }
              {totalPage > 5 && currentPage <= 3 && 3 }
            </button>
            
            <button type='button' onClick={() => currentPage > 3 && setActivePage(totalPage - 1)} className={`${currentPage == totalPage - 1 ? 'bg-brand text-white' : 'text-primary bg-transparent' }  font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              {totalPage > 5 && currentPage > 3 && (currentPage >= totalPage-2 ? totalPage - 1 : '...') }
              {totalPage > 5 && currentPage <= 3 && '...'}
            </button>
            <button type='button' onClick={() => setActivePage(totalPage)}  className={` ${currentPage == totalPage ? 'bg-brand text-white' : 'text-primary bg-transparent' }  font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              {totalPage}
            </button>
        </div>



        {/* pagination plus button */}
        <button onClick={handlePaginationPlus} className='p-3' type="button"> <Arrow className={`w-[12px] h-[22px] rotate-[180deg]  `} /></button>
       
  </div>
  )
}
