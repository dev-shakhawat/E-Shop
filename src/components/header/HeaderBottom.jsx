import React from 'react';
import Container from "../Container.jsx";


// icons
import {HiOutlineMenu} from "react-icons/hi";
import {IoIosArrowDown} from "react-icons/io";
import List from "../common/List.jsx";

const leftNavList = [
    {icon: <IoIosArrowDown/>, text: "Products"},
    {icon: null, text: "Blog"},
    {icon: null, text: "Contact"}]

const rightNavList = [
    {icon: null, text: "LIMITED SALE 👋🏻"},
    {icon: null, text: "Best Seller"},
    {icon: null, text: "New Arrival"}]

function HeaderBottom() {
    return (
        <div className={`bg-brand py-6  `}>
            <Container>
                <div className="flex justify-between  ">
                    {/* left */}
                    <div className="flex">
                        <button
                            className="flex items-center gap-x-4 font-montserrat text-white text-base leading-[24px] font-bold  "
                            type={`button`}>
                            <HiOutlineMenu className={`text-2xl`}/><span>All Catgories</span>
                        </button>

                        <List arr={leftNavList} boxstyle={`flex gap-20 ml-20  `}
                              liststyle={`flex cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold  `}/>
                    </div>

                    {/*  right  */}
                    <List arr={rightNavList} boxstyle={`flex gap-20 `}
                          liststyle={`flex cursor-pointer items-center gap-2 font-montserrat text-white text-base leading-[24px] font-bold  `}/>

                </div>
            </Container>
        </div>
    );
}

export default HeaderBottom;
