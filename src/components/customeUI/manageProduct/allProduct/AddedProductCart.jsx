import React, { useState } from 'react'
import axios from 'axios';


// icons
import { FiEdit2 } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";
import { BsArrowDownCircleFill } from "react-icons/bs";

// redux
import { useDispatch } from 'react-redux'; 
import notify from '../../../../redux/slices/toastSlice';
import ProductVeriantAdd from '../addVarient/ProductVeriantAdd';
import VariantCard from './VariantCard';


export default function AddedProductCart({productInfo , fetchAllProduct}) {

    const dispatch = useDispatch();
    const [isVariant , setIsVariant] = useState(false); 
    const [variantShow , setVariantShow] = useState(false);  
    
 
    
    
    const handleDelete = ()=>{ 
        
        axios.delete(`${import.meta.env.VITE_BASE_URL}/product/delete/${productInfo._id}` , {withCredentials: true})
        .then((res) => {
          fetchAllProduct()
        })
        .catch((error) => {
          dispatch(notify({isShow: true , message:  error.response.data.message , success:  error.response.data.success}))

          setTimeout(() => {
            dispatch(notify({isShow: false , message:  "" , success:  false}))
          }, 1500);
        })
    }

    const handleVariantShow = (id)=>{
        setVariantShow(prev => !prev) 
    }


    
  return (
      <div className='border border-tertary/50 duration-200 p-2 rounded-md'>
        <div className='  flex items-center justify-between       '>

          {isVariant && <ProductVeriantAdd id={productInfo._id} fetchAllProduct={fetchAllProduct} isVariant={isVariant} setIsVariant={ setIsVariant } /> }
            
            {/* image */}
            <img src={productInfo.thumbnail} alt={productInfo.thumbnail} className='w-35 h-20 rounded-md  object-contain  '/>

            {/* description */}
            <div className="flex-1 ml-10">

                {/* title */}
                <h2 className=' font-montserrat font-semibold text-base leading-5 w-100 text-ellipsis line-clamp-1   '>{productInfo.title}</h2>
                <span className='text-brand text-xs capitalize  '>{productInfo.brand}</span>
                
                {/* description */}
                <p className=" w-100 line-clamp-1 text-ellipsis    ">{productInfo.description}</p>

                {/* price */}
                <p className=" font-montserrat font-semibold text-sm leading-3 text-brand    ">BDT : {productInfo.price.currentPrice}</p>

            </div>
            
            <div className="">
              <div className="flex items-center gap-1">
                  <button onClick={()=>setIsVariant(true)} type="button" className=' cursor-pointer py-1 px-3 bg-tertary/50 hover:bg-brand duration-300 text-primary hover:text-white rounded-md       '   ><IoAddCircleOutline/></button>
                  <button type="button" className=' cursor-pointer py-1 px-3 bg-tertary/50 hover:bg-brand duration-300 text-primary hover:text-white rounded-md       '   ><FiEdit2/></button>
                  <button onClick={handleDelete} type="button" className='  cursor-pointer py-1 px-3 bg-tertary/50 hover:bg-brand duration-300 text-primary hover:text-white rounded-md       '   ><CiTrash/></button>
              </div> 

              {/* variant button */}
              <button onClick={()=> handleVariantShow(productInfo)} type="button" className='flex  items-center gap-2 mt-2 cursor-pointer   '>
                <span>{ variantShow ? "Hide all variants" : 'View all variants'}</span>
                <BsArrowDownCircleFill className={variantShow ? "rotate-180 duration-300" : "rotate-0 duration-300"} />
              </button>
            </div>


        </div>

        {/* variants */}
        {variantShow &&   
        <div className="mt-2 flex items-center gap-2 flex-col   ">
          {productInfo.variants.length > 0 ? productInfo.variants.map((varient , index)=> (
              <VariantCard fetchAllProduct={fetchAllProduct} key={varient._id} varient={varient}/> 
          ))
        :
        <p>No variant found for this product </p>
        }
        </div>}


      </div>
  )
}
