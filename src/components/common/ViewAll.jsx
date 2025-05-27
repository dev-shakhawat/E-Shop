import React from 'react';
import {Link} from "react-router";
import ArrowRightLong from "../../assets/icons/ArrowRightLong.jsx";

function ViewAll({to = "#"}) {
    return (
        <Link to={to}
              className={`font-montserrat font-semibold lg:font-bold text-[12px] md:text-[14px] lg:text-base leading-[24px] text-brand flex items-center gap-1.5 md:gap-2.5 lg:gap-4`}>
            <span>View All</span>
            <ArrowRightLong/>
        </Link>
    );
}

export default ViewAll;
