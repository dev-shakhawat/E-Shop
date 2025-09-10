import axios from 'axios';
import React from 'react'


// icons
import { CiTrash } from "react-icons/ci";


export default function VariantCard({varient , fetchAllProduct}) { 

    
    const handleDeleteVariant = ()=>{
        
        axios.delete(`${import.meta.env.VITE_BASE_URL}/variant/delete/${varient._id}`)
        .then((res) => {
          fetchAllProduct()
        })
        .catch((error) => {
          console.log(error);
        })
        
    }
    
 
    
  return (
    <div className=' bg-tertary/20 rounded-md w-full flex items-center justify-between p-1   '>

        <div className="grid grid-cols-4   gap-1">
            {varient.images.map((image , index) => (
                <img src={image} alt={image} key={index} className='w-[50px] h-[50px] object-cover '/>
                
            ))}
        </div>

        <div className=""> 
            {/* sizes */}
            <div className="flex">
                <p className="">Size: {varient.size}</p> 
            </div>

           {/* quantity */}
            <div className="flex"> 
                <p className="">Quantity: {varient.quantity}</p> 
            </div>

            {/* colors */}
            <div className="flex gap-1"> 
                <p className="">Colors:</p>
                <p className="flex gap-1 ">  
                    {varient.color.map((color , index) =>  <span key={index}>{color}</span> )}
                </p>
            </div>
        </div>

        {/* price */}
        <div className="">
            <div className="">
                <div className="">Price: <span className='text-brand'>{varient.price.currentPrice}</span> <del className='text-xs text-tertary '>3434</del></div>
                <p className="">Discount: {varient.price.discount} %</p>
            </div>
        </div>

        {/* delete button */}
        <button onClick={handleDeleteVariant} type="button" className=' p-2 bg-tertary/30 cursor-pointer rounded-full    ' ><CiTrash/></button>




    </div>
  )
}
