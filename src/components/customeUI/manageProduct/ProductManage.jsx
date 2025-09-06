import React, { useState } from "react";
import TabManage from "./TabManage";
import AddProduct from "./addProduct/AddProduct";
import AllProduct from "./allProduct/AllProduct";
import EditProduct from "./editProduct/EditProduct";

export default function ProductManage() {
  const [productOption, setProductOption] = useState("All Product");
  return (
    <div className="mt-5    ">
      <div className="flex bg-tertary/50 gap-10 px-2 rounded-lg ">

        {/* All Product button */}
        <TabManage
          onClick={() => setProductOption("All Product")}
          productOption={productOption}
          tabTitle="All Product"
        />

        {/* add new product button */}
        <TabManage
          onClick={() => setProductOption("Add new product")}
          productOption={productOption}
          tabTitle="Add new product"
        />

 
      </div>

      {/* all tabs */}
      {productOption === "Add new product" && <AddProduct />}
      {productOption === "All Product" && <AllProduct />} 
    </div>
  );
}
