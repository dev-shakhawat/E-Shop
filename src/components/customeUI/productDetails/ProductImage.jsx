import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Resizer from "../../../assets/icons/Resizer";
import ProductImageViewerModal from "./ProductImageViewerModal";



export default function ProductImage({variant}) {
    
    // all variables
    const [navOne, setNavOne] = useState(null);
    const [navTwo, setNavTwo] = useState(null);
    let sliderRefOne = useRef(null);
    let sliderRefTwo = useRef(null);

    // product image variables
    const [productImages , setProductImages] = useState([]) 
    const [isImageModal , setImageModal] = useState(false) 
    const [currentIndex , setCurrentIndex] = useState(0)

  
    useEffect(() => {
        setNavOne(sliderRefOne);
        setNavTwo(sliderRefTwo);
    }, []);

    useEffect(() => {
        if(variant && variant.images.length > 0){
            setProductImages(variant.images);
        }
    }, [variant])
    
    
    
  return (
    <div className="2xl:w-[833px] xl:w-[600px]  ">

      {/* image resizer */}
      <Resizer onClick={() => setImageModal(true)}  className="absolute top-5 right-5 z-1 cursor-ew-resize hidden lg:inline-block " /> 
      {isImageModal  && <ProductImageViewerModal closeModal={setImageModal}  image={ productImages[currentIndex]} />}

      
      {/* slider one / main */}
      <Slider   afterChange={(newIndex) => { setCurrentIndex(newIndex) }} asNavFor={navTwo} ref={slider => (sliderRefOne = slider)} infinite={false}>
        {productImages.length > 0 && productImages.map((image , index) => (
          <div key={index} className=" ">
              <img src={image} alt="" className="w-full h-full object-cover rounded-[25px] "/>
          </div>
        ))}
      </Slider>

      {/* slider two / thumbnail */}
      <div  className="mt-8 thumbnailimage ">
        <Slider asNavFor={navOne} ref={slider => (sliderRefTwo = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} infinite={false} >
          {productImages.length > 0 && productImages.map((image , index) => (
            <div   key={index} className="lg:max-w-[94px] lg:max-h-[82px] p-1   cursor-pointer   ">
                <img src={image} alt="" className="w-full h-full object-cover rounded-md overflow-hidden "/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
