import React from 'react';
import Container from "../common/Container.jsx";
import ProductCart from "../common/ProductCart.jsx";

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickNextArrow from "../../assets/icons/SlickNextArrow.jsx";
import SlickPrevArrow from "../../assets/icons/SlickPrevArrow.jsx";
import ViewAll from "../common/ViewAll.jsx";


// next arrow
function NextArrow({onClick}) {
    return <SlickNextArrow onClick={onClick}/>
}

// prev arrow
function PrevArrow({onClick}) {
    return <SlickPrevArrow onClick={onClick}/>
}

function FeaturedProduct() {

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    
                }
            }
        ]
    };
    return (
        <div className={`py-10 md:py-15  lg:py-20 `}>
            <Container>

                {/*   heading   */}
                <h2 className=" flex justify-between  ">
                    <span className={`commonHead`}>Featured Products</span>
                    <ViewAll/>
                </h2>

                {/*   slider   */}
                <div className="mx-14 mt-2 sm:mt-6 md:mt-8 lg:mt-12 ">
                    <Slider {...sliderSettings}>
                        <ProductCart catagory={`audio`} title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                     currentprice={999.00} delprice={345} rating={5} totalrating={10}/>
                        <ProductCart catagory={`audio`}
                                     title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                     currentprice={999.00} delprice={345} persent={50} rating={3}
                                     totalrating={50}/>
                        <ProductCart catagory={`audio`} title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                     currentprice={999.00} rating={2} totalrating={200}/>
                        <ProductCart catagory={`audio`}
                                     title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                     currentprice={999.00} delprice={345} rating={4} totalrating={110}/>
                        <ProductCart catagory={`audio`}
                                     title={`JPhone 13 High Quality Value Buy Best Cam...`}
                                     currentprice={999.00} delprice={345} rating={1} totalrating={90}/>
                    </Slider>
                </div>
            </Container>

        </div>
    );
}

export default FeaturedProduct;
