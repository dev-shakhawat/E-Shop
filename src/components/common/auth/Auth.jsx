import React from 'react'
import { useSelector } from 'react-redux'
import Register from '../../customeUI/register/Register'
import Login from "../../customeUI/login/Login"
import ForgetPassword from "../../customeUI/forgetPassword/ForgetPassword"

export default function Auth() {

    const authStatus = useSelector((state)=> state.user.authStatus) 
  return (
    authStatus == "register" && <Register/>
    || authStatus == "login" && <Login/>
    || authStatus == "forgetPassword" && <ForgetPassword/>
    
  )
}
