import React from 'react';
import Banner from "../components/banner/Banner.jsx";
import Facility from "../components/facility/Facility.jsx";
import FeaturedProduct from "../components/featuredProduct/FeaturedProduct.jsx";
import SpecialDeal from "../components/specialDeal/SpecialDeal.jsx";
import NewProduct from "../components/newProduct/NewProduct.jsx";
import FAQ from "../components/faq/FAQ.jsx";
import BestSeller from "../components/bestSeller/BestSeller.jsx";
import SpringSale from "../components/SpringSale/SpringSale.jsx";
import TechTalk from "../components/techTalk/TechTalk.jsx";
import Brands from "../components/brands/Brands.jsx";


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
            <TechTalk/>

            {/*  brands  */}
            <Brands/>


        </div>
    );
}

export default Home;
