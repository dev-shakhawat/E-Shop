import React, { useState } from 'react'

// icons
import { RxMinus } from "react-icons/rx";
import { HiPlus } from "react-icons/hi2";
import Delete from '../../assets/icons/Delete';
import Share from '../../assets/icons/Share';


export default function CartItem({data}) {

    const {thumbnail , title , price , category , variant , minimumOrderQuantity } = data;


    // quantity
    const [quantity , setQuantity] = useState(data.totalquantity || minimumOrderQuantity);

    const increment = (product) => {
        let updatedQuantity = quantity + 1;
    
        
        const allcarts = JSON.parse(localStorage.getItem('cart')) ;
    
        const updatedCart = allcarts.map(item => {
            if (item.id === data.id) {
                return {...item , totalquantity: updatedQuantity , totalPrice: updatedQuantity * price , };
            }
            return item;
        });
    
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setQuantity(updatedQuantity);
    };
    
    
    
  return (
    <div className='flex group border pt-6 pl-[36px] border-transparent hover:border-tertary rounded-[10px] md:rounded-[15px] lg:rounded-[25px] relative overflow-hidden '>

        {/* cart delete/share */}
        <div className=" flex flex-col gap-[38px] absolute top-1/2 -translate-y-[50%] -right-30 group-hover:right-3 duration-300 ">
            <div
                className="duration-300 w-[30px] md:w-[64px] h-[30px] md:h-[64px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand cursor-pointer  ">
                <Delete className={`w-[24px] h-[24px]   `} />
            </div>
            <div
                className="duration-300 w-[30px] md:w-[64px] h-[30px] md:h-[64px] bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand cursor-pointer  ">
                <Share className={`  w-[24px] h-[24px]   `}/>
            </div>
        </div>

        {/* product image */}
        <img src={thumbnail} alt="thumbnail" className='lg:max-w-[237px] lg:max-h-[214px]    '/>

        {/* product details */}
        <div className="mt-10 ml-[62px] ">
            <p className=" font-montserrat font-normal text-sm leading-5 text-primary  ">{category}</p>
            <h3 className=" font-poppins font-semibold text-xl leading-[30px] text-primary mt-4  w-[314px] group-hover:text-brand group-hover:underline duration-300  ">{title}</h3>
            {variant && 
            <h4 className="flex mt-11.5 ">
                <p className="">Variant:</p>
                <span className=" font-montserrat font-normal text-base leading-[24px] text-primary  ">{variant}</span>
            </h4>}
        </div>



        <div className="flex gap-[190px] ml-auto mr-[260px]">

            {/* product price */}
            <p className=" font-montserrat font-semibold text-xl my-auto leading-[30px] text-primary  ">${price}</p>


            {/* quantity button */}
            <div className="flex items-center ">
    
                {/* minus btn */}
                <button type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><RxMinus /></button>

                {/* quantity */}
                <p className="w-[40px] h-[40px] grid place-items-center bg-[#F4F4F4] rounded-full font-montserrat font-bold text-base leading-[24px] text-primary ">{quantity}</p>

                {/* plus btn */}
                <button onClick={() => increment(data)} type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><HiPlus /></button>
            </div>


            {/* total price */}
            <p className=" font-montserrat font-semibold text-xl my-auto leading-[30px] text-primary  ">${price  * quantity}</p>
        </div>

    </div>
  )
}
