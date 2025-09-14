import React, { useEffect, useState } from 'react'
import Form from './form/Form'
import Summary from './summary/Summary'
import Question from '../../../../assets/icons/Question'
import { useDispatch } from 'react-redux';
import {notify} from '../../../../redux/slices/toastSlice';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Information({productInfo , setActiveTab}) {


  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    zipcode: '',
    note: '',
  }); 
  const dispatch = useDispatch()  
  const [loading, setLoading] = useState(false);
  const [variantInfo , setVariantInfo] = useState(null)
  

  useEffect(()=>{
    setVariantInfo(JSON.parse(localStorage.getItem('buyNow')))

  },[])
 

  const handleOrder = async () => {
    // basic validation
    if (
      !billingAddress.firstName ||
      !billingAddress.lastName ||
      !billingAddress.phone ||
      !billingAddress.email ||
      !billingAddress.address ||
      !billingAddress.city ||
      !billingAddress.zipcode
    ) {
      dispatch(
        notify({
          isShow: true,
          message: "Please fill all the fields",
          success: false,
        })
      );

      setTimeout(() => {
        dispatch(notify({ isShow: false, message: "", success: false }));
      }, 2000);
      return;
    }

    try {
      setLoading(true);

      // api call
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/shipping/addshipping`,
        { billingAddress , variantInfo } ,{ withCredentials: true}
      );

      if (res.status === 200 || res.status === 201) {
        window.location.replace(res?.data?.url)
        
        

        // reset form
        // setBillingAddress({
        //   firstName: "",
        //   lastName: "",
        //   phone: "",
        //   email: "",
        //   address: "",
        //   city: "",
        //   zipcode: "",
        //   note: "",
        // }); 
      }
    } catch (error) {
      console.error("Order error:", error);

      // backend error message 
      const errMsg =
        error.response?.data?.message || "Something went wrong. Try again!";

      dispatch(
        notify({
          isShow: true,
          message: errMsg,
          success: false,
        })
      );

      setTimeout(() => {
        dispatch(notify({ isShow: false, message: "", success: false }));
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex justify-between   '>
        
        {/* bill details */}
        <div className="w-[58%]   ">
            <h2 className="font-poppins font-semibold text-[36px] leading-[48px] text-primary pb-10 ">Billing Details</h2>
            <Form billingAddress={billingAddress} setBillingAddress={setBillingAddress} />
        </div>


        {/* order summary */}
        <div className=" w-[40%] bg-[#f4f4f4] p-10 rounded-[25px] ">
            <h2 className=" font-semibold text-[24px] leading-[30px] text-[#303030] pb-12  ">Order Summary</h2>
            <Summary title={productInfo?.title} price={productInfo?.price} quantity={productInfo?.quantity} />
            <hr className=' text-[#c3c3c3] my-5   '/> 

            {/* shopping fee */}
            <div className="flex">
                <p className="font-montserrat font-normal text-xl leading-7.5 text-[#303030] flex gap-1.5   ">
                  <span>Shipping Fee</span>
                  <Question/>
                </p>
                <p className="font-poppins font-semibold text-[24px] leading-[30px] text-[#303030] ml-auto  ">BDT: {productInfo?.shippingFee}</p>
            </div>

            {/* order button */}
            <div className="mt-12  bg-white px-5 py-6 rounded-[10px]   ">
              
              <div className="flex items-center justify-between ">
                <h2 className=" font-montserrat font-bold text-4 leading-6 text-primary   ">Total</h2>
                <p className="font-monserrat font-bold text-[20px] leading-7.5 text-primary">BDT: {productInfo?.shippingFee + productInfo?.price}</p>
              </div>

              {/* btn */}
              <button onClick={handleOrder} disabled={loading} type="button" className='commonButton w-full mt-7   '  >Order Now</button>
            </div>
        </div>

    </div>
  )
}
