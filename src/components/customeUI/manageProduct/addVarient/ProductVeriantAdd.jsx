import React, { useState } from 'react'
import ProductInpytFilled from '../addProduct/ProductInpytFilled';

import { FiMinus } from "react-icons/fi";
import ProductColor from './ProductColor';
import MultiImageUpload from './MultiImageUpload';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {notify} from '../../../../redux/slices/toastSlice';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function ProductVeriantAdd({id  , setIsVariant}) {
    


    const dispatch = useDispatch();

    const [uploading , setUploading] = useState(false)
    const [variantInfo , setVariantInfo] = useState({productSize: '' , productQuantity: '' , productPriceWithoutDescount: '' , productDescount: '' , productColor: [] , images: []  })
    
    const handleChangeColors = (colors)=>{
        setVariantInfo({...variantInfo , productColor: colors})
    }


const handleUploadVariant = async () => {
    setUploading(prev => !prev)
  try {
    const formData = new FormData();

    formData.append("productSize", variantInfo.productSize);
    formData.append("productQuantity", variantInfo.productQuantity);
    formData.append("productPriceWithoutDescount", variantInfo.productPriceWithoutDescount);
    formData.append("productDescount", variantInfo.productDescount);
    formData.append("productColor", JSON.stringify(variantInfo.productColor));
    formData.append("productId", id);

    // যদি images file input থেকে আসে
    variantInfo.images.forEach((file) => {
      formData.append("images", file); 
    });
 
    await axios.post( `${import.meta.env.VITE_BASE_URL}/variant/addVariant`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => { 
        setIsVariant(prev => !prev)
        setUploading(prev => !prev)
        setVariantInfo({productSize: '' , productQuantity: '' , productPriceWithoutDescount: '' , productDescount: '' , productColor: [] , images: []  })
        dispatch(notify({isShow: true , message:  res.data.message , success:  res.data.success}))
        setTimeout(() => {
          dispatch(notify({isShow: false , message:  "" , success:  false}))
        } , 3500); 
    })
    .catch((err) => { 
        setIsVariant(prev => !prev)
        setUploading(prev => !prev)
      if(err.response.data){
          dispatch(notify({isShow: true , message:  err.response.data.message , success:  false}))
          setTimeout(() => {
            dispatch(notify({isShow: false , message:  "" , success:  false}))
          }, 3500);
      }
      
    })


  } catch (err) { 
    setIsVariant(prev => !prev)
    setUploading(prev => !prev)
    if(err?.response?.data){
        dispatch(notify({isShow: true , message:  err.response.data.message , success:  false}))
        setTimeout(() => {
          dispatch(notify({isShow: false , message:  "" , success:  false}))
        }, 3500);
    }
    
  }
};


  return (
    <div className=' border p-3 rounded-lg border-tertary fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[600px] bg-white    '>
        <h2 className="font-bold flex justify-between items-center mb-3    ">
            <span>{'variantTitle'}</span>
            <button onClick={()=> setIsVariant(prev => !prev)} type="button" className='p-1 cursor-pointer'><FiMinus/></button>
        </h2>
        <div className="flex items-center gap-3 relative">
            <ProductInpytFilled value={variantInfo.productSize} onChange={(e)=> setVariantInfo({...variantInfo , productSize: e.target.value})}   type="text" title="Size" name="productSize"  />
            <ProductInpytFilled value={variantInfo.productQuantity}  onChange={(e)=> setVariantInfo({...variantInfo , productQuantity: e.target.value})}  type="number" title="Quantity" name="productQuantity"  /> 
        </div>
        <div className="flex items-center gap-3 relative"> 
            <ProductInpytFilled value={variantInfo.productPriceWithoutDescount}  onChange={(e)=> setVariantInfo({...variantInfo , productPriceWithoutDescount: e.target.value})}  type="number" title="Price without descount" name="productQuantity"  />
            <ProductInpytFilled value={variantInfo.productDescount}  onChange={(e)=> setVariantInfo({...variantInfo , productDescount: e.target.value})}  type="number" title="Descount" name="productQuantity"  />
        </div>

        <ProductColor  onChange={(colors)=> handleChangeColors(colors)}  />

        <MultiImageUpload  setVariantInfo={setVariantInfo} variantInfo={variantInfo} />

        <div className="flex">
            
        <button 
            onClick={handleUploadVariant}
            type="button"
            className="text-white flex items-center justify-center gap-2 cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <span>Submit</span>
            {uploading && <AiOutlineLoading3Quarters className="animate-spin    "/>}

        </button>
        </div>
 
    </div>
  )
}
