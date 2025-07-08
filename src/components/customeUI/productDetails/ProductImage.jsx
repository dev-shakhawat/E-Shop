import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import Resizer from "../../../assets/icons/Resizer";
import ProductImageViewerModal from "./ProductImageViewerModal";



export default function ProductImage() {
    
    // all variables
    const [navOne, setNavOne] = useState(null);
    const [navTwo, setNavTwo] = useState(null);
    let sliderRefOne = useRef(null);
    let sliderRefTwo = useRef(null);

    // product image variables
    const [productImages , setProductImages] = useState([])
    const product = useSelector(state => state.product.detailedProduct)
    const [isImageModal , setImageModal] = useState(false) 
    const [currentIndex , setCurrentIndex] = useState(0)
    
    
    console.log(navOne);

  
    useEffect(() => {
        setNavOne(sliderRefOne);
        setNavTwo(sliderRefTwo);
    }, []);

    useEffect(() => {
        if(product && product.images && product.images.length > 0){
            setProductImages(Array(3).fill(product.images[0]));
        }
    }, [product.images])
    
    

    
    


  return (
    <div className=" w-full relative">

      {/* image resizer */}
      <Resizer onClick={() => setImageModal(true)}  className="absolute top-5 right-5 z-1 cursor-ew-resize hidden lg:inline-block " /> 
      {isImageModal  && <ProductImageViewerModal closeModal={setImageModal}  image={ productImages[currentIndex]} />}

      
      {/* slider one / main */}
      <Slider   afterChange={(newIndex) => { setCurrentIndex(newIndex) }} asNavFor={navTwo} ref={slider => (sliderRefOne = slider)}>
        {productImages.length > 0 && productImages.map((image , index) => (
          <div key={index} className="w-full lg:min-w-[833px] h-[514px] rounded-[25px] outline-0  ">
              <img src={image} alt="" className="w-full h-full object-cover rounded-[25px] "/>
          </div>
        ))}
      </Slider>

      {/* slider two / thumbnail */}
      <div style={{width: `${(productImages.length * 94) + (productImages.length - 1 * 24) }px`}} className="mt-8 thumbnailimage ">
        <Slider asNavFor={navOne} ref={slider => (sliderRefTwo = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} >
          {productImages.length > 0 && productImages.map((image , index) => (
            <div   key={index} className="lg:max-w-[94px] lg:max-h-[82px] mx-3 cursor-pointer   ">
                <img src={image} alt="" className="w-full h-full object-cover "/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
