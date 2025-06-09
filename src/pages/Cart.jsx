import React from 'react';

// components
import Container from '../components/common/Container';
import CartItem from '../components/carts/CartItem';
import Breadcrump from '../components/common/Breadcrumb';
import { useSelector } from 'react-redux';

function Cart() {
    const {carts} = useSelector(state => state.product)
    console.log(carts);
    
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
            </Container>
        </div>
    );
}

export default Cart;