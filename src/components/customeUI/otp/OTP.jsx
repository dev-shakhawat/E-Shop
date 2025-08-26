import React, { use, useState } from 'react'
import InputField from '../register/InputField' 
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import Notification from '../../common/Notification'

export default function OTP() {
    const [loading , setLoading] = useState(false)
    const [resendLoad , setResendLoad] = useState(false)
    const [otp , setOtp] = useState("")
    const {id} = useParams()
    const [notify , setNotify] = useState({isShow: false , status: false , message: ''})
    const navigate = useNavigate()
     
    const handleResendOTP = () => {
      setResendLoad(prev => !prev) 

      axios.get(`${import.meta.env.VITE_BASE_URL}/auth/otpsend/${id}`)
      .then((res)=>{
        setResendLoad(prev => !prev)

      })
      .catch((err)=>{ 
        setResendLoad(prev => !prev)
      })

    }

    const handleSubmitOTPb = () => {
      setLoading(true)
      axios.post(`${import.meta.env.VITE_BASE_URL}/auth/mailverify/${id}` , {otp})
      .then((res)=>{
        setLoading(false)
        console.log(res.data);
        setNotify({isShow: true , status: true , message: res.data.message})
        setTimeout(() => {
          setNotify({isShow: false , status: false , message: ''}) 
          if(res.data.redirectID)navigate(res.data.redirectID)
        }, 1500);
      })
      .catch((err)=>{
        setLoading(false)
        console.log(err);
        setNotify({isShow: true , status: false , message: err.response.data.message || err.message})
        setTimeout(() => {
          setNotify({isShow: false , status: false , message: ''}) 
        }, 1500);
      })
    }

  return (
        <div className="pb-20">
          {notify.isShow && <Notification  success={notify.status} message={notify.message}  />}
          {/* head */}
          <h2 className="text-center font-poppins font-bold text-[56px] leading-[68px] text-primary pt-16 pb-21    ">
            Verify Identity
          </h2>
    
          {/* register form */}
          <form className="py-12 px-9 bg-[#f4f4f4] max-w-[594px] mx-auto rounded-[15px]   ">
 
    
            {/* otp */}
            <InputField 
              type="text" 
              className={`mt-6`}
              placeholder={`Enter OTP`}
              onChange={(e) => setOtp(e.target.value)}
            />
    
            <button onClick={handleResendOTP} type="button" className="flex items-center justify-center gap-2 rounded-lg ml-1 underline font-semibold cursor-pointer      ">
              <span>Re-send OTP</span>
              {/* <AiOutlineLoading3Quarters className="animate-spin"/> */}
              {resendLoad && <AiOutlineLoading3Quarters className="animate-spin"/>}
            </button>
            {/* submit btn */} 
            <button onClick={handleSubmitOTPb} type="button" className="flex items-center justify-center gap-2 commonButton w-full  mt-10 mb-12  ">
              <span>Submit OTP</span>
              {loading && <AiOutlineLoading3Quarters className="animate-spin"/>}
            </button>
    
          </form>
        </div>
  )
}
