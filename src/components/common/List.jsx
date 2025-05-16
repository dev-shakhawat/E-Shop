import React from 'react';
import {Link} from "react-router";

function List({arr, boxstyle, liststyle}) {

    const [isDropdown, setIsDropdown] = React.useState(false);
    const dropdownRef = React.useRef(null);
    

    React.useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setIsDropdown(false);
        };
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [])

    return (
        <ul className={boxstyle}>
            {arr.map((item, index) => <li key={index} ref={item.dropdown && dropdownRef}
                                          className={`${item.dropdown ? "relative" : ""}`}
                                          onClick={() => item.dropdown && setIsDropdown(!isDropdown)}>
                <Link className={`${liststyle}   `}
                      to={item.link}>{item.text} {item.icon}
                </Link>
                {item.dropdown && isDropdown &&
                    <ul className={`absolute top-7 left-0 z-[1] w-[150px] bg-brand border border-tertary rounded-md overflow-hidden `}>
                        {item.dropdown.map((item, index) => <li key={index}
                                                                className={`px-2 py-2 hover:bg-tertary/50  text-center font-montserrat text-white text-base leading-[24px] font-bold  `}>
                            <Link to={item.link}>{item.text}</Link></li>)}
                    </ul>}
            </li>)}
        </ul>
    );
}

export default List;
