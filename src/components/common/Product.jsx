import React from 'react';


// img
import productimg from "../../assets/images/FeaturedProduct/product.png";

// icons
import Star from "../../icons/Star.jsx";
import CartIcon from "../../icons/CartIcon.jsx";
import Love from "../../icons/Love.jsx";
import Share from "../../icons/Share.jsx";


function Product({catagory, title, currentprice, delprice}) {
    return (
        <div className={`p-6 border rounded-lg cursor-pointer border-transparent hover:border-tertary group   `}>

            {/*  top part  */}
            <div className="relative overflow-hidden ">
                <img src={productimg} alt="productimg"/>

                {/*  cart/love/share   */}
                <div
                    className="flex justify-center gap-4.5 absolute -bottom-1/2 group-hover:bottom-1.5 left-0 w-full duration-200 ">
                    <div
                        className="duration-300 w-[50px] h-[50px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white  grid place-items-center rounded-full border border-brand   ">
                        <CartIcon width={20} color={`#FF624C`}
                                  className={``}/>
                    </div>
                    <div
                        className="duration-300 w-[50px] h-[50px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand   ">
                        <Love/></div>
                    <div
                        className="duration-300 w-[50px] h-[50px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand   ">
                        <Share/>
                    </div>
                </div>
            </div>


            {/*  bottom part  */}
            <div className="mt-10">
                <h5 className="font-montserrat text-sm leading-xl text-primary uppercase tracking-[5px]  ">{catagory}</h5>
                <p className="mt-4 font-poppins font-semibold text-xl leading-[30px] text-primary group-hover:text-brand group-hover:underline duration-300  ">{title}</p>

                <div className="flex items-center mt-2 ">
                    <ul className="flex">
                        <li><Star/></li>
                        <li><Star/></li>
                        <li><Star/></li>
                        <li><Star/></li>
                        <li><Star/></li>
                    </ul>
                    <p className={`font-montserrat text-sm leading-xl text-primary ml-2`}>(50)</p>
                </div>

                {/*  price  */}
                <div className="flex items-end gap-2 mt-6">

                    {/*  current price  */}
                    <p className="font-poppins font-semibold text-[24px] leading-[30px]  ">${currentprice}</p>

                    {/*  deleted price  */}
                    {delprice &&
                        <del
                            className={`font-montserrat font-normal text-base leading-[24px] text-secondery  `}>{delprice}</del>}

                </div>
            </div>


        </div>
    );
}

export default Product;
