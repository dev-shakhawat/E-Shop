import React from 'react'
import FacilityCart from '../facility/FacilityCart'

// icons
import Delevery from '../../assets/icons/Delevery'
import Security from '../../assets/icons/Security'
import Transparent from '../../assets/icons/Transparent'

export default function ProductFacility() {
  return (
    <div className='flex gap-12 justify-between '>
        <FacilityCart icon={<Delevery/>} title={`Free Shipping`} text={`Worldwide available`}/>
        <FacilityCart icon={<Security/>} title={`100% Guaranteed`} text={`Receive product first`}/>
        <FacilityCart icon={<Transparent/>} title={`Return Available`} text={`See return policy`}/>
    </div>
  )
}
