import React from 'react';
import {Link} from "react-router";
import ArrowRightLong from "../../assets/icons/ArrowRightLong.jsx";

function ViewAll({to = "#"}) {
    return (
        <Link to={to}
              className={`font-montserrat font-bold text-base leading-[24px] text-brand flex items-center gap-4`}>
            <span>View All</span>
            <ArrowRightLong/>
        </Link>
    );
}

export default ViewAll;
