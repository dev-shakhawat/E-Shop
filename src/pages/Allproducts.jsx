import React from 'react';
import Container from "../components/common/Container.jsx";
import Chooser from "../components/catagoryChooser/Chooser.jsx";
import PriceChooser from "../components/catagoryChooser/PriceChooser.jsx";
import AllProducts from '../components/allProducts/AllProducts.jsx';

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
    return (
        <div className={`mt-17 pb-20`}>
            <Container>
                <div className="flex gap-6.5">

                    {/*  catagory/brand/price chooser  */}
                    <div className="min-w-[335px] bg-[#F4F4F4] rounded-[25px] p-12">

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
