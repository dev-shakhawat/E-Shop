import React, { useState } from "react";
import ProductInpytFilled from "./ProductInpytFilled";
import ProductVeriantAdd from "./ProductVeriantAdd"; 



// icons
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
import ProductPrice from "./ProductPrice";
import SingleImageUpload from "./SingleImageUploader";



export default function AddProduct() {
 
    

    const [productInfo , setProductInfo] = useState({productName: '' , productDescription: '' , productPrice: {price: '' , discount: ''} , productBrand: '' , productWarenty: '' , productCategory: ''  , thumbnail: null , allVeriant: [{id: Date.now()}]});
    const [uploading , setUploading] = useState(false); 

    const handleVariendAdd = ()=>{
      setProductInfo({...productInfo , allVeriant: [...productInfo.allVeriant , {id: Date.now()}]})
    }
 

    console.log(productInfo);


    const handleAddProduct = async ()=>{
      setUploading(prev => !prev)

      try{


    }catch(error){

    }
    
  }
 
    
  return (
    <div className=" mt-10 mx-auto font-montserrat ">

        {/* title */}
        <ProductInpytFilled value={productInfo.productName} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productName: e.target.value})} type="text" title="Title or product name" name="productName" />

      {/* descriptions */}
      <ProductInpytFilled value={productInfo.productDescription} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productDescription: e.target.value})} type="text" title="Description" name="productDescription" />


      <div className="grid grid-cols-4 gap-3 md:gap-6">
        {/* price */}
        <ProductPrice  productInfo={productInfo} setProductInfo={setProductInfo}/>

        {/* brand */}
        <ProductInpytFilled value={productInfo.productBrand} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productBrand: e.target.value})} type="text" title="Brand name" name="productBrand" />

        {/* category */}
        <ProductInpytFilled value={productInfo.productCategory} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productCategory: e.target.value})} type="text" title="Category" name="category" />
        
        {/* warenty */}
        <ProductInpytFilled value={productInfo.productWarenty} setProductInfo={setProductInfo} onChange={(e) => setProductInfo({...productInfo , productWarenty: e.target.value})} type="text" title="Warenty" name="warenty" />
        
      </div>

      {/* thumbnail add */}
      <SingleImageUpload productInfo={productInfo} setProductInfo={setProductInfo}    />

      {/* product variants */}
      <div className="mt-2 mb-2 flex flex-col gap-1 ">
        {productInfo.allVeriant.map((item , index) => (
          <ProductVeriantAdd id={item.id} key={item.id} variantTitle={`Variant ${index+1}`} productInfo={productInfo}   setProductInfo={setProductInfo}    />))}
      </div>



      <div className="flex items-center justify-end gap-5  ">

        <button 
            onClick={handleVariendAdd}
            type="button"
            className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        > 
            <span>Add New Veriant</span>
        </button>

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
