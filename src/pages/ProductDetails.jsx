import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ProductImage from '../components/productDetails/ProductImage';
import Container from '../components/common/Container';
import ShortDetails from '../components/productDetails/ShortDetails';
import ProductFacility from '../components/allProducts/ProductFacility';


// icons
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { useSelector } from 'react-redux';
import CartIcon from '../assets/icons/CartIcon';
import ProductTabs from '../components/productDetails/ProductTabs';



function ProductDetails() {

    const product = useSelector(state => state.product.detailedProduct)

    const [quantity , setQuantity] = useState(product.minimumOrderQuantity || 1)

    const handleQuantityUp = () => {
        setQuantity(prev => prev + 1)
    }
    const handleQuantityDown = () => {
        if(quantity > product.minimumOrderQuantity){
            setQuantity(prev => prev - 1)
        }
    }

    return (
        <Container>

            
            {/* Breadcrumb */}
            <Breadcrumb/>

            {/* detailes */}
            <div className="flex">

                {/* product image */}
                <div className="lg:max-w-[833px]"><ProductImage/></div>
                


                {/* product detailes */}
                <div className="ml-[56px]">
                    <ShortDetails/>
                </div>

            </div>

            <div className="flex gap-[100px] mt-[63px] pb-25 ">

                {/* product facility */}
                <div className="">
                   <ProductFacility/>
                </div>

                {/* quantity+cart */}
                <div className="flex gap-20">
                   
                   {/* quantity */}
                   <div className="flex items-center gap-10 ">
                      <button onClick={handleQuantityDown} type='button' className='w-[56px] h-[56px] hover:bg-[#f4f4f4] rounded-full grid place-items-center cursor-pointer  ' ><AiOutlineMinus /></button>
                      <p className="w-[42px] font-poppins font-semibold text-[36px] leading-[46px] text-primary  ">{quantity}</p>
                      <button onClick={handleQuantityUp} type='button' className='w-[56px] h-[56px] hover:bg-[#f4f4f4] rounded-full grid place-items-center cursor-pointer  ' ><BsPlusLg /></button>
                   </div>

                   {/* buy-cart */}
                   <div className="flex gap-4 ">
                    <button type="button" className=' duration-300 cursor-pointer border border-primary hover:border-brand font-montserrat font-semibold text-xl leading-[30px] text-primary hover:text-white bg-transparent hover:bg-brand py-4 px-10 rounded-[10px]  '>Buy Now</button>
                    <button type="button" className=' duration-300 cursor-pointer border border-primary hover:border-brand font-montserrat font-semibold text-xl leading-[30px] text-primary hover:text-white bg-transparent hover:bg-brand p-4 rounded-[10px]  '>
                        <CartIcon className={`w-[28px] h-[28px]  `}/>
                    </button>
                   </div>

                </div>


            </div>
            

            {/* product details tab/about product */}
            <div className="pb-16">
              <ProductTabs/>
            </div>


            {/* related products */}

            hi related


        </Container>
    );
}

export default ProductDetails;