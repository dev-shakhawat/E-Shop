import React from 'react';


// img
import productimg from "../../assets/images/product.png";

// icons
import Star from "../../assets/icons/Star.jsx";
import CartIcon from "../../assets/icons/CartIcon.jsx";
import Love from "../../assets/icons/Love.jsx";
import Share from "../../assets/icons/Share.jsx";


function ProductCart({
                         catagory,
                         title,
                         currentprice,
                         delprice,
                         persentRound = false,
                         persent = null,
                         rating = 0,
                         totalrating,
                         customstyle,
                         customStar,
                         strok = false,
                         available
                     }) {

    const [ratingval, setRatingval] = React.useState(new Array(rating).fill(rating))


    return (
        <div
            className={`${customstyle} duration-300  p-2 sm:p-3.5 md:p-5 lg:p-6 border rounded-lg cursor-pointer border-transparent  group   `}>

            {/*  top part  */}
            <div className="relative overflow-hidden ">

                {/*   persent tag    */}
                {persent &&
                    <div
                        className={`absolute top-0 right-0 bg-brand   md:font-bold  px-3 md:px-5 py-1.5 flex justify-center items-center text-white ${persentRound ? " w-[100px] h-[100px]  text-[24px] leading-[30px]  font-poppins  rounded-full font-bold " : "rounded-[5px] font-montserrat text-base leading-[24px]  font-semibold "}  `}>{persent}%
                    </div>}

                {/*  product image  */}
                <img src={productimg} alt="productimg" className={`w-full object-cover  `}/>

                {/*  cart/love/share   */}
                <div
                    className="flex justify-center gap-4.5 absolute -bottom-1/2 group-hover:bottom-1.5 left-0 w-full duration-200 ">
                    <div
                        className="duration-300 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white  grid place-items-center rounded-full border border-brand   ">
                        <CartIcon color={`#FF624C`}
                                  className={`w-[15px] md:w-[20px]`}/>
                    </div>
                    <div
                        className="duration-300 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand   ">
                        <Love className={`w-[15px] md:w-[20px]`}/></div>
                    <div
                        className="duration-300 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand   ">
                        <Share className={`w-[15px] md:w-[20px]`}/>
                    </div>
                </div>
            </div>


            {/*  bottom part  */}
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                <h5 className="font-montserrat text-[12px] md:text-sm leading-xl text-primary uppercase tracking-[5px]  ">{catagory}</h5>
                <h3 className="line-clamp-2 text-ellipsis overflow-hidden mt-2 md:mt-4 font-poppins font-semibold text-base md:text-lg leading-[20px] md:leading-[30px] text-primary group-hover:text-brand group-hover:underline duration-300  ">{title}</h3>

                <div className="flex items-center mt-2 ">
                    <ul className="flex">
                        {/*   rating   */}
                        {ratingval.map((item, index) => <li key={index}><Star customStar={customStar}/></li>)}
                    </ul>
                    <p className={`font-montserrat text-sm leading-xl text-primary ml-2`}>({totalrating})</p>
                </div>

                {/*  price  */}
                <div className="flex items-end gap-2 mt-6">

                    {/*  current price  */}
                    <p className="font-poppins font-semibold text-[14px] sm:text-base md:text-xl lg:text-[24px] leading-[30px]  ">${currentprice}</p>

                    {/*  deleted price  */}
                    {delprice &&
                        <del
                            className={`font-montserrat font-normal text-[12px] md:text-base leading-[24px] text-secondery  `}>${delprice}</del>}

                </div>


                {/*  stroke/available part  */}
                {strok &&
                    <div
                        className={`h-[20px] md:h-[25px] lg:h-[30px] bg-tertary mt-3 sm:mt-5 md:mt-6 lg:mt-8 rounded-[25px] overflow-hidden relative `}>
                        {/*  progress bar  */}
                        <div style={{width: `${available}%`}}
                             className={` ${available >= 80 ? "bg-brand" : "bg-primary"} h-full rounded-[25px]`}></div>
                        <p className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase font-montserrat font-bold text-[12px] md:text-[10px] lg:text-base leading-[24px] text-white   ">
                            {available >= 80 ? "limited stoke!" : `${available} available`}
                        </p>
                    </div>}

            </div>


        </div>
    );
}

export default ProductCart;
