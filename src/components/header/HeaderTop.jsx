import React, {useState} from 'react';

import axios from 'axios';


// components
import Container from "../common/Container.jsx";
import {Link} from "react-router";


// icons
import {IoCallOutline, IoLocationOutline} from "react-icons/io5";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";
import ArrowDown from "../../icons/ArrowDown.jsx";

function HeaderTop() {

    const [isDropdown, setIsDropdown] = React.useState(false);
    const [countries, setCountries] = React.useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null)
    const countryRef = React.useRef(null);
    const [searchVal, setSearchVal] = React.useState("");
    const [searchCountries, setSearchCountries] = React.useState(countries);

    React.useEffect(() => {

        // for country data fetch
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json');
                setCountries(response.data)
                setSearchCountries(response.data)
                setSelectedCountry(response.data[0])
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries()


        //  for dropdown
        const handleOutsideClick = (event) => {
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setIsDropdown(false);
                setSearchVal("")
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };


    }, [])


    // search country
    const handleSearchCountry = (e) => {
        const searchtext = e.target.value.toLowerCase();
        setSearchVal(searchtext);

        const filteredcountries = countries.filter(country => country.name.toLowerCase().includes(searchtext));

        if (filteredcountries) {
            setSearchCountries(filteredcountries);
        } else {
            setSearchCountries([{name: "No Country Found", code: null, image: null}])
        }

    };

    const handelCountryset = (item) => {
        setSelectedCountry(item);
        setSearchVal("");
    }
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
                        <select name="currency" id="currency"
                                className={`font-montserrat text-primary text-[14px] leading-[20px] uppercase pr-2 outline-none cursor-pointer `}>
                            <option value="USD">USD</option>
                            <option value="BDT">BDT</option>
                            <option value="EUR">EUR</option>
                        </select>

                        {/*  language  */}
                        <div
                            className=" w-[112px] cursor-pointer flex relative after:content-[''] after:w-[1px] after:h-[150%] after:bg-tertary after:absolute after:left-[-27px] after:top-[-5px]     ">

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
                                        className="flex flex-col gap-1 pt-7 absolute top-8 -left-7 z-[1] bg-white pl-2 py-2 rounded-md w-[180px] h-[400px]   border border-tertary ">
                                        <input type="text" placeholder={`search`}
                                               className={`absolute top-0 left-0 w-full border-b border-tertary/50 outline-none px-2 `}
                                               onClick={(e) => e.stopPropagation()}
                                               onChange={(e) => handleSearchCountry(e)}
                                               value={searchVal}
                                        />
                                        <div className={`overflow-y-scroll overflow-x-hidden`}>
                                            {searchCountries.length === 0 ?
                                                <p className={`font-montserrat text-primary text-[14px] leading-[20px]`}>No
                                                    Country Found</p> :
                                                searchCountries.map((item) => <div

                                                    onClick={() => handelCountryset(item)}
                                                    key={item.unicode}
                                                    className={`flex items-center px-1 gap-2 hover:bg-tertary/50   `}>
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
