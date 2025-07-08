import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { lang } from "../../../redux/slices/languageSlice.js";

// components
import Container from "../Container.jsx";
import { Link } from "react-router";

// icons
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ArrowDown from "../../../assets/icons/ArrowDown.jsx";
import CallOutline from "../../../assets/icons/CallOutline.jsx";
import LocationOutline from "../../../assets/icons/LocationOutline.jsx";
import ToggleMenu from "../../../helpers/toggleMenu.js";
import Selection from "../Selection.jsx";

function HeaderTop() {
  // for currency
  const correncies = [
    "USD",
    "BDT",
    "EUR",
    "GBP",
    "CAD",
    "AUD",
    "JPY",
    "CNY",
    "INR",
    "RUB",
    "BRL",
    "MXN",
    "NZD",
    "ZAR",
    "TRY",
    "HKD",
    "SGD",
    "THB",
    "IDR",
    "TWD",
    "MYR",
    "PHP",
    "VND",
  ];  

  // for languages
  const countries = [
    {
      name: "English",
      code: "US",
      unicode: "U+1F1FA U+1F1F8",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg",
      language: "en",
    },
    {
      name: "Bangla",
      code: "BD",
      unicode: "U+1F1E7 U+1F1E9",
      image:
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/BD.svg",
      language: "bn",
    },
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(''); 
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); 
  const dispatch = useDispatch();

  // i18next language change
  useEffect(() => {
    dispatch(lang(selectedCountry));
  }, [selectedCountry]);

  

  return (
    <div className={` border-b border-tertary py-3 lg:py-[22px]  `}>
      <Container>
        <div className={`flex justify-between items-center `}>
          {/*  header top contact  */}
          <div className="flex lg:gap-12 sm:gap-8 gap-4 relative after:content-[] after:absolute md:after:w-[1px] sm:after:h-[20px] lg:after:h-[32px]  sm:after:bg-tertary after:top-1/2 after:left-[61.5%] after:-translate-y-[50%]">
            {/* location */}
            <Link
              to="https://maps.app.goo.gl/s3CtZ3oZhrHXWLBy9"
              target={`_blank`}
              className="flex items-center gap-2 font-montserrat sm:text-[11px] md:text-[14px] leading-[20px] text-20  "
            >
              <LocationOutline />
              <span className={`hidden  sm:inline-block`}>
                123 Main Street, Anytown USA
              </span>
            </Link>

            {/* phone */}
            <Link
              to="tel:+1 (555) 123-4567"
              className="flex items-center gap-2 font-montserrat sm:text-[11px] md:text-[14px] leading-[20px] text-20  "
            >
              <CallOutline />
              <span className={`hidden sm:inline-block`}>
                +1 (555) 123-4567{" "}
              </span>
            </Link>
          </div>

          {/*  currency & social & language  */}
          <div className="flex items-center gap-5 lg:gap-0 ">
            {/* currency */}
            <Selection modalPosition={`top-9 -left-[100px] `} seledtedTxtStyle={`text-[12px] sm:text-[14px] font-montserrat leading-5  `} items={[...correncies]} setValue={setSelectedCurrency} className={`lg:mr-12`}  />

            {/*  language  */}
            <Selection modalPosition={`top-9 left-0`} seledtedTxtStyle={`text-[12px] sm:text-[14px] font-montserrat leading-5  `} items={[...countries]} setValue={setSelectedCountry} icon={true} className={`lg:mr-14  lg:w-[112px] cursor-pointer flex relative after:content-[''] md:after:w-[1px] after:h-[20px] lg:after:h-[32px] after:bg-tertary after:absolute after:left-[-10px] lg:after:left-[-27px] after:top-[0px] lg:after:top-[-5px]     `}  />
            
            {/*  socials  */}
            <ul
              className={`flex gap-2.5 md:gap-4.5 lg:gap-6 text-primary relative after:content-[''] md:after:w-[1px] after:h-[20px] lg:after:h-[32px] after:bg-tertary after:absolute after:left-[-10px] lg:after:-left-[24px] after:top-[0px] lg:after:top-[-5px] `}
            >
              <li>
                <Link to={`https://www.facebook.com/`} target={`_blank`}>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to={`https://x.com/`} target={`_blank`}>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to={`https://www.instagram.com/`} target={`_blank`}>
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeaderTop;
