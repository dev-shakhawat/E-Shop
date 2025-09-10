import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// components
import Container from '../components/common/Container';
import CartItem from '../components/customeUI/carts/CartItem';
import Breadcrump from '../components/common/Breadcrumb';
import Facility from '../components/customeUI/facility/Facility';
import { Link } from 'react-router';
import axios from 'axios';

function Cart() { 

    const [allcarts , setAllcarts] = useState([])
    const user = useSelector(state => state.user.user)
 
    

    async function getCarts(){
            
            try{
                const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/cart/getcarts` , {withCredentials: true}) 

                setAllcarts(res.data.data)

                

            }catch(err){
                console.log(err);
            }
        }

    useEffect(() => {
        
        getCarts()

    },[])

    console.log(allcarts);
    
    
    return (
        <div>
            <Container>

                {/* Breadcrumb */}
                <Breadcrump lastOne={"Cart"}/>

                {/* title */}
                <h2 className=" font-poppins font-bold 2xl:text-[56px] xl:text-[50px] lg:text-[44px] md:text-[38px] sm:text-[32px] text-[26px]    2xl:leading-[68px]  xl:leading-[62px] lg:leading-[56px] md:leading-[50px] sm:leading-[44px] leading-[38px]   text-primary  ">Your Cart</h2>

                {/* cart header */}
                <div className="flex items-center 2xl:py-8 xl:py-6 lg:py-5 md:py-4 py-2   bg-[#f4f4f4] 2xl:mt-7  xl:mt-5 lg:mt-4 md:mt-3 mt-2    lg:rounded-[15px] rounded-md "> 
                    <div className="md:flex-1 flex-3 ">
                      <span className='acrtTableHead md:ml-20 ml-2 '>product</span>
                    </div>
                    <div className="md:flex-1 flex-2 grid grid-cols-3 ">
                        <span className='acrtTableHead md:inline-block hidden  '>price</span>
                        <span className='acrtTableHead   '>qty</span>
                        <span className='acrtTableHead   '>total</span> 
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-2  ">
                    {allcarts.length > 0 ? allcarts.map((cart , i) => <CartItem getCarts={getCarts} key={i} cart={cart} />) : "Your cart is empty"} 
                </div>
                
                {/* cart footer */}
                <div className="2xl:mt-12 xl:mt-10 lg:mt-8 md:mt-6 mt-4 lg:flex items-center justify-between gap-[284px] ">

                    {/* coupon */}
                    <div className=" relative  flex-1 flex items-center justify-between 2xl:py-8 xl:py-7 lg:py-6 md:py-5 py-2 2xl:px-9 xl:px-8 lg:px-7 md:px-6 px-4   border border-tertary 2xl:rounded-[15px] lg:rounded-[10px] rounded-[5px] ">
                      <input type="text" placeholder='Enter coupon code (ex: FRISTPAY) ' className='w-full outline-0 2xl:pr-5 xl:pr-4 lg:pr-3 md:pr-2 pr-1 font-montserrat font-normal 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs leading-[24px] text-primary/90 '/>
                      <button type="button" className=' font-poppins 2xl:font-semibold lg:font-semibold font-normal  2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs leading-[30px] underline text-primary xl:w-[170px] absolute right-2 md:sticky  '>Apply Code</button>
                    </div> 


                    {/* total cost */}
                    <div className="flex-1 flex items-center justify-between 2xl:py-8 xl:py-6 lg:py-4 md:py-2 py-1    2xl:px-9 xl:px-8 lg:px-7 md:px-6 px-4 bg-[#F4F4F4] 2xl:rounded-[15px] lg:rounded-[10px] rounded-[5px] mt-2 md:mt-0 ">
                        <h2 className=" font-montserrat 2xl:font-bold lg:font-semibold font-normal 2xl:text-base lg:text-sm text-xs leading-[24px] text-primary uppercase  ">sub total</h2>
                        <h2 className=" font-poppins lg:font-semibold font-normal 2xl:text-[24px] xl:text-xl lg:text-base md:text-sm   text-xs leading-[30px] text-brand   ">
                            BDT {user?.subTotal}
                            <span className='font-montserrat font-normal text-sm leading-[20px] text-primary 2xl:ml-[23px] xl:ml-5 lg:ml-4 md:ml-3 ml-2  '>( excl. shipping fee )</span>
                        </h2>
                    </div> 
                </div>

                {/* cart options */}
                <div className="flex flex-col md:flex-row justify-end 2xl:mt-8 lg:mt-6 md:mt-4 mt-2 ">
                    <Link to="/allproduct" className='w-full md:w-fit cartButton cursor-pointer' >Continue Shopping</Link>
                    <Link to={"/checkout"}  className='w-full md:w-fit cartButton inline-block ' >Update Cart</Link>
                </div>

            </Container>

                {/* facilities */}
                <div className="2xl:mt-25 xl:mt-20 lg:mt-16 md:mt-12 mt-5 2xl:py-20 xl:py-16 lg:py-12 md:py-10 py-5 border-t border-tertary ">
                    <Facility/>
                </div>
        </div>
    );
}

export default Cart;