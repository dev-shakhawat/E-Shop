import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SlickNextArrow from "../../assets/icons/SlickNextArrow.jsx";
import ProductCart from "../common/ProductCart.jsx";


// next arrow
function NextArrow({onClick}) {
    return <SlickNextArrow onClick={onClick} positionX={`right-[-15px]`}/>
}


// prev arrow
function PrevArrow() {
    return <div className={`hidden`}></div>
}

function SpringSlider() {


    // slider settings
    const sliderSeting = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: false
                }
            }
        ]
    };
    return (
        <div className={`   lg:w-[950px]`}>
            <Slider {...sliderSeting}>
                <ProductCart catagory={`television`}
                             title={`LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ...`}
                             currentprice={4599.00} rating={5} totalrating={100} strok={true} available={50}
                             delprice={5058.00} persent={10} persentRound={true}
                             bg={`bg-[#eaeaea] hover:bg-white`}/>
                <ProductCart catagory={`camera`}
                             title={`VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha ...`}
                             currentprice={819.00} rating={5} totalrating={100} strok={true} available={92}
                             delprice={1638.00} persent={50} persentRound={true} bg={`bg-[#eaeaea] hover:bg-white`}/>
                <ProductCart catagory={`television`}
                             title={`LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ...`}
                             currentprice={4599.00} rating={5} totalrating={100} strok={true} available={50}
                             delprice={5058.00} persent={10} persentRound={true} bg={`bg-[#eaeaea] hover:bg-white`}/>
            </Slider>
        </div>
    );
}

export default SpringSlider;
