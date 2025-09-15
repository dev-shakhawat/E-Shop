import React from "react";
import ViewAll from "../../common/ViewAll.jsx";
import ProductCart from "../../common/ProductCart.jsx";
import { useNavigate } from "react-router";

function BestSellerLeft({products}) {

  const navigate = useNavigate()

  // navigate to product details
  const handelNavigateToProductDetails = (product) => { 
    navigate(`/product-detail/${product}`)
  }
 

  return (
    <div>
      <h2 className=" flex justify-between  ">
        <span className={`commonHead`}>Best Seller</span>
        <ViewAll />
      </h2>

      {/*  seles components  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-3 sm:mt-6 md:mt-9 gap-y-2 lg:mt-12">
        { products.length > 0  &&   products.map((item, index) => (
          <ProductCart
            onClick={() => handelNavigateToProductDetails(item._id)}
            key={index}
            catagory={item.category}
            title={item.title}
            currentprice={item.price.currentPrice}
            rating={item.rating}
            totalrating={item.totalrating}
            delprice={item.price.discount ? item.price.prevPrice : null}
            persent={item.price.discount}
            customstyle={`hover:border-tertary`}
            customStar={`text-[#fbd550]`}
            image={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}

export default BestSellerLeft;
