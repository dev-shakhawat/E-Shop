import React, { useEffect, useState } from 'react'

// icons
import { RxMinus } from "react-icons/rx";
import { HiPlus } from "react-icons/hi2";
import Delete from '../../../assets/icons/Delete';
import Share from '../../../assets/icons/Share';
import { useDispatch } from 'react-redux';
import { checkoutPrice } from '../../../redux/slices/productSlice';


export default function CartItem({data}) {

    const {thumbnail , title , price , category , variant , minimumOrderQuantity } = data;


    // quantity
    const [quantity , setQuantity] = useState(data.totalquantity || minimumOrderQuantity);

    // subtotal price
    const [subtotalPrice , setSubtotalPrice] = useState(0);

    const dispatch = useDispatch();

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


    useEffect(() => {
        setSubtotalPrice(0)
        const allcarts = JSON.parse(localStorage.getItem('cart')) ;
        allcarts.map(item => {
            setSubtotalPrice(prev => prev + item.totalPrice)
        })
        
    } , [quantity])

    useEffect(() => {
        
        dispatch(checkoutPrice(subtotalPrice))

        
    } , [subtotalPrice])

    
    
    
    
  return (
    <div className='flex group border border-transparent hover:border-tertary rounded-[10px] md:rounded-[15px] lg:rounded-[25px] relative overflow-hidden '>

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

        <div className="flex  flex-1 items-center ">
            {/* product image */}
            <img src={thumbnail} alt="thumbnail" className='lg:max-w-[237px] lg:max-h-[214px]      '/>  

            {/* product details */}
            <div className="flex justify-between w-full   ">
                <div className="">
                    <p className=" font-montserrat font-normal text-sm leading-5 text-primary  ">{category}</p>
                    <h3 className=" font-poppins font-semibold 2xl:text-xl xl:text-[18px] lg:text-base   text-sm  leading-[30px] text-primary 2xl:mt-4 lg:mt-3 md:mt-2 mt-1   group-hover:text-brand group-hover:underline duration-300  ">{title}</h3>
                    {variant && 
                    <h4 className="flex 2xl:mt-11.5 xl:mt-9 lg:mt-7 md:mt-5 sm:mt-4 mt-2 ">
                            <p className="">Variant:</p>
                           <span className=" font-montserrat font-normal text-base leading-[24px] text-primary  ">{variant}</span>
                    </h4>}
                </div>
            </div> 

        </div>

        <div className="flex-1 grid grid-cols-3   ">
            {/* product price */}
            <p className="  font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs my-auto leading-[30px] text-primary  ">${price}</p>

            {/* quantity button */}
            <div className=" flex items-center    ">
        
                    {/* minus btn */}
                    <button type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><RxMinus /></button>

                    {/* quantity */}
                    <p className="w-[40px] h-[40px] grid place-items-center bg-[#F4F4F4] rounded-full font-montserrat font-bold 2xl:text-base lg:text-base sm:text-sm text-xs leading-[24px] text-primary ">{quantity}</p>

                    {/* plus btn */}
                    <button onClick={() => increment(data)} type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><HiPlus /></button>
            </div>

            {/* total price */}
            <p className=" font-montserrat font-semibold text-xl my-auto leading-[30px] text-primary  ">${(price  * quantity).toFixed(2)}</p>

        </div>


    </div>
  )
}
