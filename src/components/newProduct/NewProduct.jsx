import React from 'react';
import ArrowRightLong from "../../assets/icons/ArrowRightLong.jsx";
import Container from "../common/Container.jsx";
import {Link} from "react-router";
import Shortby from "../common/Shortby.jsx";
import ProductCart from "../common/ProductCart.jsx";

function NewProduct() {

    const shortArray = ["All Catagories", "Men", "Women", "Kids", "Electronics", "Furniture", "Home", "Sports", "Books", "Grocery", "Health", "Beauty", "Toys", "Automotive", "Pet Supplies", "Garden", "Industrial", "Musical Instruments", "Video Games", "Office Products", "Clothing", "Shoes", "Jewelry"]

    const newProducts = [
        {
            catagory: "watch",
            title: "Orange Watch 12 High Quality Health Sensor...",
            currentprice: 959.99,
            delprice: 1919.99,
            persent: 50,
            totalrating: 120,
            rating: 5
        },
        {
            catagory: "tablet",
            title: "Ultra Tablet Qwerty HD 10765 Series Low Pri...",
            currentprice: 799.00,
            totalrating: 100,
            rating: 5
        },
        {
            catagory: "audio",
            title: "QuietComfort 45 Wireless Headphone ...",
            currentprice: 329.99,
            totalrating: 120,
            rating: 5
        },
        {
            catagory: "laptop",
            title: "Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ...",
            currentprice: 2399.99,
            delprice: 2878.00,
            persent: 20,
            totalrating: 120,
            rating: 5
        },
        {
            catagory: "camera",
            title: "CamPro HERO10 Black Sleek Design 2023 4K ...",
            currentprice: 1499.99,
            totalrating: 20,
            rating: 5
        },
    ]

    return (
        <div className={`py-5 sm:py-10 md:py-15 lg:py-20 `}>
            <Container>

                {/*   heading   */}
                <div className="flex items-center justify-between ">
                    <h2 className=" commonHead ">
                        New Products
                    </h2>

                    {/*  short by  */}
                    <div className="flex gap-2 md:gap-4">
                        <p className="font-montserrat font-normal text-[14px] md:text-base leading-[24px] text-primary">Sort
                            by</p>
                        <Shortby shortsArr={shortArray} shortWidth={window.innerWidth < 640 ? 120 : 217}/>
                    </div>

                </div>

                {/*  new products  */}
                <div
                    className="grid grid-cols-2 gap-x-1 gap-y-2 sm:grid-cols-3  lg:grid-cols-5 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
                    {
                        newProducts.map((product, index) => <ProductCart key={index} persent={product.persent}
                                                                         title={product.title} rating={product.rating}
                                                                         totalrating={product.totalrating}
                                                                         currentprice={product.currentprice}
                                                                         delprice={product.delprice}
                                                                         catagory={product.catagory}
                                                                         rating={product.rating}
                        />)}
                </div>

                {/*  load more button  */}
                <div className="flex justify-center items-center mt-4 sm:mt-8 md:12 lg:mt-16">
                    <Link to={`#`}
                          className={`py-2 md:py-3 lg:py-4 px-5 sm:px-6 md:px-8 lg:px-10 rounded-[5px] lg:rounded-[10px] border border-brand font-montserrat font-bold text-[14px] md:text-base lg:text-xl leading-[30px] text-brand`}>Load
                        More
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default NewProduct;
