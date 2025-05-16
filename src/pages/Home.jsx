import React from 'react';
import Banner from "../components/banner/Banner.jsx";
import Facility from "../components/facility/Facility.jsx";
import FeaturedProduct from "../components/FeaturedProduct/FeaturedProduct.jsx";


function Home() {
    return (
        <div>
            {/*  banner part  */}
            <Banner/>

            {/*  facility  */}
            <Facility/>

            {/*  featured product  */}
            <FeaturedProduct/>

        </div>
    );
}

export default Home;
