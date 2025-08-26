import React, { useState } from 'react'
import InputField from '../register/InputField' 

export default function ForgetPassword() {
    const [loading , setLoading] = useState(false)

    const [email , setEmail] = useState("")
    const [opt , setOtp] = useState("")

  return (
        <div className="pb-20">
          {/* head */}
          <h2 className="text-center font-poppins font-bold text-[56px] leading-[68px] text-primary pt-16 pb-21    ">
            Register
          </h2>
    
          {/* register form */}
          <form className="py-12 px-9 bg-[#f4f4f4] max-w-[594px] mx-auto rounded-[15px]   ">
            {/* email */}
            <div className="flex">
                <InputField
                onChange={(e) => setEmail(e.target.value)}
                className={`flex-1`}
                type="text"
                placeholder={`amelia.watson@eshop.com`}
                />
            <button type="button" className="flex items-center justify-center gap-2 bg-brand px-4 rounded-lg ml-1 text-white font-semibold cursor-pointer      ">
              <span>Get OTP</span>
              {loading && <AiOutlineLoading3Quarters className="animate-spin"/>}
            </button>
            </div>
    
            {/* otp */}
            <InputField 
              type="text" 
              className={`mt-6`}
              placeholder={`Enter OTP`}
            />

            {/* password */}
            <InputField 
              type="text" 
              className={`mt-6`}
              placeholder={`Enter new Password`}
            />
    
            {/* submit btn */} 
            <button type="button" className="flex items-center justify-center gap-2 commonButton w-full  mt-10 mb-12  ">
              <span>Reset Password</span>
              {loading && <AiOutlineLoading3Quarters className="animate-spin"/>}
            </button>
    
    
 
 
          </form>
        </div>
  )
}
