import React, { useState } from 'react'
import ProductInpytFilled from './ProductInpytFilled';

import { FiMinus } from "react-icons/fi";
import ProductColor from './ProductColor';
import MultiImageUpload from './MultiImageUpload';

export default function ProductVeriantAdd({variantTitle , productInfo , setProductInfo , id}) { 
  
    const handleRemoveVarient = () => { 
        setProductInfo({...productInfo , allVeriant: productInfo.allVeriant.filter((item) => item.id !== id)})
    }

    const handleChangeVarient = (id , value , forWhich)=>{
        setProductInfo({...productInfo , allVeriant: productInfo.allVeriant.map((item) => item.id === id ? {...item , [forWhich]: value} : item)})
    }
    

    const handleColors = (tags)=>{ 
        setProductInfo({...productInfo , allVeriant: productInfo.allVeriant.map((item) => item.id === id ? {...item , productColor: tags} : item)})
        
    }
 
 
    
  return (
    <div className=' border p-1 rounded-lg border-tertary '>
        <h2 className="font-bold flex justify-between items-center mb-3    ">
            <span>{variantTitle}</span>
            <button onClick={handleRemoveVarient} type="button" className='p-1 cursor-pointer'><FiMinus/></button>
        </h2>
        <div className="flex items-center gap-3 relative">
            <ProductInpytFilled value={productInfo.allVeriant[id]?.productSize} onChange={(e) => handleChangeVarient(id , e.target.value , "productSize")} type="text" title="Size" name="productSize"  />

            <ProductInpytFilled value={productInfo.allVeriant[id]?.productQuantity} onChange={(e)=> handleChangeVarient(id , e.target.value , "productQuantity")} type="text" title="Quantity" name="productQuantity"  />
        </div>

        <ProductColor onChange={(tags)=> handleColors(tags)}/>

        <MultiImageUpload productInfo={productInfo} setProductInfo={setProductInfo} id={id} />
 
    </div>
  )
}
