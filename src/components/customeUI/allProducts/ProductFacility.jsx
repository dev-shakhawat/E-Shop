import React from 'react'
import FacilityCart from '../facility/FacilityCart'

// icons
import Delevery from '../../../assets/icons/Delevery'
import Security from '../../../assets/icons/Security'
import Transparent from '../../../assets/icons/Transparent'

export default function ProductFacility() {
  return (
    <div className='flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between w-full '>
        <FacilityCart icon={<Delevery className={`w-12 h-12   `}/>} title={`Free Shipping`} text={`Worldwide available`}/>
        <FacilityCart icon={<Security/>} title={`100% Guaranteed`} text={`Receive product first`}/>
        <FacilityCart icon={<Transparent className={`w-9 h-9   `}/>} title={`Return Available`} text={`See return policy`}/>
    </div>
  )
}
