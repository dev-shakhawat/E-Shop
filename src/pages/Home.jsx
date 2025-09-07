import React, { useEffect, useState } from 'react';
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
import getProduct from '../helpers/getAllProduct.js';


function Home() {

    const [featuredProduct , setFeaturedProduct] = useState([])
    const [newProduct , setNewProduct] = useState([])
    const [bestSeller , setBestSeller] = useState([])


    useEffect(() => { 

        (async () => {

            // fetch featured product
            await getProduct('product/featured') 
            .then((res) => {
                setFeaturedProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })


            // fetch new product
            await getProduct('product/newArrival') 
            .then((res) => {
                setNewProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })


            // fetch best seller
            await getProduct('product/all/filter')
            .then((res) => {  
                setBestSeller(res.data.slice(0, 6));
            })
            .catch((err) => {
                console.log(err);
            })

            
        })()

    }, [])

    return (
        <div>

            {/*  banner part  */}
            <Banner/>

            {/*  facility  */}
            <Facility/>

            {/*  featured product  */}
            {featuredProduct.length > 0 && <FeaturedProduct data={featuredProduct}/>} 


            {/*  special deal  */}
            <SpecialDeal/>

            {/*  new products  */}
            <NewProduct products={newProduct}/>


            {/*   spring sale   */}
            <SpringSale/>


            {/*  best seller  */}
            <BestSeller products={bestSeller}/>


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
