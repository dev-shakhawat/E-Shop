import React from 'react';
import Banner from "../components/customeUI/banner/Banner.jsx";
import Facility from "../components/customeUI/facility/Facility.jsx";
import FeaturedProduct from "../components/customeUI/featuredProduct/FeaturedProduct.jsx";
import SpecialDeal from "../components/customeUI/specialDeal/SpecialDeal.jsx";
import NewProduct from "../components/customeUI/newProduct/NewProduct.jsx";
import FAQ from "../components/customeUI/faq/FAQ.jsx";
import BestSeller from "../components/customeUI/bestSeller/BestSeller.jsx";
import SpringSale from "../components/customeUI/SpringSale/SpringSale.jsx";
import TechTalk from "../components/customeUI/techTalk/TechTalk.jsx";
import Brands from "../components/customeUI/brands/Brands.jsx";


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


            {/*   spring sale   */}
            <SpringSale/>


            {/*  best seller  */}
            <BestSeller/>


            {/*  FAQ section  */}
            <FAQ/>


            {/*  tech talk  */}
            {/* <TechTalk/> */}

            {/*  brands  */}
            <Brands/>


        </div>
    );
}

export default Home;
