import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddedProductCart from './AddedProductCart'

export default function AllProduct() {

  const [allProduct , setAllProduct] = useState([])

 
  // fetch all products added by user
  async function fetchAllProduct () {
      axios.get(`${import.meta.env.VITE_BASE_URL}/product/userProduct` , {withCredentials: true})
      .then((res) => {
        setAllProduct(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect( () => { 
    fetchAllProduct()
  } , [])

  return (
    <div className='flex flex-col gap-2 mt-2 duration-200 max-h-135 overflow-y-scroll '>
      
      {allProduct.length > 0  ?
       allProduct.map((item , index) => {
         return <AddedProductCart key={index} productInfo={item} fetchAllProduct={fetchAllProduct}  />
       })
       :
       <div className=' h-[50vh] grid place-items-center    '>
        <div className="text-center">
          <h2 className='font-poppins font-semibold text-[24px] leading-7.5 text-[#303030]   '>Offs.. sorry</h2>
          <p className="">You have not added any product.</p>
        </div>
       </div> 
       }
    </div>
  )
}
