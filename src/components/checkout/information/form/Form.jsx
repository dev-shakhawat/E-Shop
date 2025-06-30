import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";

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

    console.log(note);
    
 
    

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


      {/*  */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {/* country */}
        <SelectField onChange={(e) => setCountry(e.target.value)} title={`Country`} list={["Indonesia", "Afghanistan", "Albania", "Algeria",  "Andorra", "Angola",]}  />
        
        {/* state */}
        <SelectField onChange={(e) => setState(e.target.value)} title={`State`} list={[  "Aceh",  "Bali",  "Banten", "Central Java", "Central Kalimantan", "Central Sulawesi",  "East Java",]}  />
        
        {/* city */}
        <SelectField onChange={(e) => setCity(e.target.value)} title={`City`} list={["Jakarta", "Surabaya",  "Bekasi", "Bandung", "Medan", "Depok", "Tangerang", "Palembang",  "Semarang", "Makassar",]}  />
        
        {/* zipcode */}
        <InputField onChange={(e) => setZipcode(e.target.value)} title="ZIP Code" placeholder={`555555`}  required={false} />
      </div>

      {/* note */}
      <TextAreaField title={`Order Notes`} placeholder={`Enter your order notes ...`} onChange={(e) => setNote(e.target.value)}  />


    </form>
  );
}
