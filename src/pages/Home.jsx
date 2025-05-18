import React from 'react';
import Banner from "../components/banner/Banner.jsx";
import Facility from "../components/facility/Facility.jsx";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct.jsx";
import SpecialDeal from "../components/specialDeal/SpecialDeal.jsx";


function Home() {
    return (
        <div>
            {/*  banner part  */}
            <Banner/>

            {/*  facility  */}
            <Facility/>

            {/*  featured product  */}
            <FeaturedProduct/>


            {/*  special deal  */}
            <SpecialDeal/>

        </div>
    );
}

export default Home;
