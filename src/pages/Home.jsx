import React from 'react';
import Banner from "../components/banner/Banner.jsx";
import Facility from "../components/facility/Facility.jsx";
import FeaturedProduct from "../components/featuredProduct/FeaturedProduct.jsx";
import SpecialDeal from "../components/specialDeal/SpecialDeal.jsx";
import NewProduct from "../components/newProduct/NewProduct.jsx";
import FAQ from "../components/faq/FAQ.jsx";


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

            {/*  new products  */}
            <NewProduct/>

            {/*  FAQ section  */}
            <FAQ/>

        </div>
    );
}

export default Home;
