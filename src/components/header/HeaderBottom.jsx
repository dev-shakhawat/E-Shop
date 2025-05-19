import React from 'react';
import {useTranslation} from "react-i18next";
import Container from "../common/Container.jsx";
import {Link} from "react-router";


// icons
import {HiOutlineMenu} from "react-icons/hi";
import {IoIosArrowDown} from "react-icons/io";
import List from "../common/List.jsx";
import {useSelector} from "react-redux";


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
    console.log(currentCountry)

    const {t} = useTranslation();

    return (
        <div className={`bg-brand py-6  `}>
            <Container>
                <div className="flex justify-between  ">
                    {/* left */}
                    <ul className={`flex gap-x-20`}>
                        <li className={`cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold `}>
                            <Link to={`#`} className={`flex items-center gap-x-4`}><HiOutlineMenu
                                className={`text-2xl`}/><span>{t("All_Catagories")}</span></Link>
                        </li>
                        <li className={`cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold `}>
                            <Link to={`#`}><span>{t("Products")}</span></Link>
                        </li>
                        <li className={`cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold `}>
                            <Link to={`#`}>{t("Blog")}</Link>
                        </li>
                        <li className={`cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold `}>
                            <Link to={`#`}>{t("Contact")}</Link>
                        </li>

                    </ul>


                    {/*  right  */}
                    <ul className={`flex gap-x-20`}>
                        <li className={`cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold `}>
                            <Link to={`#`}><span>{t("LIMITED_SALE")}</span>👋</Link>
                        </li>
                        <li className={`cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold `}>
                            <Link to={`#`}>{t("Best_Seller")}</Link>
                        </li>
                        <li className={`cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold `}>
                            <Link to={`#`}>{t("New_Arrival")}</Link>
                        </li>

                    </ul>


                </div>
            </Container>
        </div>
    );
}

export default HeaderBottom;
