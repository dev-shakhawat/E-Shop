import React from 'react'


// icons
import { FiEdit2 } from "react-icons/fi";
import { CiTrash } from "react-icons/ci";
import axios from 'axios';

// redux
import { useDispatch } from 'react-redux'; 
import notify from '../../../../redux/slices/notificationSlice';


export default function AddedProductCart({productInfo , fetchAllProduct}) {

    const dispatch = useDispatch();
    
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
    
  return (
    <div className='p-2 rounded-md flex items-center justify-between border border-tertary/50 duration-200      '>
        
        {/* image */}
        <img src={productInfo.thumbnail} alt={productInfo.thumbnail} className='w-35 h-20 rounded-md  object-contain  '/>

        {/* description */}
        <div className="flex-1 ml-10">

            {/* title */}
            <h2 className=' font-montserrat font-semibold text-base leading-0 w-100 text-ellipsis   '>{productInfo.title}</h2>
            <span className='text-brand text-xs capitalize  '>{productInfo.brand}</span>
            
            {/* description */}
            <p className=" w-100 line-clamp-1 text-ellipsis    ">{productInfo.description}</p>

            {/* price */}
            <p className=" font-montserrat font-semibold text-sm leading-3 text-brand    ">BDT : {productInfo.price.currentPrice}</p>

        </div>

        <div className="">
            <button type="button" className=' cursor-pointer py-1 px-3 bg-tertary/50 hover:bg-brand duration-300 text-primary hover:text-white rounded-md       '   ><FiEdit2/></button>
            <button onClick={handleDelete} type="button" className='ml-1 cursor-pointer py-1 px-3 bg-tertary/50 hover:bg-brand duration-300 text-primary hover:text-white rounded-md       '   ><CiTrash/></button>
        </div>

    </div>
  )
}
