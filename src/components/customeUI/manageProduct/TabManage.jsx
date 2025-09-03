import React from 'react'

export default function TabManage({tabTitle ,  productOption , onClick}) {
  return (
    <button 
       onClick={onClick}
       type="button" 
       className={`font-medium text-lg leading-7.5 text-primary cursor-pointer border-b-2 ${tabTitle == productOption ? " border-brand" : "border-transparent "}   `}
    >
        {tabTitle}
    </button>
  )
}
