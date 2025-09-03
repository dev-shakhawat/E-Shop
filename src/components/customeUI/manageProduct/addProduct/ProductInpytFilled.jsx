import React from "react";

export default function ProductInpytFilled({type, title  ,name , onChange , value , min , max }) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type}
         min={min}
         max={max}
         step="1"
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none     dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-brand peer"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-brand peer-focus:dark:text-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {title}
      </label>
    </div>
  );
}
