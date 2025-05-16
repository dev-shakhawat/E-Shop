import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

// components
import Container from "../common/Container.jsx";


// icons
import {IoIosSearch} from "react-icons/io";
import CartIcon from "../../icons/CartIcon.jsx";
import UserIcon from "../../icons/UserIcon.jsx";
import SearchIcon from "../../icons/SearchIcon.jsx";

function HeaderMiddle() {

    const userInfo = useSelector((state) => state.user.value)
    const navigate = useNavigate()


    const handelAccount = () => {
        if (userInfo) {
            navigate("/account")
        } else {
            navigate("/register")
        }
    }
    return (
        <Container>
            <div className="flex justify-between items-center py-8  ">
                {/* logo */}
                <img src="/images/logo.png" alt="logo" className={`w-[125px] h-[35px] cursor-pointer  `}
                     onClick={() => navigate("/")}/>

                {/* search/cart/user */}
                <div className="flex gap-20  ">

                    {/* search */}
                    <div className="w-[332px] relative ">
                        <input type="srarch" placeholder={`Search Products ...`}
                               className={`outline-none border-2 border-secondery pl-6 py-4.5 pr-11 text-primary  w-full rounded-[10px]  `}/>
                        <SearchIcon
                            className={`absolute top-[50%] right-5 -translate-y-[50%] text-2xl text-primary  `}/>
                    </div>

                    {/*  cart  */}
                    <div className="cursor-pointer flex items-center gap-3 relative "
                         onClick={() => navigate("/carts")}>
                        <span className="absolute w-[6px] h-[6px] bg-brand rounded-full top-3 left-[21%]  "></span>
                        <CartIcon/>
                        <div className="">
                            <p className="font-montserrat text-primary text-base leading-[24px]">Cart</p>
                            <h3 className="flex gap-1 font-bold text-base leading-[24px]  ">$ <span>150,00</span>
                            </h3>
                        </div>
                    </div>

                    {/* user */}
                    <div
                        onClick={() => handelAccount()}
                        className=" cursor-pointer  flex items-center gap-3 ml-5 relative after:content-[] after:absolute after:w-[1px] after:h-[50%] after:bg-tertary after:top-1/2 after:-left-[50%] after:-translate-y-[50%]">
                        <UserIcon/>
                        <div className="">
                            <p className="font-montserrat text-primary text-base leading-[24px]">User</p>
                            <h3 className="flex gap-1 font-bold text-base leading-[24px]  ">Account</h3>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default HeaderMiddle;
