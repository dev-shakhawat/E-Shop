import React, { useState } from 'react';
import FooterTop from "./FooterTop.jsx";
import FooterBottom from "./FooterBottom.jsx";
import Subscribe from "./Subscribe.jsx";    
import { useLocation } from 'react-router';

// function 
import {isFootBlack} from "../../../helpers/isFootBlack.js";

function Footer() {

    const location = useLocation();
    
    
    const noFooteTop = ["/carts","/register","/account","/blog","/blog-details","/contact" ];
    const isFootTop = noFooteTop.some(basePath => location.pathname.startsWith(basePath))
    
    return (
        <div>
            {!isFootTop && <FooterTop/>}

            <div className={`${isFootBlack(location.pathname) ? "bg-[#303030] " : " "} 2xl:pt-20 pt-10 md:pt-12 lg:pt-15 xl:pt-17 `}>
              {isFootBlack(location.pathname) && <Subscribe  />}
              <FooterBottom isblack={isFootBlack(location.pathname)} />
            </div>

        </div>
    );
}

export default Footer;
