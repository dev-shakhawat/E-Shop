import React from 'react'
import { useSelector } from 'react-redux'


// components
import Star from '../../../assets/icons/Star.jsx'

export default function ShortDetails() {

    const product = useSelector(state => state.product.detailedProduct)
    const rating = Array(Math.floor(product.rating)).fill(Math.floor(product.rating))

    console.log(product);
    

  return (
    <div className='w-full'>

        {/* rating/star */}
        <div className="flex items-center ">
            <ul className='flex '>
                {rating.map((item , index) => {
                    return (
                       <li key={index}> <Star customStar={`text-[#FED550]`} width={24} height={24} /></li>
                    )
                })}
            </ul>
            <p className="ml-2 font-montserrat font-normal text-xl leading-[30px] text-primary">({product.rating})</p>
        </div>

        {/* product mane and price */}
        <div className="w-full">
            <h2 className="font-poppins font-semibold text-[36px] leading-[46px] text-primary mt-4 pb-6 border-b border-tertary ">
                {product.title}
            </h2>

            <h3 className="mt-6">
                <span className="font-poppins font-bold text-[56px] leading-[68px] text-brand ">${product.price}</span>
                <del className="font-montserrat font-normal text-[20px] leading-[30px] text-secondery ml-[19px] ">${Math.floor(product.price / (1 - product.discountPercentage / 100))}</del>
            </h3>
        </div>

        {/* description */}
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
            <li className='flex '>
                <p className="font-poppins w-[170px] font-semibold text-xl leading-[30px] text-primary ">Variant</p>
                <div className="grid grid-cols-3 gap-1  ">
                    {product.variants ? product.variants.map((item , index) => {
                        return (
                            <p className={`hover:border-brand hover:text-brand  py-4 px-8 rounded-[5px] border border-tertary font-montserrat font-bold text-base leading-6 text-primary   `} key={index}>{item}</p>
                        )
                    }): 
                    <p className='font-montserrat font-normal text-xl leading-[30px] text-primary '>No variant</p>
                    }
                </div>
            </li>
        </ul>
    </div>
  )
}
