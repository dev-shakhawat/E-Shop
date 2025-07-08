import React from 'react';
import Container from "../components/common/Container.jsx";
import Chooser from "../components/customeUI/catagoryChooser/Chooser.jsx";
import PriceChooser from "../components/customeUI/catagoryChooser/PriceChooser.jsx";
import AllProducts from '../components/customeUI/allProducts/AllProducts.jsx';
import { useSelector } from 'react-redux';

function Allproducts() {

    const allcatagories = [{name: "Computers & Tablets"}, {name: "Mobile & Accessories"}, {name: "TV & Home Theater"}, {name: "Audio & Headphones"}, {name: "Cameras & Camcorders"}, {name: "Gaming Equipment"}, {name: "Home Appliances"}]
    const brands = [{
        name: "Apple",
        total: 565,
    }, {
        name: "Samsung",
        total: 428
    }, {
        name: "Asus",
        total: 323
    }, {
        name: "Dell",
        total: 298
    }, {
        name: "Linovo",
        total: 180
    }, {
        name: "HP",
        total: 98
    }, {
        name: "Penasonic",
        total: 17
    }]
    const isFilter = useSelector(state => state.product.filter) 


    return (
        <div className={`2xl:mt-17 xl:mt-15 lg:mt-12 md:mt-10 mt-8 2xl:pb-20 xl:pb-16 lg:pb-12 md:pb-10 pb-8  `}>
            <Container>
                <div className="flex gap-6.5 h-fit relative ">

                    {/*  catagory/brand/price chooser  */}
                    <div className={` ${isFilter ? "fixed top-0 left-0 z-1 h-screen  " : "sticky top-0 left-0  h-fit rounded-[25px] "}  w-fit lg:min-w-[335px]  bg-[#F4F4F4]  2xl:p-12 xl:p-10 lg:p-8 md:p-6 p-4    `}>

                        {/*  catagory chooser  */}
                        <Chooser allcatagories={allcatagories}/>

                        <hr className={`my-10 text-tertary`}/>

                        {/*  brand chooser  */}
                        <Chooser allcatagories={brands}/>

                        <hr className={`my-10 text-tertary`}/>

                        {/*  price chooser  */}
                        <PriceChooser/>
                    </div>


                    {/*  all products  */}
                    <div className="w-full">
                        <AllProducts/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Allproducts;
