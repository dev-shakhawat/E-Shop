import React from 'react'
import { useSelector } from 'react-redux'
import Register from '../../customeUI/register/Register'
import Login from "../../customeUI/login/Login"

export default function Auth() {

    const authStatus = useSelector((state)=> state.user.authStatus) 
  return (
    authStatus == "register" ? 
    <Register/>
    :
    <Login/>
  )
}
