import React, { useState } from "react";
import InputField from "../register/InputField";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setauthStatus } from "../../../redux/slices/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isSubscribeChecked, setIsSubscribeChecked] = useState(false);
  const [isNotificationAllowed, setIsNotificationAllowed] = useState(false);

  return (
    <div className="pb-20">
      {/* head */}
      <h2 className="text-center font-poppins font-bold text-[56px] leading-[68px] text-primary pt-16 pb-21    ">
        Register
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

        {/* submit btn */}

        <button type="button" className=" commonButton w-full  mt-10 mb-12  ">
          <span>Login</span>
        </button>

        {/* sign in link */}
        <div className="flex  mt-6 justify-center   ">
          <p className="font-montserrat font-normal text-base leading-6 text-primary mr-2    ">
            You have not any account?{" "}
          </p>
          <button
            onClick={() => dispatch(setauthStatus("register"))}
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
