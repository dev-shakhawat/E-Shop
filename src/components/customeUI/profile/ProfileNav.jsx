import React from 'react' 

// icons
import Order from "../../../assets/icons/Order.jsx";
import Wallet from "../../../assets/icons/Wallet.jsx";
import CartIcon from "../../../assets/icons/CartIcon.jsx";
import Home from "../../../assets/icons/Home.jsx";
import UserProfile from "../../../assets/icons/UserProfile.jsx";
import Logout from "../../../assets/icons/Logout.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { BsCloudPlus } from "react-icons/bs";

export default function ProfileNav() {
    const activetab = useSelector(state => state.user.profileActiveTab)
    const dispatch = useDispatch() 
    
  return (
    <ul className='flex flex-col gap-4  '>
        <li onClick={() => dispatch({type: "user/activeProfileTab" , payload: "orders"})} className={`flex items-center  hover:text-brand duration-300 cursor-pointer ${activetab == "orders" ? "text-brand":"text-primary"}   `}> 
            <Order  />
            <span className=" ml-4 ">Orders</span> 
        </li>
        <li onClick={() => dispatch({type: "user/activeProfileTab" , payload: "Wallet"})} className={`flex items-center  hover:text-brand duration-300 cursor-pointer ${activetab == "Wallet" ? "text-brand":"text-primary"}   `}> 
            <Wallet />
            <span className=" ml-4 ">Wallet</span> 
        </li>
        <li onClick={() => dispatch({type: "user/activeProfileTab" , payload: "cart"})} className={`flex items-center  hover:text-brand duration-300 cursor-pointer  ${activetab == "cart" ? "text-brand":"text-primary"}  `}> 
            <CartIcon className={`w-7 h-7   `}/>
            <span className=" ml-4 ">Cart</span> 
        </li>
        <li onClick={() => dispatch({type: "user/activeProfileTab" , payload: "address"})}    className={`flex items-center  hover:text-brand duration-300 cursor-pointer  ${activetab == "address" ? "text-brand":"text-primary"}  `}> 
            <Home  />
            <span className=" ml-4 ">Address</span> 
        </li>
        <li onClick={() => dispatch({type: "user/activeProfileTab" , payload: "addProduct"})}    className={`flex items-center  hover:text-brand duration-300 cursor-pointer  ${activetab == "addProduct" ? "text-brand":"text-primary"}  `}> 
            <BsCloudPlus className='w-7 h-7'  />
            <span className=" ml-4 ">Add Product</span> 
        </li>
        <li onClick={() => dispatch({type: "user/activeProfileTab" , payload: "accountDetails"})} className={`flex items-center  hover:text-brand duration-300 cursor-pointer ${activetab == "accountDetails" ? "text-brand":"text-primary"}   `}> 
            <UserProfile />
            <span className=" ml-4 ">Account Details</span> 
        </li>
        <li onClick={() => dispatch({type: "user/activeProfileTab" , payload: "logout"})} className={`flex items-center  hover:text-brand duration-300 cursor-pointer  ${activetab == "logout" ? "text-brand":"text-primary"}  `}> 
            <Logout />
            <span className=" ml-4 ">Log Out</span> 
        </li>
    </ul>
  )
}
