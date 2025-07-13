import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Star from '../../../assets/icons/Star'
import Slider from "react-slick";
import ShortDetails from './ShortDetails';

export default function ProductTabs() {

    const product = useSelector(state => state.product.detailedProduct)

    const [activeTab , setActiveTab] = useState(2)

    const reviewSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
    <div className='2xl:pb-20 xl:pb-16 lg:pb-12 md:pb-10 pb-8 border-b border-tertary '>

        {/* tab buttons */}
        <div className="flex  2xl:gap-12 xl:gap-10 lg:gap-8 md:gap-6 gap-4 ">
            <button onClick={()=> setActiveTab(1)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 1 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold 2xl:text-[24px] xl:text-xl lg:text-[18px] md:text-base text-xs 2xl:leading-7.5 xl:leading-6 leading-5  lg:pb-2    `}  >Description</button>
            <button onClick={()=> setActiveTab(2)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 2 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold 2xl:text-[24px] xl:text-xl lg:text-[18px] md:text-base text-xs 2xl:leading-7.5 xl:leading-6 leading-5  lg:pb-2    `}  >Specification</button>
            <button onClick={()=> setActiveTab(3)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 3 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold 2xl:text-[24px] xl:text-xl lg:text-[18px] md:text-base text-xs 2xl:leading-7.5 xl:leading-6 leading-5  lg:pb-2    `}  >Return</button>
            <button onClick={()=> setActiveTab(4)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 4 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold 2xl:text-[24px] xl:text-xl lg:text-[18px] md:text-base text-xs 2xl:leading-7.5 xl:leading-6 leading-5  lg:pb-2    `}  >Reviews</button>
        </div>

        {/* tab content */}

        {/* description */}
        {activeTab == 1 && <div className="2xl:mt-10 xl:mt-8 lg:mt-6 md:mt-4 mt-2">
            <p className="commonPara  ">{product.description}</p>
        </div>}

        {/* specification */}
        {activeTab == 2 && <div className="2xl:mt-10 xl:mt-8 lg:mt-6 md:mt-4 mt-2   "> 
            <ShortDetails onlyDescription/>
        </div>}

        {/* return policy */}
        {activeTab == 3 && <div className="2xl:mt-10 xl:mt-8 lg:mt-6 md:mt-4 mt-2">
            <p className="commonPara  ">
              We are committed to ensuring customer satisfaction. If you are not entirely satisfied with your purchase, please review our return policy below:
            </p>

            {/* Eligibility for Returns */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Eligibility for Returns</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="commonPara  ">The item must be unused, undamaged, and in its original condition.</li>
                <li className="commonPara  ">All original tags, labels, packaging, and the purchase receipt must be included.</li>
                <li className="commonPara  ">Return requests must be made within 7 days of receiving the product.</li>
            </ul>

            {/* Non-Returnable Items */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Eligibility for Returns</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="commonPara  "> Used, damaged, or washed items.</li>
                <li className="commonPara  ">Personal care, hygiene products, or undergarments.</li>
                <li className="commonPara  ">Certain discounted or promotional items (if applicable)</li>
                <li className="commonPara  ">Customized or pre-order items</li>
            </ul>

            {/* Return Process */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Return Process</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="commonPara  ">Submit a return request via our website or customer support.</li>
                <li className="commonPara  ">Once your request is approved, send the item to the provided return address.</li>
                <li className="commonPara  ">After receiving and inspecting the product, we will process a refund or replacement within 5–7 business days.</li>
            </ul>

            {/* Refund Policy */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Refund Policy</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="commonPara  ">Refunds will be issued to the original payment method.</li>
                <li className="commonPara  ">For Cash on Delivery (COD) orders, we may offer a refund via bKash/Nagad/Rocket or another preferred method.</li>
            </ul>

            {/* Refund Policy */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Shipping Costs</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="commonPara  ">If the return is due to a defective or incorrect item, we will cover the return shipping cost.</li>
                <li className="commonPara  ">If the return is due to a change of mind, the customer will be responsible for the return shipping cost.</li>
            </ul>
        </div>}

        {/* reviews */}
        {activeTab == 4 && <div className="2xl:mt-10 xl:mt-8 lg:mt-6 md:mt-4 mt-2">
            {product.reviews.length > 0 ? <div className='w-full'>
                    <Slider {...reviewSliderSettings}>
                    {product.reviews.map((item , index) => {
                        return (
                        <div className="text-center   ">
                            <img src={item.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user" className='w-[50px] h-[50px] mx-auto ' />
                            <div className="">
                                <h3 className="font-poppins 2xl:mt-4 xl:mt-3 lg:mt-2 md:mt-1 mt-0 font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs leading-[30px] text-primary ">{item.reviewerName}</h3>
                                <ul className='flex justify-center '>
                                {Array.from({ length: item.rating }).map((_, i) => (
                                   <li key={i}>
                                     <Star customStar="text-[#FED550]" width={16} height={16} />
                                   </li>
                                 ))}
                                </ul>
                                <p className="commonPara lg:mt-2 mt-1 ">{item.comment}</p>
                            </div>
                        </div>
                        )
                    })}
                    </Slider>
            </div> : (
                        <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">No reviews yet</h3>
                    )}
        </div>}

    </div>
  )
}
