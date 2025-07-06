import React, { useEffect, useRef, useState } from 'react'


// icons
import ArrowDown from '../../assets/icons/ArrowDown'

// function
import ToggleMenu from '../../helpers/toggleMenu'



export default function Selection({ items = [] , setValue , icon = false , className , modalPosition , seledtedTxtStyle  }) {

    const toggleRef = useRef(null)
    const [isDropdown, setIsDropdown] = useState(false)
    const [selectedItem, setSelectedItem] = useState(items[0])


    useEffect(() => {
        window.addEventListener('mousedown', ToggleMenu(toggleRef  , setIsDropdown));
        return () => window.removeEventListener('mousedown', ToggleMenu(toggleRef  , setIsDropdown ));
    }, [])

    useEffect(() => {
        setValue(selectedItem)
    }, [selectedItem])

  return (
<div className={`${className}  cursor-pointer relative  `} ref={toggleRef} onClick={() => setIsDropdown(prev => !prev)}>
      <div className=" flex items-center ">
        <span className={`flex-1  mr-3 truncate whitespace-nowrap overflow-hidden flex gap-2  ${seledtedTxtStyle}`}>
            {icon &&  <img src={selectedItem.image} alt="selectedItem" className='w-[20px] h-[20px]' /> }
           {icon ? selectedItem.name : selectedItem}
        </span>
        {isDropdown ? (
          <ArrowDown style={`w-[12px] h-[6px] rotate-[180deg] `} />
        ) : (
          <ArrowDown style={`w-[12px] h-[6px]`} />
        )}
      </div>

      {/*  all currency dropdown  */}
      {isDropdown && (
        <div className={` ${modalPosition}  absolute  z-[1] bg-white  rounded-md w-[140px] lg:w-[180px] max-h-[400px] h-fit   border border-tertary `}>
          <div className={`max-h-[200px] overflow-y-scroll`}>
            {items.length === 0 ? (
              <p className={`font-montserrat text-primary text-[12px] leading-[20px]`} >
                no data found
              </p>
            ) : (
              items.map((item) => (
                <div key={icon ? item.name : item} onClick={() => setSelectedItem(item)} className={`flex items-center px-2 py-1 gap-3 hover:bg-tertary/50   `} >
                  {icon &&  <img src={item.image} alt="selectedItem" className='w-[20px] h-[20px]' />}
                  <span className={`w-[150px] text-[14px] truncate whitespace-nowrap overflow-hidden`} > {icon ? item.name : item } </span>
                </div>
              ))
            )}
          </div>
        </div>
      )} 
  </div>
  )
}
