import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

// components
import Container from "../common/Container.jsx";


// icons
import {IoIosSearch} from "react-icons/io";
import CartIcon from "../../assets/icons/CartIcon.jsx";
import UserIcon from "../../assets/icons/UserIcon.jsx";
import SearchIcon from "../../assets/icons/SearchIcon.jsx";
import {useTranslation} from "react-i18next";

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

    const {t} = useTranslation()
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
                        <input type="srarch" placeholder={t("Search_Products_._._.")}
                               className={`outline-none border-1 border-[#979797] pl-6 py-[18px] pr-11 text-primary  w-full rounded-[10px]  `}/>
                        <SearchIcon
                            className={`absolute top-[50%] right-5 -translate-y-[50%] text-2xl text-primary  `}/>
                    </div>

                    {/*  cart  */}
                    <div className="cursor-pointer flex items-center gap-3 relative "
                         onClick={() => navigate("/carts")}>
                        <span className="absolute w-[6px] h-[6px] bg-brand rounded-full top-3 left-[21%]  "></span>
                        <CartIcon/>
                        <div className="">
                            <p className="font-montserrat text-primary text-base leading-[24px]">{t("Cart")}</p>
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
                            <p className="font-montserrat text-primary text-base leading-[24px]">{t("User")}</p>
                            <h3 className="flex gap-1 font-bold text-base leading-[24px]  ">Account</h3>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default HeaderMiddle;
