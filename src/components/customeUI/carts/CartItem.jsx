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
    <div className='  flex group border border-transparent hover:border-tertary rounded-[10px] md:rounded-[15px] lg:rounded-[25px] relative overflow-hidden '>

        {/* cart delete/share */}
        <div className=" flex flex-col xl:gap-7 lg:gap-5 md:gap-3 gap-2 absolute top-1/2 -translate-y-[50%]  -right-30  group-hover:lg:right-3 
        group-hover:md:right-2 group-hover:right-1 duration-300 ">
            <div
                className="duration-300   xl:w-[64px] md:w-[40px]  w-8    xl:h-[64px] md:h-[40px]  h-8    bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand cursor-pointer  ">
                <Delete className={`lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]  `} />
            </div>
            <div
                className="duration-300  xl:w-[64px] md:w-[40px] w-8     xl:h-[64px] md:h-[40px] h-8   bg-white hover:bg-brand group-hover:text-brand group-[.group]:hover:text-white grid place-items-center rounded-full border border-brand cursor-pointer  ">
                <Share className={` lg:w-[24px] lg:h-[24px] w-[20px] h-[20px]   `}/>
            </div>
        </div>

        <div className="flex  flex-3 md:flex-1 items-center ">
            {/* product image */}
            <img src={thumbnail} alt="thumbnail" className='lg:max-w-[237px] w-[120px] md:w-[200px]     '/>  

            {/* product details */}
            <div className="flex justify-between w-full   ">
                <div className="">
                    <p className=" font-montserrat font-normal text-sm leading-5 text-primary  ">{category}</p>
                    <h3 className=" font-poppins font-semibold 2xl:text-xl xl:text-[18px] lg:text-base   text-sm  leading-[30px] text-primary 2xl:mt-4 lg:mt-3 md:mt-2 mt-0   group-hover:text-brand group-hover:underline duration-300  ">{title}</h3>

                    {/* product price */}
                    <p className="  font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs my-auto md:leading-[30px] text-primary md:hidden ">${price}</p>

                    {variant && 
                    <h4 className="flex 2xl:mt-11.5 xl:mt-9 lg:mt-7 md:mt-5 sm:mt-4 mt-2 ">
                            <p className="">Variant:</p>
                           <span className=" font-montserrat font-normal text-base leading-[24px] text-primary  ">{variant}</span>
                    </h4>}
                </div>
            </div> 

        </div>

        <div className=" flex-2 md:flex-1 grid md:grid-cols-3 grid-cols-2   ">
            {/* product price */}
            <p className=" md:inline-block hidden font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs my-auto leading-[30px] text-primary  ">${price}</p>

            {/* quantity button */}
            <div className=" flex items-center    ">
        
                    {/* minus btn */}
                    <button type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><RxMinus /></button>

                    {/* quantity */}
                    <p className="md:min-w-[40px] min-w-[30px]  md:min-h-[40px] min-h-[30px]  grid place-items-center bg-[#F4F4F4] rounded-full font-montserrat font-bold 2xl:text-base lg:text-base sm:text-sm text-xs leading-[24px] text-primary ">{quantity}</p>

                    {/* plus btn */}
                    <button onClick={() => increment(data)} type='button' className='w-[40px] h-[40px] grid place-items-center cursor-pointer  ' ><HiPlus  /></button>
            </div>

            {/* total price */}
            <p className="ml-2 md:ml-0 font-montserrat font-semibold 2xl:text-xl xl:text-[18px] lg:text-base md:text-sm text-xs my-auto leading-[30px] text-primary  "> <span className='hidden md:inline-block'>$</span>
                {(price  * quantity).toFixed(2)}
            </p>

        </div>


    </div>
  )
}
