import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Star from '../../../assets/icons/Star'
import Slider from "react-slick";

export default function ProductTabs() {

    const product = useSelector(state => state.product.detailedProduct)

    const [activeTab , setActiveTab] = useState(2)

    const reviewSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

  return (
    <div className='pb-20 border-b border-tertary '>

        {/* tab buttons */}
        <div className="flex  gap-12 ">
            <button onClick={()=> setActiveTab(1)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 1 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold text-[24px] leading-[30px] pb-2    `}  >Description</button>
            <button onClick={()=> setActiveTab(2)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 2 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold text-[24px] leading-[30px] pb-2    `}  >Specification</button>
            <button onClick={()=> setActiveTab(3)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 3 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold text-[24px] leading-[30px] pb-2    `}  >Return</button>
            <button onClick={()=> setActiveTab(4)} type="button" className={`border-b-[4px] cursor-pointer ${activeTab == 4 ? "text-primary border-brand " : "text-secondery border-transparent "} font-poppins font-semibold text-[24px] leading-[30px] pb-2    `}  >Reviews</button>
        </div>

        {/* tab content */}

        {/* description */}
        {activeTab == 1 && <div className="mt-10">
            <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">{product.description}</p>
        </div>}

        {/* specification */}
        {activeTab == 2 && <div className="mt-10">
            <ul className="mt-12 flex flex-col gap-4">
              <li className='flex '>
                  <p className="font-poppins w-[170px] font-semibold text-xl leading-[30px] text-primary ">Brand</p>
                  <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">{product.brand || "No brand"}</p>
              </li>
              <li className='flex '>
                  <p className="font-poppins w-[170px] font-semibold text-xl leading-[30px] text-primary ">Size</p>
                  <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">{`${product.dimensions.width} x ${product.dimensions.depth} x ${product.dimensions.height}`} inches (W x D x H) </p>
              </li>
              <li className='flex '>
                  <p className="font-poppins w-[170px] font-semibold text-xl leading-[30px] text-primary ">Weight</p>
                  <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">{product.weight} pounds </p>
              </li>
              <li className='flex '>
                  <p className="font-poppins w-[170px] font-semibold text-xl leading-[30px] text-primary ">Delevery</p>
                  <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">{product.delivery || "Worldwide"} </p>
              </li>
              <li className='flex '>
                  <p className="font-poppins w-[170px] font-semibold text-xl leading-[30px] text-primary ">Return</p>
                  <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">{product.returnPolicy || "No Return"} </p>
              </li>
              {product.variant && 
              <li className='flex '>
                  <p className="font-poppins w-[170px] font-semibold text-xl leading-[30px] text-primary ">Variant</p>
                  <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">{product.delivery || "Need to check"} </p>
              </li>}
            </ul>
        </div>}

        {/* return policy */}
        {activeTab == 3 && <div className="mt-10">
            <p className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">
              We are committed to ensuring customer satisfaction. If you are not entirely satisfied with your purchase, please review our return policy below:
            </p>

            {/* Eligibility for Returns */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Eligibility for Returns</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">The item must be unused, undamaged, and in its original condition.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">All original tags, labels, packaging, and the purchase receipt must be included.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">Return requests must be made within 7 days of receiving the product.</li>
            </ul>

            {/* Non-Returnable Items */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Eligibility for Returns</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  "> Used, damaged, or washed items.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">Personal care, hygiene products, or undergarments.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">Certain discounted or promotional items (if applicable)</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">Customized or pre-order items</li>
            </ul>

            {/* Return Process */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Return Process</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">Submit a return request via our website or customer support.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">Once your request is approved, send the item to the provided return address.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">After receiving and inspecting the product, we will process a refund or replacement within 5–7 business days.</li>
            </ul>

            {/* Refund Policy */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Refund Policy</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">Refunds will be issued to the original payment method.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">For Cash on Delivery (COD) orders, we may offer a refund via bKash/Nagad/Rocket or another preferred method.</li>
            </ul>

            {/* Refund Policy */}
            <h3 className="  font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">Shipping Costs</h3>
            <ul className='list-disc ml-6 mt-4'>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">If the return is due to a defective or incorrect item, we will cover the return shipping cost.</li>
                <li className="font-montserrat font-normal text-xl leading-[30px] text-primary  ">If the return is due to a change of mind, the customer will be responsible for the return shipping cost.</li>
            </ul>
        </div>}

        {/* reviews */}
        {activeTab == 4 && <div className="mt-10">
            {product.reviews.length > 0 ? <div className='w-full'>
                    <Slider {...reviewSliderSettings}>
                    {product.reviews.map((item , index) => {
                        return (
                        <div className="text-center   ">
                            <img src={item.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="user" className='w-[50px] h-[50px] mx-auto ' />
                            <div className="">
                                <h3 className="font-poppins mt-4 font-semibold text-xl leading-[30px] text-primary ">{item.reviewerName}</h3>
                                <ul className='flex justify-center '>
                                {Array.from({ length: item.rating }).map((_, i) => (
                                   <li key={i}>
                                     <Star customStar="text-[#FED550]" width={16} height={16} />
                                   </li>
                                 ))}
                                </ul>
                                <p className="font-montserrat font-normal text-xl leading-[30px] text-primary mt-2 ">{item.comment}</p>
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
