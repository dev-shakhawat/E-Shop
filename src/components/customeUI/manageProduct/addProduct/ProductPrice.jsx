import React, { useState } from "react";
import ProductInpytFilled from "./ProductInpytFilled";

export default function ProductPrice({productInfo , setProductInfo}) {
  
  const handlePriseChange = (e)=>{
  setProductInfo({...productInfo , productPrice: {...productInfo.productPrice , price: e.target.value}})
  } 


  const handleDescount =(e)=>{
    if(e.target.value > 100){
      setProductInfo({...productInfo , productPrice: {...productInfo.productPrice , discount: 100}})
    }else{
      setProductInfo({...productInfo , productPrice: {...productInfo.productPrice , discount: e.target.value}})
    }
  }
  
 

  return (
    <div className="flex gap-4 ">
      <ProductInpytFilled value={productInfo.productPrice.price} onChange={(e)=> handlePriseChange(e)} type="number" min={0} title="Price" name="price" />
      <ProductInpytFilled value={productInfo.productPrice.discount} onChange={(e)=> handleDescount(e)} type="number" min={0} max={100} title="Discount" name="discount" />
    </div>
  );
}
