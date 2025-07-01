import React, { useEffect, useState } from 'react'

import CheckboxChecked from '../../../assets/icons/CheckboxChecked'
import CheckboxOutline from '../../../assets/icons/CheckboxOutline'

export default function RoboCheck({setState}) {

    const [isRobotChecked, setIsRobotChecked] = useState(false);
    
    useEffect(() => {
        setState(isRobotChecked)
    }, [isRobotChecked])

  return (
<div className="flex items-center justify-between py-5 px-4.5 bg-white rounded-[10px] mt-6   ">
    <div className="flex items-center relative  ">
        <input   type="checkbox" className="cursor-pointer   w-full h-full opacity-0 absolute top-0 left-0  "  onClick={(e) => setIsRobotChecked(e.target.checked)} />
        {isRobotChecked ? <CheckboxChecked/> :  <CheckboxOutline/>}
        <p className="font-montserrat font-normal text-xl leading-7.5 text-primary  ml-4    ">I am not a robot</p>
    </div>
    <button type="button" className='cursor-pointer'>
        <img src="/images/recapcha.png" alt="recapcha" />
    </button>
  </div>
  )
}
