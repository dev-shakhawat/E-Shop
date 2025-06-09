import React from 'react';
import { useSelector } from 'react-redux';

// components
import Container from '../components/common/Container';
import CartItem from '../components/carts/CartItem';
import Breadcrump from '../components/common/Breadcrumb';
import Facility from '../components/facility/Facility';

function Cart() {
    const {carts} = useSelector(state => state.product);
    const {subtotalPrice} = useSelector(state => state.product);
    
    return (
        <div>
            <Container>

                {/* Breadcrumb */}
                <Breadcrump/>

                {/* title */}
                <h2 className=" font-poppins font-bold text-[56px] leading-[68px] text-primary  ">Your Cart</h2>

                {/* cart header */}
                <div className="flex items-center justify-between py-8 bg-[#f4f4f4] mt-7 rounded-[15px] ">
                    <span className='uppercase font-montserrat font-bold text-base leading-[24px] text-primary ml-[56px] '>product</span>

                    <div className="flex gap-[190px] mr-[256px] ">
                       <span className='uppercase font-montserrat font-bold text-base leading-[24px] text-primary ml-[56px] '>price</span>
                       <span className='uppercase font-montserrat font-bold text-base leading-[24px] text-primary ml-[56px] '>qty</span>
                       <span className='uppercase font-montserrat font-bold text-base leading-[24px] text-primary ml-[56px] '>total</span>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2  ">
                    {carts.length > 0 && carts.map((item , index) => {
                        return  <CartItem key={index} data={item} />
                    })}
                </div>
                
                {/* cart footer */}
                <div className="mt-12 flex items-center justify-between gap-[284px] ">

                    {/* coupon */}
                    <div className="flex-1 flex items-center justify-between py-8 px-9 border border-tertary rounded-[15px] ">
                      <input type="text" placeholder='Enter coupon code (ex: FRISTPAY) ' className='w-full outline-0 pr-5 font-montserrat font-normal text-base leading-[24px] text-primary/90 '/>
                      <button type="button" className=' font-poppins font-semibold text-xl leading-[30px] underline text-primary w-[170px]  '>Apply Code</button>
                    </div> 


                    {/* total cost */}
                    <div className="flex-1 flex items-center justify-between py-8 px-9 bg-[#F4F4F4] rounded-[15px] ">
                        <h2 className=" font-montserrat font-bold text-base leading-[24px] text-primary uppercase  ">sub total</h2>
                        <h2 className=" font-poppins font-semibold text-[24px] leading-[30px] text-brand   ">
                            ${subtotalPrice}
                            <span className='font-montserrat font-normal text-sm leading-[20px] text-primary ml-[23px] '>( excl. shipping fee )</span>
                        </h2>
                    </div> 
                </div>


                {/* cart options */}
                <div className="flex justify-end mt-8 ">
                    <button type="button" className='cursor-pointer font-poppins font-semibold text-primary text-xl leading-[30px] py-4 px-10 hover:text-white hover:bg-brand rounded-[10px] duration-300 ' >Continue Shopping</button>
                    <button type="button" className='cursor-pointer font-poppins font-semibold text-primary text-xl leading-[30px] py-4 px-10 hover:text-white hover:bg-brand rounded-[10px] duration-300 ' >Update Cart</button>
                </div>

            </Container>

                {/* facilities */}
                <div className="mt-25 py-20 border-t border-tertary ">
                    <Facility/>
                </div>
        </div>
    );
}

export default Cart;