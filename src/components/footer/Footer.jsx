import React from 'react';
import FooterTop from "./FooterTop.jsx";
import FooterBottom from "./FooterBottom.jsx";
import Subscribe from "./Subscribe.jsx";    
import { useLocation } from 'react-router';

// function 
import {isFootBlack} from "../../helpers/isFootBlack";

function Footer() {

    const location = useLocation();
    console.log(isFootBlack(location.pathname));
    
    return (
        <div>
            <FooterTop/>

            <div className={`${isFootBlack(location.pathname) ? "bg-[#303030] mt-20 " : " "} pt-20 `}>
              {isFootBlack(location.pathname) && <Subscribe  />}
              <FooterBottom isblack={isFootBlack(location.pathname)} />
            </div>

        </div>
    );
}

export default Footer;
