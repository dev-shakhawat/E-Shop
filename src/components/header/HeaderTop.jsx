import React from 'react';


// components
import Container from "../Container.jsx";
import {Link} from "react-router";


// icons
import {IoCallOutline, IoLocationOutline} from "react-icons/io5";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

function HeaderTop() {
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
                    <div className="flex">

                        {/* currency */}
                        <select name="currency" id="currency">
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="EUR">EUR</option>
                        </select>

                        {/*  language  */}
                        <select name="language" id="language">
                            <option value="English">English</option>
                            <option value="Arabic">Arabic</option>
                            <option value="Bangla">Bangla</option>
                        </select>

                        {/*  socials  */}
                        <ul>
                            <li><Link to={`#`}><FaFacebookF/></Link></li>
                            <li><Link to={`#`}><FaTwitter/></Link></li>
                            <li><Link to={`#`}><FaInstagram/></Link></li>
                        </ul>
                    </div>

                </div>
            </Container>
        </div>
    );
}

export default HeaderTop;