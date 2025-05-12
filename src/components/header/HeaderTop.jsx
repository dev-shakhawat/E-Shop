import React, {useState} from 'react';


// components
import Container from "../Container.jsx";
import {Link} from "react-router";


// icons
import {IoCallOutline, IoLocationOutline} from "react-icons/io5";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

function HeaderTop() {
    const countries = [
        {name: 'United States', code: 'US', flag: 'https://flagcdn.com/16x12/us.png'},
        {name: 'Canada', code: 'CA', flag: 'https://flagcdn.com/16x12/ca.png'},
        {name: 'United Kingdom', code: 'GB', flag: 'https://flagcdn.com/16x12/gb.png'},
        {name: 'Australia', code: 'AU', flag: 'https://flagcdn.com/16x12/au.png'},
        {name: 'Germany', code: 'DE', flag: 'https://flagcdn.com/16x12/de.png'},
        {name: 'France', code: 'FR', flag: 'https://flagcdn.com/16x12/fr.png'},
    ]

    const [language, setLanguage] = useState("US")

    return (
        <div className={` border-b border-tertary py-[22px]  `}>
            <Container>
                <div className={`flex justify-between items-center `}>

                    {/*  header top contact  */}
                    <div
                        className="flex gap-12 relative after:content-[] after:absolute after:w-[1px] after:h-[90%] after:bg-tertary after:top-1/2 after:left-[61.5%] after:-translate-y-[50%]">
                        {/* location */}
                        <Link to="https://maps.app.goo.gl/s3CtZ3oZhrHXWLBy9" target={`_blank`}
                              className="flex items-center gap-2 font-montserrat text-[14px] leading-[20px] text-20  "><IoLocationOutline/><span>123 Main Street, Anytown USA</span></Link>

                        {/* phone */}
                        <Link to="tel:+1 (555) 123-4567"
                              className="flex items-center gap-2 font-montserrat text-[14px] leading-[20px] text-20  "><IoCallOutline/><span>+1 (555) 123-4567 </span></Link>
                    </div>

                    {/*  currency & social & language  */}
                    <div className="flex gap-12  ">

                        {/* currency */}
                        <select name="currency" id="currency" className={`commonpera uppercase pr-2 outline-none  `}>
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="EUR">EUR</option>
                        </select>

                        {/*  language  */}
                        <div
                            className=" w-[112px]  flex relative after:content-[''] after:w-[1px] after:h-[150%] after:bg-tertary after:absolute after:left-[-27px] after:top-[-5px]     ">
                            <img src={countries.find((item) => item.code === language)?.flag} alt="flag"
                                 className={` w-[27px] h-[15px] `}/>
                            <select name="language" id="language"
                                    className={`commonpera pr-2 outline-none truncate whitespace-nowrap overflow-hidden w-[90px] `}
                                    onChange={(e) => setLanguage(e.target.value)}>
                                {countries.map((item) => <option key={item.code}
                                                                 value={item.code}>{item.name} </option>)}
                            </select>
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
