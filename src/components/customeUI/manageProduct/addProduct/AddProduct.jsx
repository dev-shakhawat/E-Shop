import React, { useState } from "react";
import ProductInpytFilled from "./ProductInpytFilled";



// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
import ProductPrice from "./ProductPrice";
import SingleImageUpload from "./SingleImageUploader";
import axios from "axios";
import { useDispatch } from "react-redux";
import { notify } from "../../../../redux/slices/toastSlice";



export default function AddProduct() {
 
    
    const [productInfo , setProductInfo] = useState({productName: '' , productDescription: '' ,  withoutDiscount: '' , discount: '' , productBrand: '' , productWarenty: '' , productCategory: ''  , thumbnail: null , });
    const [uploading , setUploading] = useState(false); 
    const dispatch = useDispatch();
 
    const handleAddProduct = async ()=>{
      setUploading(prev => !prev)

      try{

        let formData = new FormData();
      
        formData.append("productName", productInfo.productName);
        formData.append("productDescription", productInfo.productDescription);
        formData.append("withoutDiscount", productInfo.withoutDiscount);
        formData.append("discount", productInfo.discount);
        formData.append("productBrand", productInfo.productBrand);
        formData.append("productWarenty", productInfo.productWarenty);
        formData.append("productCategory", productInfo.productCategory); 
        formData.append("thumbnail", productInfo.thumbnail);

        await axios.post(`${import.meta.env.VITE_BASE_URL}/product/add` , formData , {withCredentials: true})
        .then((data)=>{ 
          
          setUploading(prev => !prev)
          setProductInfo({productName: '' , productDescription: '' ,  withoutDiscount: '' , discount: '' , productBrand: '' , productWarenty: '' , productCategory: ''  , thumbnail: null , })
          dispatch(notify({isShow: true , message:  data.data.message , success:  data.data.success}))

          setTimeout(() => {
            dispatch(notify({isShow: false , message:  "" , success:  false}))
          }, 1500);
        })
 
    }catch(error){  

          setUploading(prev => !prev)
          dispatch(notify({isShow: true , message:  error.response.data.message , success:  error.response.data.success}))

          setTimeout(() => {
            dispatch(notify({isShow: false , message:  "" , success:  false}))
          }, 1500);
      
    }
    
  }
 
    
  return (
    <div className=" mt-10 mx-auto font-montserrat ">

        {/* title */}
        <div className="grid grid-cols-2 gap-4   ">
          <ProductInpytFilled value={productInfo.productName} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productName: e.target.value})} type="text" title="Title or product name" name="productName" />

          {/* category */}
          <ProductInpytFilled value={productInfo.productCategory} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productCategory: e.target.value})} type="text" title="Category" name="category" />
        </div>

      {/* descriptions */}
      <ProductInpytFilled value={productInfo.productDescription} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productDescription: e.target.value})} type="text" title="Description" name="productDescription" />

      <div className="grid grid-cols-3 gap-3 md:gap-6">
        {/* price */}
        <ProductPrice  productInfo={productInfo} setProductInfo={setProductInfo}/>

        {/* brand */}
        <ProductInpytFilled value={productInfo.productBrand} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productBrand: e.target.value})} type="text" title="Brand name" name="productBrand" />

        
        {/* warenty */}
        <ProductInpytFilled value={productInfo.productWarenty} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productWarenty: e.target.value})} type="text" title="Warenty" name="warenty" />
        
      </div>

      {/* thumbnail add */}
      <SingleImageUpload productInfo={productInfo} setProductInfo={setProductInfo}    />

      <div className="flex items-center justify-end gap-5  ">

        <button
            onClick={handleAddProduct}
            type="button"
            className="text-white flex items-center justify-center gap-2 cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <span>Submit</span>
            {uploading && <AiOutlineLoading3Quarters className="animate-spin    "/>}

        </button>

      </div>
       
    </div>
  );
}
