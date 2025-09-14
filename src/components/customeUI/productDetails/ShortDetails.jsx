import React from 'react'
import { useSelector } from 'react-redux'


// components
import Star from '../../../assets/icons/Star.jsx'

export default function ShortDetails({onlyDescription = false , product , selectedVariant , setSelectedVariant , variants}) {
 

 
  return (
    <div className='w-full '>

        {/* rating/star */}
        {!onlyDescription &&  
        <div className="flex items-center ">
            <ul className='flex '>
                {product?.ratting &&  product?.rating.map((item , index) => {
                    return (
                       <li key={index}> <Star customStar={`text-[#FED550]`} width={24} height={24} /></li>
                    )
                })}
            </ul>
            {product?.ratting &&
            <p className="ml-2 detlOption text-primary">({product?.rating})</p> }
        </div>}

        {/* product mane and price */}
        {!onlyDescription &&
        <div className="w-full">
            <h2 className="cmnHeadTwo text-primary  2xl:mt-4 xl:mt-3 lg:mt-2 md:mt-1 mt-0 2xl:pb-6 lg:pb-4 md:pb-3 pb-1  border-b border-tertary ">
                {product?.title}
            </h2>

            <h3 className="2xl:mt-6 lg:mt-4 md:mt-3 mt-1 ">
                <span className="font-poppins font-bold 2xl:text-[56px] xl:text-[50px] lg:text-[40px] md:text-[30px] text-[25px] 2xl:leading-[68px] xl:leading-15 lg:leading-12 md:leading-10 leading-8 text-brand ">BDT {selectedVariant?.price?.currentPrice}</span>
                
                { selectedVariant?.price?.discount &&  <del className="font-montserrat font-normal text-[20px] leading-[30px] text-secondery ml-[19px] ">${selectedVariant?.price?.prevPrice}</del>}
            </h3>
        </div>}

        {/* description */} 
        <ul className="2xl:mt-12 xl:mt-10 lg:mt-8 md:mt-6 mt-4 flex flex-col 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 gap-0  ">
            <li className='flex '>
                <p className="detlOptionHead text-primary ">Brand</p>
                <p className="detlOption text-primary  ">{product?.brand || "No brand"}</p>
            </li>
            <li className='flex '>
                <p className="detlOptionHead text-primary ">Size</p>
                <p className="detlOption text-primary  ">{selectedVariant?.size} </p>
            </li>
            <li className='flex '>
                <p className="detlOptionHead text-primary ">Weight</p>
                <p className="detlOption text-primary  ">{selectedVariant?.weight || "Not calculated"} </p>
            </li>
            <li className='flex '>
                <p className="detlOptionHead text-primary ">Delevery</p>
                <p className="detlOption text-primary  ">{product?.delivery || "Worldwide"} </p>
            </li>
            <li className='flex '>
                <p className="detlOptionHead text-primary ">Return</p>
                <p className="detlOption text-primary  ">{product?.returnPolicy || "No Return"} </p>
            </li> 
            <li className='flex '>
                <p className="detlOptionHead text-primary ">Variant</p>
                <div className="grid grid-cols-3 gap-1  ">
                    {product?.variants ? product?.variants.map((item , index) => {
                        return (
                            <div 
                            onClick={() => setSelectedVariant(item)} 
                            className={`
                                cursor-pointer hover:border-brand hover:text-brand  
                                py-4 px-5 rounded-[5px] border font-montserrat font-bold text-base leading-6  
                                ${selectedVariant?._id?.toString() === item?._id?.toString() ? "border-brand text-brand" : "border-tertary text-primary "}
                            `}
                            key={index}
                            >
                             {item.size} 
                            </div>
                        )
                    }): 
                    <p className='detlOption text-primary '>No variant</p>
                    }
                </div>
            </li>
        </ul>
    </div>
  )
}
