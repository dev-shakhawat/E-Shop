import React, { useState } from "react";
import InputField from "../register/InputField";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import Notification from "../../common/Notification";
import { useDispatch } from "react-redux";
import { userSet } from "../../../redux/slices/userSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router"; 

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");    
  const [notify , setNotify] = useState({isShow: false , status: false , message: ''})
  const [loading , setLoading] = useState(false)

  const handleLogin = async () => { 

    
    if(!email || !password){
      setNotify({isShow: true , status: false , message: 'All fields are required'})
      setLoading(false)
      setTimeout(() => {
        setNotify({isShow: false , status: false , message: ''}) 
      }, 2000);
      return
    } 

    setLoading(prev => !prev)

    axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, { email , password } , {withCredentials: true} )
    .then((res)=>{ 
      dispatch(userSet(res.data.data))
      
    })
    .then((res)=>{
      setLoading(false)
      setNotify({isShow: true , status: true , message: 'Login successfully'})
      setTimeout(() => {
        setNotify({isShow: false , status: false , message: ''}) 
        navigate('/auth')
      }, 1500);
    })
    .catch((err)=>{
      console.log(err);
      
      setLoading(false)
      setNotify({isShow: true , status: false , message: err.response.data.message || err.message})
      setTimeout(() => {
        setNotify({isShow: false , status: false , message: ''}) 
        if(err.response.data.redirectID){
          
          navigate(`/auth/otp/${err.response.data.redirectID}`)
        }
      }, 1500);
    })
  };

  return (
    <div className="pb-20">
      {notify.isShow && <Notification success={notify.status} message={notify.message}/>}
      {/* head */}
      <h2 className="text-center font-poppins font-bold text-[56px] leading-[68px] text-primary pt-16 pb-21    ">
        Login
      </h2>

      {/* register form */}
      <form className="py-12 px-9 bg-[#f4f4f4] max-w-[594px] mx-auto rounded-[15px]   ">
        {/* email */}
        <InputField
          onChange={(e) => setEmail(e.target.value)}
          title="Email Address"
          type="text"
          placeholder={`amelia.watson@eshop.com`}
        />

        {/* password */}
        <InputField
          onChange={(e) => setPassword(e.target.value)}
          title="Password"
          type="password"
          placeholder={`******`}
          className={`mt-6`}
        />

        {/* forget password */}
        <button
          onClick={()=> navigate("/auth/reset-password")}
          type="button"
          className="font-montserrat font-normal text-base leading-6 text-primary mt-6    "
        >
          Forget Password?
        </button>

        {/* submit btn */}

        <button onClick={handleLogin} type="button" className="flex items-center justify-center gap-2 commonButton w-full  mt-10 mb-12  ">
          <span>Login</span>
          {loading && <AiOutlineLoading3Quarters className="animate-spin"/>}
        </button>

        {/* sign in link */}
        <div className="flex  mt-6 justify-center   ">
          <p className="font-montserrat font-normal text-base leading-6 text-primary mr-2    ">
            You have not any account?{" "}
          </p>
          <button
            onClick={()=> navigate("/auth")}
            type="button"
            className="font-montserrat font-bold text-base leading-6 text-primary    "
          >
            Sign Up
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
