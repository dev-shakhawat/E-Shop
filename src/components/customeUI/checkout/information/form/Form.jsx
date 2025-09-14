import React, { useEffect, useState } from "react";
import InputField from "./InputField"; 
import TextAreaField from "./TextAreaField";
import Selection from "../../../../common/Selection";

export default function Form({ setBillingAddress}) {

  
    const [country , setCountry] = useState('') 
    const [state , setState] = useState('')
    const [city , setCity] = useState('')

    useEffect(() => {
      setBillingAddress(prev => ({...prev , country , state , city}))
    }, [country , state , city])
 
    

  return (
    <form className="flex flex-col gap-8">

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {/* first name */}
        <InputField onChange={(e) => setBillingAddress(prev => ({...prev , firstName: e.target.value}))} title="First Name" placeholder={`Amelia Robert`} />

        {/* last name */}
        <InputField onChange={(e) => setBillingAddress(prev => ({...prev , lastName: e.target.value}))} title="Last Name" placeholder={`Watson`} />

        {/* phone */}
        <InputField type={'number'} onChange={(e) => setBillingAddress(prev => ({...prev , phone: e.target.value}))} title="Phone Number" placeholder={`+123 456 7890`} />

        {/* email */}
        <InputField type={'email'} onChange={(e) => setBillingAddress(prev => ({...prev , email: e.target.value}))} title="Email Address" placeholder={`amelia.watson@eshop.com`} />
      </div>

      {/* address */}
      <InputField onChange={(e) => setBillingAddress(prev => ({...prev , address: e.target.value}))} title="Address" placeholder={`Home Address, Auxiliary St. 12345, Anywhere State`} />
      

 

      {/*  */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">

        {/* city */}
        <div className="">
          <p className={`  font-montserrat font-bold  leading-7.5 flex items-start gap-1  `}>
               City  
               <span className='text-brand text-2xl '>*</span>
          </p>
          <Selection  modalPosition={`top-15 left-0  `} items={["Bangladesh" ,"USA" ,"Ukraine" ,"Australia" ,"Japan"]} setValue={setCity}   className={[" mt-3 border border-tertary rounded-[10px] py-6 px-8 font-montserrat font-normal text-[24px] leading-7.5 " ]}  />
        </div>
 
        {/* zipcode */}
        <InputField type={'number'} onChange={(e) => setBillingAddress(prev => ({...prev , zipcode: e.target.value}))} title="ZIP Code" placeholder={`555555`}  required={false} />
      </div>

      {/* note */}
      <TextAreaField title={`Order Notes`} placeholder={`Enter your order notes ...`} onChange={(e) => setBillingAddress( prev => ({...prev , note: e.target.value}))}  />


    </form>
  );
}
