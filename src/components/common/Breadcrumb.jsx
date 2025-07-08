import React from 'react' 
import { Link, useLocation } from 'react-router'

export default function Breadcrumb() {

  const location = useLocation();
  
  const result = location.pathname.split("/") 
  
  
  return (
    <div className='2xl:pt-16 xl:pt-14 lg:pt-12 md:pt-10 pt-6 2xl:pb-12 xl:pb-10 lg:pb-8 md:pb-6 pb-4  flex items-center gap-4  '>
      <Link to={'/'} className='capitalize   font-montserrat font-normal text-base leading-6 text-primary   '><span>Home</span></Link>

      {result.map((path , i)=> i > 0 && <Link key={i} to={`/${path}`} className={` ${i === result.length - 1 ? "font-bold" : "font-normal "}   capitalize font-montserrat lg:text-base text-sm leading-6 text-primary relative after:content-[''] after:w-[1px] after:h-4 after:bg-primary after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2     `} >{path}  </Link> )}
    </div>
  )
}
