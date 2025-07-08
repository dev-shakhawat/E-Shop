import React, { useEffect, useState } from 'react'
import Arrow from '../../assets/icons/Arrow'
import { useDispatch } from 'react-redux'

export default function Pagination({ currentPage, totalPage, currentPaginationPageDispatch, pageToShow = 4 }) {
  const [activePage, setActivePage] = useState(currentPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentPaginationPageDispatch(Number(activePage)))
  }, [activePage, dispatch, currentPaginationPageDispatch])

  const handlePaginationMinus = () => {
    if (activePage > 1) {
      setActivePage(prev => prev - 1)
    }
  }

  const handlePaginationPlus = () => {
    if (activePage < totalPage) {
      setActivePage(prev => prev + 1)
    }
  }

  // Pagination range calculation
  const generatePages = () => {
    const pages = []
    const half = Math.floor(pageToShow / 2)

    let start = Math.max(1, activePage - half)
    let end = Math.min(totalPage, activePage + half)

    if (activePage <= half) {
      end = Math.min(totalPage, pageToShow)
    }

    if (activePage + half > totalPage) {
      start = Math.max(1, totalPage - pageToShow + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  const pages = generatePages()

  return (
    <div className="flex items-center justify-center 2xl:mt-20 xl:mt-16 lg:mt-12 md:mt-8 mt-4    ">

      {/* Minus button */}
      <button onClick={handlePaginationMinus} type="button" className='p-3'>
        <Arrow className="xl:w-[12px] w-[10px] xl:h-[22px] h-[10px]" />
      </button>

      {/* Pagination numbers */}
      <div className="flex 2xl:gap-[30px] xl:gap-6 lg:gap-5 md:gap-4 gap-2  2xl:mx-13 xl:mx-10 lg:mx-8 md:mx-6 mx-2    items-center">
        
        {pages[0] > 1 && (
          <>
            <button type="button" onClick={() => setActivePage(1)}
              className={`${activePage === 1 ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold 2xl:text-xl lg:text-base md:text-sm text-xs 2xl:leading-[30px] xl:leading-6 lg:leading-5 md:leading-4 leading-3 cursor-pointer 2xl:py-[9px] lg:py-[6px] py-1 2xl:px-[18px] lg:px-[14px] px-[10px] rounded-[5px]`}>
              1
            </button>
            {pages[0] > 2 && <span className="font-poppins text-xl">...</span>}
          </>
        )}

        {pages.map((page) => (
          <button key={page} type="button" onClick={() => setActivePage(page)}
            className={`${activePage === page ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold 2xl:text-xl lg:text-base md:text-sm text-xs 2xl:leading-[30px] xl:leading-6 lg:leading-5 md:leading-4 leading-3 cursor-pointer 2xl:py-[9px] lg:py-[6px] py-1 2xl:px-[18px] lg:px-[14px] px-[10px] rounded-[5px]`}>
            {page}
          </button>
        ))}

        {pages[pages.length - 1] < totalPage && (
          <>
            {pages[pages.length - 1] < totalPage - 1 && <span className="font-poppins text-xl">...</span>}
            <button type="button" onClick={() => setActivePage(totalPage)}
              className={`${activePage === totalPage ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold 2xl:text-xl lg:text-base md:text-sm text-xs 2xl:leading-[30px] xl:leading-6 lg:leading-5 md:leading-4 leading-3 cursor-pointer 2xl:py-[9px] lg:py-[6px] py-1 2xl:px-[18px] lg:px-[14px] px-[10px] rounded-[5px]`}>
              {totalPage}
            </button>
          </>
        )}

      </div>

      {/* Plus button */}
      <button onClick={handlePaginationPlus} type="button" className='p-3'>
        <Arrow className="xl:w-[12px] w-[10px] xl:h-[22px] h-[10px] rotate-[180deg]" />
      </button>
    </div>
  )
}
