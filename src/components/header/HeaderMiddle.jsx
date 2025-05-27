import React, {useEffect, useRef, useState} from 'react';
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
    const navigate = useNavigate();
    const [ismobile, setIsmobile] = useState(false);
    const logoRef = useRef(null);
    const searchRef = useRef(null);
    const inputRef = useRef(null);

    const handelAccount = () => {
        if (userInfo) {
            navigate("/account")
        } else {
            navigate("/register")
        }
    }

    const {t} = useTranslation()


    // searchbox set for mobile device
    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth < 640) {
                setIsmobile(true)
                inputRef.current.classList.add("hidden")
            } else {
                setIsmobile(false)
                inputRef.current.classList.remove("hidden")
                searchRef.current.className = " lg:w-[332px] relative  h-full ";
                logoRef.current.classList.remove("hidden");
            }
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => {
            window.removeEventListener("resize", checkWidth);
        };
    }, []);

    useEffect(() => {

        const handelChechSearchBox = (event) => {
            if (ismobile && searchRef.current && !searchRef.current.contains(event.target)) {
                logoRef.current.classList.remove("hidden");
                inputRef.current.classList.add("hidden")
                searchRef.current.className = "w-[40px] lg:w-[332px] relative  h-full "
            }
        }

        window.addEventListener("mousedown", handelChechSearchBox)

        return () => {
            window.removeEventListener("mousedown", handelChechSearchBox)
        }
    }, [ismobile])


    const handleMobilesearch = () => {
        if (ismobile) {
            inputRef.current.classList.remove("hidden")
            logoRef.current.classList.add("hidden");
            searchRef.current.className = "w-full lg:w-[332px] relative  h-full "
        }

    }
    return (
        <Container>
            <div className="flex justify-between items-center py-3 lg:py-8  ">
                {/* logo */}
                <img ref={logoRef} src="/images/logo.png" alt="logo"
                     className={` w-[90px] lg:w-[125px] h-[25px] lg:h-[35px] cursor-pointer  `}
                     onClick={() => navigate("/")}/>

                {/* search/cart/user */}
                <div
                    className="flex items-center justify-end gap-3 sm:gap-5 md:gap-10 lg:gap-20 w-full  h-[30px] md:h-fit   ">

                    {/* search */}
                    <div onClick={() => handleMobilesearch()}
                         ref={searchRef}
                         className="w-[35px] lg:w-[332px] relative   h-full  ">
                        <input
                            ref={inputRef}
                            type="search"
                            placeholder={t("Search_Products_._._.")}
                            className={`   outline-none border-1 border-[#979797] pl-2 lg:pl-6 py-1.5 lg:py-[18px] pr-3 lg:pr-11 text-primary   w-full rounded-[10px]  `}/>
                        <SearchIcon
                            className={`absolute top-4 md:top-[50%] right-2 md:right-5 -translate-y-[50%] text-2xl   text-primary bg-white cursor-pointer  `}/>
                    </div>

                    {/*  cart  */}
                    <div className="cursor-pointer flex items-center gap-1.5 md:gap-3 relative "
                         onClick={() => navigate("/carts")}>
                        <span
                            className="absolute w-[6px] h-[6px] bg-brand rounded-full  -top-1  md:top-1 left-[90%] md:left-[25%]  "></span>
                        <CartIcon className={`w-[17px] sm:w-[22px] md:w-[26px] lg:w-[28px]`}/>
                        <div className="hidden sm:block">
                            <p className="font-montserrat text-primary text-[13px] lg:text-base leading-[24px]">{t("Cart")}</p>
                            <h3 className="flex gap-1 font-bold text-[12px] lg:text-base leading-[24px]  ">$ <span>150,00</span>
                            </h3>
                        </div>
                    </div>

                    {/* user */}
                    <div

                        onClick={() => handelAccount()}
                        className=" cursor-pointer  flex items-center gap-3 ml-5 relative after:content-[''] after:absolute after:w-[1px] after:h-[50%] after:bg-tertary after:top-1/2 after:-left-4.5 lg:after:-left-[50%] after:-translate-y-[50%]">
                        <UserIcon className={`w-[17px] sm:w-[22px] md:w-[26px] lg:w-[28px]`}/>
                        <div className="hidden sm:block">
                            <p className="font-montserrat text-primary text-[13px] lg:text-base leading-[24px]">{t("User")}</p>
                            <h3 className="flex gap-1 font-bold text-[12px] lg:text-base leading-[24px]  ">Account</h3>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default HeaderMiddle;
