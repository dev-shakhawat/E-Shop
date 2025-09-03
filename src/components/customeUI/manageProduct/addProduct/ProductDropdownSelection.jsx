import React from 'react'

export default function ProductDropdownSelection({value , setProductInfo , productInfo}) {
  return (
<div className="relative z-0 w-full mt-4 group">
    <select value={value} onChange={(e) => setProductInfo({...productInfo , productWarenty: e.target.value})} name="warenty" id="warenty" className="w-full border-b-2 border-tertary outline-0    ">
      <option value="" selected disabled hidden>Warenty</option>
      <option value="0 month">6 month</option>
      <option value="1 year">1 year</option>
      <option value="2 year">2 year</option>
      <option value="3 year">3 year</option>
      <option value="4 year">4 year</option>
      <option value="5 year">5 year</option>
      <option value="6 year">6 year</option>
      <option value="7 year">7 year</option>
      <option value="8 year">8 year</option>
      <option value="9 year">9 year</option>
      <option value="10 year">10 year</option>
      <option value="11 year">Not available</option>
    </select> 
  </div>
  )
}
