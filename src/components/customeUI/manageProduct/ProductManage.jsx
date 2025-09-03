import React, { useState } from "react";
import TabManage from "./TabManage";
import AddProduct from "./addProduct/AddProduct";
import DeleteProduct from "./deleteProduct/DeleteProduct";
import EditProduct from "./editProduct/EditProduct";

export default function ProductManage() {
  const [productOption, setProductOption] = useState("Add new product");
  return (
    <div className="mt-5    ">
      <div className="flex bg-tertary/50 gap-10 px-2 rounded-lg ">
        {/* add new product button */}
        <TabManage
          onClick={() => setProductOption("Add new product")}
          productOption={productOption}
          tabTitle="Add new product"
        />

        {/* delete product button */}
        <TabManage
          onClick={() => setProductOption("Delete product")}
          productOption={productOption}
          tabTitle="Delete product"
        />

        {/* edit product button */}
        <TabManage
          onClick={() => setProductOption("Edit product")}
          productOption={productOption}
          tabTitle="Edit product"
        />
      </div>

      {/* all tabs */}
      {productOption === "Add new product" && <AddProduct />}
      {productOption === "Delete product" && <DeleteProduct />}
      {productOption === "Edit product" && <EditProduct />}
    </div>
  );
}
