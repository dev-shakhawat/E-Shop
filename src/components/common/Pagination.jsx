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
    <div className="flex items-center justify-center mt-20">

      {/* Minus button */}
      <button onClick={handlePaginationMinus} type="button" className='p-3'>
        <Arrow className="w-[12px] h-[22px]" />
      </button>

      {/* Pagination numbers */}
      <div className="flex gap-[30px] mx-13 items-center">
        
        {pages[0] > 1 && (
          <>
            <button type="button" onClick={() => setActivePage(1)}
              className={`${activePage === 1 ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              1
            </button>
            {pages[0] > 2 && <span className="font-poppins text-xl">...</span>}
          </>
        )}

        {pages.map((page) => (
          <button key={page} type="button" onClick={() => setActivePage(page)}
            className={`${activePage === page ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
            {page}
          </button>
        ))}

        {pages[pages.length - 1] < totalPage && (
          <>
            {pages[pages.length - 1] < totalPage - 1 && <span className="font-poppins text-xl">...</span>}
            <button type="button" onClick={() => setActivePage(totalPage)}
              className={`${activePage === totalPage ? 'bg-brand text-white' : 'text-primary bg-transparent'} font-poppins font-semibold text-xl leading-[30px] cursor-pointer py-[9px] px-[18px] rounded-[5px]`}>
              {totalPage}
            </button>
          </>
        )}

      </div>

      {/* Plus button */}
      <button onClick={handlePaginationPlus} type="button" className='p-3'>
        <Arrow className="w-[12px] h-[22px] rotate-[180deg]" />
      </button>
    </div>
  )
}
