import React, { useEffect, useRef } from 'react'
import ToggleMenu from '../../../helpers/toggleMenu'

export default function ProductImageViewerModal({image , closeModal}) {

  const imgRef = useRef(null)
  
  useEffect(() => {
    window.addEventListener('mousedown', ToggleMenu(imgRef  , closeModal));
    return () => window.removeEventListener('mousedown', ToggleMenu(imgRef  , closeModal ));
  }, [])


  return (
    <div className='w-full h-full fixed top-0 left-0 bg-primary/70 z-10 grid place-items-center   '>
        
        <div ref={imgRef} className="w-[80%] h-[90%] overflow-hidden rounded-[10px]  border-2 border-[#D9D9D9]  ">
          <img  src={image} alt={image} className=' w-full h-full object-contain  ' />
        </div>
    </div>
  )
}
