import React from "react";

export default function SelectField({title , required = true  , onChange , list = []}) {




  return (
    <div className="">
      {/* title */}
      <p className=" font-montserrat font-bold text-xl leading-7.5 flex items-start gap-1  ">
        {title}
        {required && <span className="text-brand text-2xl ">*</span>}
      </p>

      {/* selection */}
      <select onChange={onChange} name={title} id={title} className="w-full mt-3 cursor-pointer outline-0 py-6 px-8 border border-tertary rounded-[10px] font-montserrat font-normal text-[24px] leading-7.5  ">
        {list.map((item , index) => (
            <option value={item} key={index} selected={index === 0} >{item}</option> 
        ))}
      </select>
      
    </div>
  );
}
