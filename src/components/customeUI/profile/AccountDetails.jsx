import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

// components
import InputField from '../register/InputField';
import Notification from '../../common/Notification';

// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function AccountDetails() {

   
    const userInfo = useSelector((state) => state.user.user);
    const [firstname , setFirstname] = useState(userInfo?.firstName)
    const [lastname , setLastname] = useState(userInfo?.lastName)
    const [email , setEmail] = useState(userInfo?.email)
    const [username , setUsername] = useState(userInfo?.username)
    const [updating , setUpdating] = useState(false)
    const [notify , setNotify] = useState({isShow: false , status: false , message: ''})
    const navigate = useNavigate()

 

    const handleUpdateProfile = () => {
      setUpdating(true);
   
      axios.patch(
        `${import.meta.env.VITE_BASE_URL}/auth/updateprofile/${userInfo?._id}`, 
        { firstname, lastname, email, username },
        { withCredentials: true, headers: { 'Content-Type': 'application/json' } }
      )
      .then((res) => {
        setUpdating(false);
        setNotify({ isShow: true, status: true, message: res.data.message });
        setTimeout(() =>    {
          setNotify({ isShow: false, status: false, message: ''})
          if(res.data.redirectID) navigate(`/authorize/${res.data.redirectID}`) 
        }, 1500);
      })
      .catch((err) => {
        setUpdating(false);
        setNotify({ isShow: true, status: false, message: err.response?.data?.message || err.message });
        setTimeout(() => setNotify({ isShow: false, status: false, message: ''}), 1500);
      });
   }
    
  return (
    <div className='mt-12'>

        {notify.isShow && <Notification message={notify.message} success={notify.status}/>}
        <h2 className="pb-2 cmnHeadTwo text-primary  border-b-4 border-brand w-fit  ">Account Details</h2>

        {/* form */}
         <form className='mt-12 grid grid-cols-2 gap-6  '>

            {/* name */}
            <InputField value={firstname} inputStyle={`border border-tertary `} onChange={(e) => setFirstname(e.target.value)} title="First Name" placeholder={`Your first name`} required={false} />
            <InputField value={lastname} inputStyle={`border border-tertary `} onChange={(e) => setLastname(e.target.value)} title="Last Name" placeholder={`Your last name`} required={false} />
            <InputField value={email} inputStyle={`border border-tertary `} onChange={(e) => setEmail(e.target.value)} title="Email Address" placeholder={`amelia.watson@eshop.com`} required={false} />
            <InputField value={username} inputStyle={`border border-tertary `} onChange={(e) => setUsername(e.target.value)} title="Username"   required={false} />
         </form>

         {/* button */}
         <button onClick={handleUpdateProfile} type="button" className='mt-10 commonButton flex items-center justify-center gap-2  '>
          <span>Update Profile</span>
          {updating && <AiOutlineLoading3Quarters className='animate-spin'/>}
         </button>


    </div>
  )
}
