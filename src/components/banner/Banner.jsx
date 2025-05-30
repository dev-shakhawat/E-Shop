import React from 'react';
import Container from "../common/Container.jsx";
import {Link} from "react-router";

function Banner() {
    return (
        <div className={` pt-2  lg:lg:pt-8 pb-5 md:pb-10 lg:pb-[89px]  `}>
            <Container>
                <Link to={`/`}><img src="/images/banner.png" alt="banner"/></Link>
            </Container>
        </div>
    );
}

export default Banner;
