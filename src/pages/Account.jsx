import React from 'react'
import { useSelector } from 'react-redux'


// components
import Auth from '../components/common/auth/Auth'
import MyAccount from '../components/customeUI/account/MyAccount'


export default function Account() {

    const user = useSelector(state => state.user.user)

  return (
    user ? <MyAccount/> : <Auth/>
  )
}
