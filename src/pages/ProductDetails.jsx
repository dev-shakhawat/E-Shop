import React, { useEffect, useState } from 'react';
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
import { useNavigate, useParams } from 'react-router';
import getProduct from '../helpers/getAllProduct';



function ProductDetails() {

  // get id from params
  const param = useParams()
  const navigate = useNavigate();
  const [product , setProduct] = useState(null) 
  const [variants , setVariants] = useState([])
  const [selectedVariant , setSelectedVariant] = useState(variants[0]) 
  const [buyInfo , setBuyInfo] = useState({shippingFee: product?.shippingFee || 0 , title: product?.title ,  quantity: selectedVariant?.minOrderQuantity || 1 , price : selectedVariant ? selectedVariant.price.currentPrice : 0   , variant: selectedVariant })
  

 useEffect(() => { 
    
    (async () => {
      // fetch featured product
      await getProduct(`product/singleProduct/${param.id}`) 
      .then((res) => { 
        setProduct(res.data);
        setVariants(res.data.variants)
        setSelectedVariant(res.data.variants[0])
      })
      .catch((err) => {
        console.log(err);
      })
    })()
    
  }, []);

  useEffect(() => {
    setBuyInfo({shippingFee: product?.shippingFee || 0 , title: product?.title  ,  quantity : selectedVariant?.minOrderQuantity || 1 , price : selectedVariant?.price?.currentPrice , variant: selectedVariant})
  }, [selectedVariant])
 
  

  const handleChangePrice = (type)=>{

    if(type === "minus" && buyInfo.quantity > (selectedVariant?.minOrderQuantity || 1 )){
      setBuyInfo(prev => ({...prev , quantity : prev.quantity - 1 , price : prev.price - selectedVariant.price.currentPrice}))
    }

    if(type === "plus" && buyInfo.quantity < selectedVariant?.quantity){
        setBuyInfo(prev => ({...prev , quantity : prev.quantity + 1 , price : prev.price + selectedVariant.price.currentPrice}))
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

  const handleBuyNow = () => {
    localStorage.setItem('buyNow' , JSON.stringify(buyInfo))
    navigate('/checkout')
  }

    return (
        <Container>

            
            {/* Breadcrumb */}
            {product && product.title && ( 
            <Breadcrumb lastOne={product.title}/>
            )}
              
            {/* detailes */}
            <div className="flex flex-col lg:flex-row      ">

                {/* product image */}
                {product && product.thumbnail && product.variants.length > 0 && ( 
                <div className="2xl:max-w-[833px] xl:max-w-[600px] max-w-full     ">
                  <ProductImage variant={selectedVariant} />
                </div>
                )}
                


                {/* product detailes */}
                {product && product.title && ( 
                <div className="lg:ml-[56px] ml-1 mt-10 lg:mt-0 ">
                    <ShortDetails product={product} variants={variants} setSelectedVariant={setSelectedVariant}  selectedVariant={selectedVariant}  />
                </div>
                )}
                

            </div>

            <div className="flex flex-col lg:flex-row justify-between 2xl:mt-[63px] xl:mt-14 lg:mt-10 md:mt-8 mt-6 2xl:pb-25 xl:pb-20 lg:pb-16 md:pb-12 pb-8 ">

                {/* product facility */}
                  <ProductFacility  />   

                {/* quantity+cart */}
                <div className="   flex  2xl:gap-20 xl:gap-16 lg:gap-12 md:gap-8 gap-4 mt-5 lg:mt-0 ">
                   
                   {/* quantity */}
                   <div className="flex items-center 2xl:gap-10 xl:gap-8 lg:gap-6  gap-4 ">
                      <button onClick={()=> handleChangePrice('minus')}  type='button' className='2xl:w-[56px] xl:w-12 lg:w-10 md:w-8 w-6 2xl:h-[56px] xl:h-12 lg:h-10 md:h-8 h-6 hover:bg-[#f4f4f4] rounded-full grid place-items-center cursor-pointer  ' ><AiOutlineMinus /></button>
                      <p className="2xl:w-[42px] xl:w-10 lg:w-8 md:w-6 w-4 cmnHeadTwo text-primary  ">{buyInfo.quantity}</p>
                      <button onClick={()=> handleChangePrice('plus')}  type='button' className='2xl:w-[56px] xl:w-12 lg:w-10 md:w-8 w-6 2xl:h-[56px] xl:h-12 lg:h-10 md:h-8 h-6 hover:bg-[#f4f4f4] rounded-full grid place-items-center cursor-pointer  ' ><BsPlusLg /></button>
                   </div>

                   {/* buy-cart */}
                   <div className="flex 2xl:gap-4 xl:gap-3  gap-2  ">
                    <button onClick={handleBuyNow} type="button" className='2xl:w-[200px] xl:w-[170px] lg:w-[130px] md:w-[110px] w-[90px] duration-300 cursor-pointer border border-primary hover:border-brand font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs leading-[30px] text-primary hover:text-white bg-transparent hover:bg-brand 2xl:py-4 xl:py-3 lg:py-2 md:py-1.5 py-1 h-fit  2xl:rounded-[10px] md:rounded-[7px] rounded-[5px]  '>Buy Now</button>
                    <button type="button" className='  duration-300 cursor-pointer border border-primary hover:border-brand font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs leading-[30px] text-primary hover:text-white bg-transparent hover:bg-brand 2xl:py-4 xl:py-3 lg:py-2 md:py-1.5 py-1 h-full  2xl:rounded-[10px] md:rounded-[7px] rounded-[5px] p-2     '>
                        <CartIcon className={`2xl:w-[28px] xl:w-6 lg:w-5 w-4 2xl:h-[28px] xl:h-6 lg:h-5 h-4  `}/>
                    </button>
                   </div>

                </div>


            </div>
            

            {/* product details tab/about product */}
            <div className="2xl:pb-16 xl:pb-14 lg:pb-12 md:pb-10 pb-8 ">
              <ProductTabs/>
            </div>


            {/* related products */}
            <div className=" 2xl:pb-16 xl:pb-14 lg:pb-12 md:pb-10 pb-8   ">

                {/* title */}
                <h2 className=" flex justify-between items-center cmnHeadTwo text-[#303030]   ">
                  <p className="">Related Articles</p>
                  <ViewAll/>
                </h2>

                <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4   mt-12   ">
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