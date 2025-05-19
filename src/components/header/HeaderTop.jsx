import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {lang} from "../../redux/slices/languageSlice.js";


// components
import Container from "../common/Container.jsx";
import {Link} from "react-router";


// icons
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import ArrowDown from "../../assets/icons/ArrowDown.jsx";
import CallOutline from "../../assets/icons/CallOutline.jsx";
import LocationOutline from "../../assets/icons/LocationOutline.jsx";

function HeaderTop() {

    const countries = [
        {
            name: "English (US)",
            code: "US",
            unicode: "U+1F1FA U+1F1F8",
            image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
            language: "en"
        },
        {
            name: "Bangla (bd)",
            code: "BD",
            unicode: "U+1F1E7 U+1F1E9",
            image: "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
            language: "bn"
        },
    ]
    const [isDropdown, setIsDropdown] = React.useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const countryRef = React.useRef(null);
    const dispatch = useDispatch();


    React.useEffect(() => {

        //  for dropdown show/hide
        const handleOutsideClick = (event) => {
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setIsDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };

    }, [])


    // i18next language change
    useEffect(() => {
        dispatch(lang(selectedCountry))
    }, [selectedCountry]);


    return (
        <div className={` border-b border-tertary py-[22px]  `}>
            <Container>
                <div className={`flex justify-between items-center `}>

                    {/*  header top contact  */}
                    <div
                        className="flex gap-12 relative after:content-[] after:absolute after:w-[1px] after:h-[32px] after:bg-tertary after:top-1/2 after:left-[61.5%] after:-translate-y-[50%]">
                        {/* location */}
                        <Link to="https://maps.app.goo.gl/s3CtZ3oZhrHXWLBy9" target={`_blank`}
                              className="flex items-center gap-2 font-montserrat text-[14px] leading-[20px] text-20  "><LocationOutline/><span>123 Main Street, Anytown USA</span></Link>

                        {/* phone */}
                        <Link to="tel:+1 (555) 123-4567"
                              className="flex items-center gap-2 font-montserrat text-[14px] leading-[20px] text-20  "><CallOutline/><span>+1 (555) 123-4567 </span></Link>
                    </div>

                    {/*  currency & social & language  */}
                    <div className="flex gap-12  ">

                        {/* currency */}
                        <select name="currency" id="currency"
                                className={`font-montserrat text-primary text-[14px] leading-[20px] uppercase pr-2 outline-none cursor-pointer `}>
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="EUR">EUR</option>
                        </select>

                        {/*  language  */}
                        <div
                            className="mr-4 w-[112px] cursor-pointer flex relative after:content-[''] after:w-[1px] after:h-[32px] after:bg-tertary after:absolute after:left-[-27px] after:top-[-5px]     ">

                            <div className="flex relative  " onClick={() => setIsDropdown(!isDropdown)}>
                                <div className=" flex items-center ">
                                    <img src={selectedCountry?.image} alt={selectedCountry?.name}
                                         className={`min-w-[25px] h-[18px] object-cover  `}/>
                                    <span
                                        className="mx-2 w-[70px] truncate whitespace-nowrap overflow-hidden ">{selectedCountry?.name}</span>
                                    <ArrowDown/>
                                </div>

                                {/*  all language dropdown  */}
                                {isDropdown &&
                                    <div
                                        ref={countryRef}
                                        className="flex flex-col gap-1   absolute top-8 -left-7 z-[1] bg-white  rounded-md w-[180px] max-h-[400px] h-fit   border border-tertary ">
                                        <div className={``}>
                                            {countries.length === 0 ?
                                                <p className={`font-montserrat text-primary text-[14px] leading-[20px]`}>No
                                                    Country Found</p> :
                                                countries.map((item) => <div

                                                    onClick={() => setSelectedCountry(item)}
                                                    key={item.unicode}
                                                    className={`flex items-center px-2 py-1 gap-3 hover:bg-tertary/50   `}>
                                                    <img
                                                        className={`w-[25px] h-[15px] object-cover  `}
                                                        src={item.image}
                                                        alt={item.name}/>
                                                    <span
                                                        className={`w-[150px] truncate whitespace-nowrap overflow-hidden`}>{item.name}</span>

                                                </div>)}
                                        </div>
                                    </div>
                                }
                            </div>

                        </div>

                        {/*  socials  */}
                        <ul className={`flex gap-6 text-primary relative after:content-[''] after:w-[1px] after:h-[150%] after:bg-tertary after:absolute after:left-[-27px] after:top-[-5px]`}>
                            <li><Link to={`https://www.facebook.com/`} target={`_blank`}><FaFacebookF/></Link></li>
                            <li><Link to={`https://x.com/`} target={`_blank`}><FaTwitter/></Link></li>
                            <li><Link to={`https://www.instagram.com/`} target={`_blank`}><FaInstagram/></Link></li>
                        </ul>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default HeaderTop;
