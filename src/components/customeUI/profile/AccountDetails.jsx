import React, { useState } from 'react'

// components
import InputField from '../register/InputField';

export default function AccountDetails() {

    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

  return (
    <div className='mt-12'>
        <h2 className="pb-2 font-poppins font-semibold text-[36px] leading-[46px] text-primary border-b-4 border-brand w-fit  ">Account Details</h2>

        {/* form */}
         <form className='mt-12 grid grid-cols-2 gap-6  '>

            {/* name */}
            <InputField inputStyle={`border border-tertary `} onChange={(e) => setFirstname(e.target.value)} title="First Name" placeholder={`Amelia Robert`} required={false} />
            <InputField inputStyle={`border border-tertary `} onChange={(e) => setLastname(e.target.value)} title="Last Name" placeholder={`Watson`} required={false} />
            <InputField inputStyle={`border border-tertary `} onChange={(e) => setEmail(e.target.value)} title="Email Address" placeholder={`amelia.watson@eshop.com`} required={false} />
            <InputField inputStyle={`border border-tertary `} onChange={(e) => setPassword(e.target.value)} title="Password" type="password" placeholder={`******`} required={false} />
         </form>

         {/* button */}
         <button type="button" className='mt-10 commonButton  '>Edit Profile</button>


    </div>
  )
}
