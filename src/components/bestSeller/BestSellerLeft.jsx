import React from 'react';
import ViewAll from "../common/ViewAll.jsx";
import ProductCart from "../common/ProductCart.jsx";

function BestSellerLeft() {

    const BestSellerArr = [
        {
            catagory: "audio",
            title: "Wireless Bluetooth Speaker Portable Sou...",
            currentprice: 1199.00,
            rating: 5,
            totalrating: 100,
        }, {
            catagory: "tablet",
            title: "Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K ...",
            currentprice: "129.00",
            delprice: "167.00",
            persent: "30",
            rating: 5,
            totalrating: "120",
        },
        {
            catagory: "watch",
            title: "Mobile Watch A Series GPS 7/144 45 mm Red...",
            currentprice: "999.00",
            rating: 5,
            totalrating: "50",
        },
        {
            catagory: "phone",
            title: "LT Phone RAM 16/256 GB Rose Gold Guaran...",
            currentprice: "999.00",
            rating: 5,
            totalrating: "50",
        },
        {
            catagory: "laptop",
            title: "Gaming Laptop ZDY 15.6 Inch 512 GB VGA ...",
            currentprice: "1659.00",
            rating: 5,
            totalrating: "120",
        }, {
            catagory: "home",
            title: "Wash Machine 11 KG Front Loading Steam ...",
            currentprice: "5699.00",
            rating: 5,
            totalrating: "120",
            delprice: "6268.00",
            persent: "10",
        },
    ]

    return (
        <div>
            <h2 className=" flex justify-between  ">
                <span
                    className={`commonHead`}>Best Seller</span>
                <ViewAll/>
            </h2>

            {/*  seles components  */}
            <div className="grid grid-cols-3 grid-rows-2 mt-12">
                {BestSellerArr.map((item, index) => <ProductCart key={index} catagory={item.catagory} title={item.title}
                                                                 currentprice={item.currentprice} rating={item.rating}
                                                                 totalrating={item.totalrating} delprice={item.delprice}
                                                                 persent={item.persent}
                />)}
            </div>
        </div>
    );
}

export default BestSellerLeft;
