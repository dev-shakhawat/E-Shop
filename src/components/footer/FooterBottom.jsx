import React from 'react';
import Container from "../common/Container.jsx";
import List from "../common/List.jsx";
import Call from "../../assets/icons/Call.jsx";
import Mail from "../../assets/icons/Mail.jsx";
import Location from "../../assets/icons/Location.jsx";
import Visa from "../../assets/icons/Visa.jsx";
import ApplePay from "../../assets/icons/ApplePay.jsx";
import MasterCard from "../../assets/icons/MasterCard.jsx";
import Paypal from "../../assets/icons/Paypal.jsx";
import {Link} from "react-router";

function FooterBottom() {

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
        <div className={`mt-[100px]`}>
            <Container>
                <div className="flex">
                    {/*  logo/contact  */}
                    <div className="flex flex-col justify-between mr-[150px] ">
                        <img src="/images/logo.png" alt="logo" className={`max-w-[129px]`}/>
                        <List arr={footContact}
                              liststyle={`relative pl-8 cursor-pointer text-primary font-montserrat text-base leading-[24px]  `}
                              boxstyle={`flex flex-col gap-3   `}/>
                    </div>

                    {/*  links  */}
                    <div className="mr-[96px]">
                        <h3 className={`font-poppins font-semibold text-xl leading-[30px] text-primary pb-6 `}>Links</h3>
                        <List arr={footLinks} liststyle={`text-primary font-montserrat text-base leading-[24px]`}
                              boxstyle={`flex flex-col gap-3`}/>
                    </div>

                    {/*  supports  */}
                    <div className="mr-[96px]">
                        <h3 className={`font-poppins font-semibold text-xl leading-[30px] text-primary pb-6 `}>Supports</h3>
                        <List arr={footSupports} liststyle={`text-primary font-montserrat text-base leading-[24px]`}
                              boxstyle={`flex flex-col gap-3`}/>

                    </div>

                    {/*  catagories  */}
                    <div className="mr-20">
                        <h3 className={`font-poppins font-semibold text-xl leading-[30px] text-primary pb-6 `}>Catagories</h3>
                        <List arr={footCatagories} liststyle={`text-primary font-montserrat text-base leading-[24px]`}
                              boxstyle={`flex flex-col gap-3`}/>
                    </div>

                    {/*  payments  */}
                    <div className="">
                        <h3 className={`font-poppins font-semibold text-xl leading-[30px] text-primary pb-6 `}>Payments</h3>
                        <div className="flex gap-7 ">
                            <Visa/>
                            <MasterCard/>
                            <ApplePay/>
                            <Paypal/>
                        </div>
                        <h3 className={`font-poppins font-semibold text-xl leading-[30px] text-primary pb-6 mt-[73px] `}>Follow
                            Us</h3>
                        <List arr={footFollow} liststyle={`text-primary font-montserrat text-base leading-[24px]`}
                              boxstyle={`flex flex-col gap-3`}/>
                    </div>
                </div>


                {/*  copyright part  */}
                <div className="flex justify-between mt-20 border-t border-secondery/50 pt-2 pb-20  ">
                    <p className="font-montserrat text-sm text-primary leading-5  ">Copyright © 2023 <Link
                        to={`/`}>E-Shop</Link>.
                        All Rights
                        Reserved.</p>

                    <p className="flex gap-5 font-montserrat text-sm text-primary leading-5 ">
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
