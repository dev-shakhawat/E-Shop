import React, { useRef, useState } from 'react';
import InputField from '../components/register/InputField';
import RoboCheck from '../components/register/RoboCheck';
import SubscribeNotification from '../components/register/SubscribeNotification';


// icons
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Register() {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [username , setUsername] = useState('')
    const [isRobotChecked, setIsRobotChecked] = useState(false);
    const [isSubscribeChecked, setIsSubscribeChecked] = useState(false);
    const [isNotificationAllowed , setIsNotificationAllowed] = useState(false);
    
    return (
        <div className='pb-20'>
            
            {/* head */}
            <h2 className="text-center font-poppins font-bold text-[56px] leading-[68px] text-primary pt-16 pb-21    ">Register</h2>

            {/* register form */}
            <form className="py-12 px-9 bg-[#f4f4f4] max-w-[594px] mx-auto rounded-[15px]   ">

                {/* email */}
              <InputField onChange={(e) => setEmail(e.target.value)} title="Email Address"  type='text' placeholder={`amelia.watson@eshop.com`} />

              {/* password */}
              <InputField onChange={(e) => setPassword(e.target.value)} title="Password"   type='password' placeholder={`******`} className={`mt-6`} />
              <p className="font-montserrat font-bold text-base leading-6 text-primary mt-2     ">Password Strength: <span className='font-normal'>Medium</span></p>

              {/* username */}
              <InputField onChange={(e) => setUsername(e.target.value)} isUserNameAvailable={true}  title="Username"  placeholder={`ameliawatson`} className={`mt-6`}  />

              {/* check robot */}
              <RoboCheck  setState={setIsRobotChecked} />


              {/* newslatter subscribe */}
              <SubscribeNotification setState={setIsSubscribeChecked} className={`mt-6    `} title="Subscribe to Newsletter" text="Get monthly new updates via email." />
              <SubscribeNotification setState={setIsNotificationAllowed} className={`mt-4    `} title="Receive Notification" text="Get daily notification for promo & new products." />
              

              {/* submit btn */}

              <button type="button" className=' font-montserrat text-xl font-bold py-6 mt-10 leading-7.5 text-white w-full rounded-[10px] bg-brand    '   >Create Account</button>


              {/* sign in link */}
              <div className="flex  mt-6 justify-center   " >
                <p className="font-montserrat font-normal text-base leading-6 text-primary mr-2    ">Already have an account? </p>
                <a href="/login" className="font-montserrat font-bold text-base leading-6 text-primary    ">Sign In</a>
              </div>


              {/* devider */}
              <div className="flex items-center mt-12  ">
                <hr className='text-tertary flex-1 '/>
                <span className='font-montserrat font-normal text-xl leading-7.5 px-4   '>or</span>
                <hr className='text-tertary flex-1 '/>
              </div>


              {/* login by others media */}
              <div className="flex items-center justify-between mt-12">
                <button type="button" className='bg-white rounded-[10px] py-6 px-16 text-[28px]    '><FaGoogle /></button>
                <button type="button" className='bg-white rounded-[10px] py-6 px-16 text-[28px]    '><FaTwitter /></button>
                <button type="button" className='bg-white rounded-[10px] py-6 px-16 text-[28px]    '><FaFacebookF /></button>
              </div>

            </form>



        </div>
    );
}

export default Register;