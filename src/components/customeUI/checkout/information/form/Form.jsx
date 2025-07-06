import React, { useEffect, useState } from "react";
import InputField from "./InputField"; 
import TextAreaField from "./TextAreaField";
import Selection from "../../../../common/Selection";

export default function Form() {

    const [firstname , setFirstname] = useState('')
    const [lastname , setLastname] = useState('')
    const [fullname , setFullname] = useState(`${firstname} + ${lastname}`)
    useEffect(() => {
        setFullname(`${firstname} ${lastname}`);
      }, [firstname, lastname]);

    const [phone , setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [address , setAddress] = useState('')
    const [country , setCountry] = useState('')
    const [state , setState] = useState('')
    const [city , setCity] = useState('')
    const [zipcode , setZipcode] = useState('')
    const [note , setNote] = useState('')

    
 
    

  return (
    <form className="flex flex-col gap-8">

      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {/* first name */}
        <InputField onChange={(e) => setFirstname(e.target.value)} title="First Name" placeholder={`Amelia Robert`} />

        {/* last name */}
        <InputField onChange={(e) => setLastname(e.target.value)} title="Last Name" placeholder={`Watson`} />

        {/* phone */}
        <InputField onChange={(e) => setPhone(e.target.value)} title="Phone Number" placeholder={`+123 456 7890`} />

        {/* email */}
        <InputField onChange={(e) => setEmail(e.target.value)} title="Email Address" placeholder={`amelia.watson@eshop.com`} />
      </div>

      {/* address */}
      <InputField onChange={(e) => setAddress(e.target.value)} title="Address" placeholder={`Home Address, Auxiliary St. 12345, Anywhere State`} />
      

      {/* country and state */}
      <div className="grid grid-cols-2 gap-4  ">
        
        {/* country */}
        <div className="">
          <p className={`  font-montserrat font-bold  leading-7.5 flex items-start gap-1  `}>
               Country  
               <span className='text-brand text-2xl '>*</span>
          </p>
          <Selection modalPosition={`top-15 left-0  `} items={["Bangladesh" ,"USA" ,"Ukraine" ,"Australia" ,"Japan"]} setValue={setCountry}   className={[" mt-3 border border-tertary rounded-[10px] py-6 px-8 font-montserrat font-normal text-[24px] leading-7.5 " ]}  />
        </div>
        
        {/* state */}
        <div className="">
          <p className={`  font-montserrat font-bold  leading-7.5 flex items-start gap-1  `}>
               State  
               <span className='text-brand text-2xl '>*</span>
          </p>
          <Selection modalPosition={`top-15 left-0  `} items={["Bangladesh" ,"USA" ,"Ukraine" ,"Australia" ,"Japan"]} setValue={setCountry}   className={[" mt-3 border border-tertary rounded-[10px] py-6 px-8 font-montserrat font-normal text-[24px] leading-7.5 " ]}  />
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">

        {/* city */}
        <div className="">
          <p className={`  font-montserrat font-bold  leading-7.5 flex items-start gap-1  `}>
               City  
               <span className='text-brand text-2xl '>*</span>
          </p>
          <Selection modalPosition={`top-15 left-0  `} items={["Bangladesh" ,"USA" ,"Ukraine" ,"Australia" ,"Japan"]} setValue={setCountry}   className={[" mt-3 border border-tertary rounded-[10px] py-6 px-8 font-montserrat font-normal text-[24px] leading-7.5 " ]}  />
        </div>
 
        {/* zipcode */}
        <InputField onChange={(e) => setZipcode(e.target.value)} title="ZIP Code" placeholder={`555555`}  required={false} />
      </div>

      {/* note */}
      <TextAreaField title={`Order Notes`} placeholder={`Enter your order notes ...`} onChange={(e) => setNote(e.target.value)}  />


    </form>
  );
}
