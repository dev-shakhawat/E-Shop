import React, { useState } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import ProductImage from '../components/customeUI/productDetails/ProductImage';
import Container from '../components/common/Container';
import ShortDetails from '../components/customeUI/productDetails/ShortDetails';
import ProductFacility from '../components/customeUI/allProducts/ProductFacility';


// icons
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { useSelector } from 'react-redux';
import CartIcon from '../assets/icons/CartIcon';
import ProductTabs from '../components/customeUI/productDetails/ProductTabs';
import ViewAll from '../components/common/ViewAll';
import ProductCart from '../components/common/ProductCart';



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

    const newProducts = [
        {
          catagory: "laptop",
          title: "Gaming Laptop ZDY 15.6 Inch 512 GB VGA ...",
          currentprice: '16,59.00', 
          totalrating: 120,
          rating: 5,
        },
        {
          catagory: "laptop",
          title: "Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ...",
          currentprice: "23,99.99",
          delprice: "2,878.00",
          totalrating: 120,
          rating: 5,
          persent: 20,
        },
        {
          catagory: "laptop",
          title: "2019 Smart Laptop 256 GB 13 inch Pro Chip ...",
          currentprice: '20,99.99',
          totalrating: 20,
          rating: 5,
        },
        {
          catagory: "laptop",
          title: "S21 Laptop Ultra HD LED Screen Feature 2023 ...",
          currentprice: '11,99.00',
          delprice: "2878.00", 
          totalrating: 100,
          rating: 5,
        },
        {
          catagory: "laptop",
          title: "Sleek Laptop HQ 256 GB SSD 8 GB Intel iCor...",
          currentprice: '15,19.99',
          totalrating: 20,
          rating: 5,
        },
      ];

    return (
        <Container>

            
            {/* Breadcrumb */}
            <Breadcrumb/>

            {/* detailes */}
            <div className="flex flex-col lg:flex-row      ">

                {/* product image */}
                <div className="2xl:max-w-[833px] xl:max-w-[600px] max-w-full     "><ProductImage/></div>
                


                {/* product detailes */}
                <div className="lg:ml-[56px] ml-1 ">
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
            <div className="pb-16">

                {/* title */}
                <h2 className=" flex justify-between items-center font-poppins font-semibold text-[36px] leading-[46px] text-[#303030]   ">
                  <p className="">Related Articles</p>
                  <ViewAll/>
                </h2>

                <div className="grid grid-cols-5   mt-12   ">
                {newProducts.map((product, index) => (
                    <ProductCart
                    key={index}
                    persent={product.persent}
                    title={product.title}
                    totalrating={product.totalrating}
                    currentprice={product.currentprice}
                    delprice={product.delprice}
                    catagory={product.catagory}
                    rating={product.rating}
                    customstyle={`hover:border-tertary`}
                    customStar={`text-[#fbd550]`}
                    />
                ))}
                </div>

            </div>


        </Container>
    );
}

export default ProductDetails;