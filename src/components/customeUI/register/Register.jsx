import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";


// icons
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setauthStatus } from "../../../redux/slices/userSlice";

import axios from "axios";

// components
import InputField from "./InputField";
import RoboCheck from "./RoboCheck";
import SubscribeNotification from "./SubscribeNotification";
import Notification from "../../common/Notification";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isSubscribeChecked, setIsSubscribeChecked] = useState(false);
  const [isNotificationAllowed, setIsNotificationAllowed] = useState(false);
  const [notify , setNotify] = useState({isShow: false , status: false , message: ''})
  const [loading , setLoading] = useState(false)

  const handleCreateAccount = async () => {
    setLoading(true)

     
     if(!email || !password || !username){ 
      setNotify({isShow: true , status: false , message: 'All fields are required'})
      
      setTimeout(() => {
        setNotify({isShow: false , status: false , message: ''}) 
      }, 1500);
      setLoading(false)

        return
     } 

     axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, { email , password ,username , })
     .then((res)=>{
      setLoading(false)
      setNotify({isShow: true , status: true , message: 'Account created successfully'})

      setTimeout(() => {
        setNotify({isShow: false , status: false , message: ''}) 
      }, 1500);
       
     })
     .catch((err)=>{
       setLoading(false)  
       setNotify({isShow: true , status: false , message: err.response.data.message || err.message})

      setTimeout(() => {
        setNotify({isShow: false , status: false , message: ''}) 
      }, 1500);
      
     })
  };

  console.log(loading);
  

  return (
    <div className="pb-20">

      {notify.isShow && <Notification success={notify.status} message={notify.message}/>}

      {/* head */}
      <h2 className="text-center font-poppins font-bold text-[56px] leading-[68px] text-primary pt-16 pb-21    ">
        Register
      </h2>

      {/* register form */}
      <form className="py-12 px-9 bg-[#f4f4f4] max-w-[594px] mx-auto rounded-[15px]   ">
        {/* email */}
        <InputField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          title="Email Address"
          type="text"
          placeholder={`amelia.watson@eshop.com`}
        />

        {/* password */}
        <InputField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          title="Password"
          type="password"
          placeholder={`******`}
          className={`mt-6`}
        />

        {/* username */}
        <InputField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          isUserNameAvailable={true}
          title="Username"
          placeholder={`ameliawatson`}
          className={`mt-6`}
        />

        {/* check robot */}
        <RoboCheck setState={setIsRobotChecked} />

        {/* newslatter subscribe */}
        <SubscribeNotification
          setState={setIsSubscribeChecked}
          className={`mt-6    `}
          title="Subscribe to Newsletter"
          text="Get monthly new updates via email."
        />
        <SubscribeNotification
          setState={setIsNotificationAllowed}
          className={`mt-4    `}
          title="Receive Notification"
          text="Get daily notification for promo & new products."
        />

        {/* submit btn */}

        <button onClick={handleCreateAccount} type="button" className=" flex items-center gap-2 justify-center commonButton w-full  mt-10 mb-12  ">
          <span>Create Account</span> 
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </button>

        {/* sign in link */}
        <div className="flex  mt-6 justify-center   ">
          <p className="font-montserrat font-normal text-base leading-6 text-primary mr-2    ">
            Already have an account?{" "}
          </p>
          <button 
            onClick={()=> navigate("/auth/login")}
            type="button"
            className="cursor-pointer font-montserrat font-bold text-base leading-6 text-primary    "
          >
            Sign In
          </button>
        </div>

        {/* devider */}
        <div className="flex items-center mt-12  ">
          <hr className="text-tertary flex-1 " />
          <span className="font-montserrat font-normal text-xl leading-7.5 px-4   ">
            or
          </span>
          <hr className="text-tertary flex-1 " />
        </div>

        {/* login by others media */}
        <div className="flex items-center justify-between mt-12">
          <button
            type="button"
            className="bg-white rounded-[10px] py-6 px-16 text-[28px]    "
          >
            <FaGoogle />
          </button>
          <button
            type="button"
            className="bg-white rounded-[10px] py-6 px-16 text-[28px]    "
          >
            <FaTwitter />
          </button>
          <button
            type="button"
            className="bg-white rounded-[10px] py-6 px-16 text-[28px]    "
          >
            <FaFacebookF />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
