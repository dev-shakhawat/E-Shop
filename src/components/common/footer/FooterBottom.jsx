import React from 'react';
import Container from "../Container.jsx";
import List from "../List.jsx";
import Call from "../../../assets/icons/Call.jsx";
import Mail from "../../../assets/icons/Mail.jsx";
import Location from "../../../assets/icons/Location.jsx";
import Visa from "../../../assets/icons/Visa.jsx";
import ApplePay from "../../../assets/icons/ApplePay.jsx";
import MasterCard from "../../../assets/icons/MasterCard.jsx";
import Paypal from "../../../assets/icons/Paypal.jsx";
import {Link} from "react-router";

function FooterBottom({isblack}) {


    const footContact = [
        {link: "tel:+1 (555) 123-4567", icon: <Call style={`absolute top-0 left-0  `}/>, text: "+1 (555) 123-4567"},
        {
            link: "mailto:information@eshop.com",
            icon: <Mail style={`absolute top-0 left-0  `}/>,
            text: "information@eshop.com"
        },
        {
            link: "https://maps.app.goo.gl/ZaayMQo7nqFCxx7q6",
            icon: <Location style={`absolute top-0 left-0  `}/>,
            text: "123 Main Street, Suite 105, Anytown USA"
        },
    ]

    const footLinks = [
        {text: "Products List", link: "/products"},
        {text: "Order Tracking", link: "/#"},
        {text: "Products Guide", link: "#"},
        {text: "Shopping Cart", link: "/carts"},
        {text: "Tech Blog", link: "/#"},
    ]

    const footSupports = [
        {text: "About Us", link: ""},
        {text: "Privacy Policy", link: ""},
        {text: "Return Policy", link: ""},
        {text: "Help Centre", link: ""},
        {text: "Store Locations", link: ""},
        {text: "Careers", link: ""},
    ]

    const footCatagories = [
        {text: "Computers & Tablets", link: "/#"},
        {text: "Mobile Phones & Accessories", link: "/#"},
        {text: "TV & Home Theater", link: "/#"},
        {text: "Audio & Headphones", link: "/#"},
        {text: "Cameras & Camcorders", link: "/#"},
        {text: "Gaming Equipment", link: "/#"},
        {text: "Home Appliances", link: "/#"},
    ]

    const footFollow = [
        {text: "Twitter", link: "https://x.com/"},
        {text: "Instagram", link: "https://www.instagram.com/"},
        {text: "Facebook", link: "https://www.facebook.com/"},
    ]

    return (
        <div className={``}>

            <Container>
                <div className="flex flex-wrap xl:flex-nowrap  ">
                    {/*  logo/contact  */}
                    <div className={`${isblack ? 'flex-col-reverse' : 'flex-col'} flex  justify-between  sm:basis-1/2 md:basis-1/3 lg:basis-1/4 `}>
                        <img src={isblack ? '/images/logowhite.png' : '/images/logo.png'} alt="logo" className={`max-w-[129px]`}/>

                        <div className="mt-7 md:mt-0 xl:min-w-[450px] ">
                            {isblack &&  <h3 className={`footerHead ${isblack ? 'text-white' : 'text-primary'} `}>Contact us</h3>}
                            <List arr={footContact}
                                  liststyle={`${isblack ? 'text-white' : 'text-primary'} hover:text-brand duration-300 relative pl-8 cursor-pointer  font-montserrat text-[13px] lg:text-base lg:leading-[24px]  `}
                                  boxstyle={`flex flex-col gap-1.5 lg:gap-3    `}/>
                        </div>
                    </div>

                    {/*  links  */}
                    <div className="mt-10 sm:mt-0 basis-1/2 md:basis-1/3 lg:basis-1/4  ">
                        <h3 className={`footerHead ${isblack ? 'text-white' : 'text-primary'} `}>Links</h3>
                        <List arr={footLinks}
                              liststyle={`footlinks ${isblack ? 'text-white' : 'text-primary'} hover:text-brand duration-200 `}
                              boxstyle={`flex flex-col gap-1.5 lg:gap-3`}/>
                    </div>

                    {/*  supports  */}
                    <div className=" mt-10 basis-1/2  md:basis-1/3 md:mt-0 lg:basis-1/4 ">
                        <h3 className={`footerHead ${isblack ? 'text-white' : 'text-primary'} `}>Supports</h3>
                        <List arr={footSupports}
                              liststyle={`footlinks ${isblack ? 'text-white' : 'text-primary'} hover:text-brand duration-200`}
                              boxstyle={`flex flex-col gap-1.5 lg:gap-3`}/>

                    </div>

                    {/*  catagories  */}
                    <div className="lg:justify-self-end lggap-0 gap-5 mt-10 lg:mt-0 basis-1/1 sm:basis-1/2 lg:basis-1/4   ">
                        <h3 className={`footerHead ${isblack ? 'text-white' : 'text-primary'} `}>Catagories</h3>
                        <List arr={footCatagories}
                              liststyle={`footlinks ${isblack ? 'text-white' : 'text-primary'} hover:text-brand duration-200`}
                              boxstyle={`flex flex-col gap-1.5 lg:gap-3`}/>
                    </div>

                    {/*  payments  */}
                    <div className="2xl:ml-20 mt-10 xl:mt-0 lg:basis-0  ">
                        <h3 className={`footerHead ${isblack ? 'text-white' : 'text-primary'} `}>Payments</h3>
                        <Link to={`#`} className="flex gap-7 ">
                            <Visa/>
                            <MasterCard/>
                            <ApplePay/>
                            <Paypal/>
                        </Link>
                        <h3 className={`font-poppins font-semibold text-xl leading-[30px] ${isblack ? 'text-white' : 'text-primary'} pb-3  lg:pb-6 mt-10 lg:mt-[73px] `}>Follow
                            Us</h3>
                        <List arr={footFollow}
                              liststyle={`${isblack ? 'text-white' : 'text-primary'} hover:text-brand duration-200 font-montserrat text-[13px] lg:text-base lg:leading-[24px]`}
                              boxstyle={`flex flex-col gap-1.5 lg:gap-3`}/>
                    </div>
                </div>


                {/*  copyright part  */}
                <div
                    className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between mt-5 sm:mt-0 md:mt-15 lg:mt-20 border-t border-secondery/50 pt-2 pb-5 sm:pb-10 md:pb-15 lg:pb-20  ">
                    <p className={`font-montserrat text-xs md:text-sm text-primary leading-5 ${isblack ? 'text-white' : 'text-primary'} `}>Copyright © 2023 <Link
                        to={`/`}>E-Shop</Link>.
                        All Rights
                        Reserved.</p>

                    <p className={`flex gap-5 font-montserrat text-xs md:text-sm text-primary leading-5 ${isblack ? 'text-white' : 'text-primary'}`}>
                        <Link to={`/#`}>Privacy Policy</Link>
                        <Link to={`/#`}
                              className={`relative after:content-[''] after:w-[1px] after:h-5/6 after:bg-secondery after:absolute after:top-0.5 after:left-0 after:-translate-x-2 `}>Terms
                            &
                            Conditions</Link>
                        <Link to={`/#`}
                              className={`relative after:content-[''] after:w-[1px] after:h-5/6 after:bg-secondery after:absolute after:top-0.5 after:left-0 after:-translate-x-2 `}>Sitemap</Link>
                    </p>
                </div>
            </Container>
        </div>
    );
}

export default FooterBottom;
