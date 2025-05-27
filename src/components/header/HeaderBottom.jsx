import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from "react-i18next";
import Container from "../common/Container.jsx";
import {Link} from "react-router";


// icons
import {HiOutlineMenu} from "react-icons/hi";
import {IoIosArrowDown} from "react-icons/io";
import {useSelector} from "react-redux";
import ArrowDown from "../../assets/icons/ArrowDown.jsx";
import {IoCloseCircleOutline} from "react-icons/io5";


const leftNavList = [
    {
        icon: <IoIosArrowDown/>,
        text: "Products",
        link: "#",
        dropdown: [
            {text: "ProductCart 1", link: "/#"},
            {text: "ProductCart 2", link: "/#"},
            {text: "ProductCart 3", link: "/#"},
            {text: "ProductCart 4", link: "/#"},],
    },
    {icon: null, text: "Blog", link: "/blog"},
    {icon: null, text: "Contact", link: "/contact"}]

const rightNavList = [
    {icon: null, text: "LIMITED SALE 👋🏻", link: "#"},
    {icon: null, text: "Best Seller", link: "#"},
    {icon: null, text: "New Arrival", link: "#"}]

function HeaderBottom() {

    const currentCountry = useSelector((state) => state.language.value);

    const {t} = useTranslation();

    const [isdropdown, setIsdropdown] = useState(false)
    const dropdownRef = useRef(null);

    useEffect(() => {

        //  for dropdown show/hide
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsdropdown(false);
            } else {
                // setIsdropdown(true)
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };

    }, [])

    //  for mobile modal
    const [isModal, setIsModal] = useState(false)
    const modalRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModal(false);
            } else {
                // setIsdropdown(true)
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };

    }, [])

    return (
        <div className={`bg-brand py-6  `}>
            <Container>
                <div className="flex justify-between  ">
                    {/* left */}
                    <ul className={`flex gap-5 md:gap-x-10 lg:gap-x-15 xl:gap-x-20`}>
                        <li className={`navLink `}>
                            <Link to={`#`} className={`flex items-center gap-2 md:gap-x-4`}><HiOutlineMenu
                                className={`md:text-2xl text-lg`}/><span>{t("All_Catagories")}</span></Link>
                        </li>
                        <li onClick={() => setIsdropdown(!isdropdown)}
                            className={`navLink relative `}>
                            <Link to={`#`}><span>{t("Products")}</span></Link> <ArrowDown color={`white`}/>

                            {/*  dropdown   */}
                            {isdropdown &&
                                <ul ref={dropdownRef} onClick={(e) => e.stopPropagation()}
                                    className={`absolute top-8 left-0 bg-white w-[170px] rounded-md border border-tertary flex flex-col gap-1  `}>
                                    <li className={`px-2 py-1.5 text-primary font-normal font-montserrat text-base hover:bg-tertary/50`}>
                                        <Link
                                            to={`/allproduct`}>All Products</Link></li>
                                    <li className={`px-2 py-1.5 text-primary font-normal font-montserrat text-base hover:bg-tertary/50`}>
                                        <Link
                                            to={`#`}>Featured Products</Link></li>
                                    <li className={`px-2 py-1.5 text-primary font-normal font-montserrat text-base hover:bg-tertary/50`}>
                                        <Link
                                            to={`#`}>Best Seles</Link></li>
                                    <li className={`px-2 py-1.5 text-primary font-normal font-montserrat text-base hover:bg-tertary/50`}>
                                        <Link
                                            to={`#`}>New Products</Link></li>
                                    <li className={`px-2 py-1.5 text-primary font-normal font-montserrat text-base hover:bg-tertary/50`}>
                                        <Link
                                            to={`#`}>Spring Sales</Link></li>
                                </ul>
                            }
                        </li>
                        <li className={`navLink `}>
                            <Link to={`#`}>{t("Blog")}</Link>
                        </li>
                        <li className={`navLink `}>
                            <Link to={`#`}>{t("Contact")}</Link>
                        </li>

                    </ul>


                    {/*  right  */}
                    <ul className={`md:flex gap-5 md:gap-x-10 lg:gap-x-15 xl:gap-x-20  hidden`}>
                        <li className={`navLink `}>
                            <Link to={`#`}><span>{t("LIMITED_SALE")}</span>👋</Link>
                        </li>
                        <li className={`navLink `}>
                            <Link to={`#`}>{t("Best_Seller")}</Link>
                        </li>
                        <li className={`navLink `}>
                            <Link to={`#`}>{t("New_Arrival")}</Link>
                        </li>

                    </ul>

                    {/*  for mobile modal  */}

                    <HiOutlineMenu className={` text-lg text-white cursor-pointer md:hidden `}
                                   onClick={() => setIsModal(!isModal)}/>
                    {isModal &&
                        <div className="fixed top-0 right-0 bg-tertary/60 shadow-2xl w-full h-screen  md:hidden ">

                            <div className="bg-white ml-auto w-1/2 h-screen relative">
                                <IoCloseCircleOutline
                                    onClick={() => setIsModal(!isModal)}
                                    className={`absolute top-3 right-3 text-2xl text-brand cursor-pointer `}/>

                                <ul ref={modalRef}
                                    className={` absolute top-5 right-0 pt-10 w-full h-screen p-2 flex flex-col gap-2 `}>
                                    <li className={`font-montserrat font-semibold text-[12px] text-primary `}>
                                        <Link to={`#`}><span>{t("LIMITED_SALE")}</span>👋</Link>
                                    </li>
                                    <li className={`font-montserrat font-semibold text-[12px] text-primary `}>
                                        <Link to={`#`}>{t("Best_Seller")}</Link>
                                    </li>
                                    <li className={`font-montserrat font-semibold text-[12px] text-primary `}>
                                        <Link to={`#`}>{t("New_Arrival")}</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    }

                </div>
            </Container>
        </div>
    );
}

export default HeaderBottom;
