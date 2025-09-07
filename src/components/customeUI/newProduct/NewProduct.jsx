import React from "react";
import ArrowRightLong from "../../../assets/icons/ArrowRightLong.jsx";
import Container from "../../common/Container.jsx";
import { Link } from "react-router";
import Shortby from "../../common/Shortby.jsx";
import ProductCart from "../../common/ProductCart.jsx";

function NewProduct({ products }) {
  const shortArray = [
    "All Catagories",
    "Men",
    "Women",
    "Kids",
    "Electronics",
    "Furniture",
    "Home",
    "Sports",
    "Books",
    "Grocery",
    "Health",
    "Beauty",
    "Toys",
    "Automotive",
    "Pet Supplies",
    "Garden",
    "Industrial",
    "Musical Instruments",
    "Video Games",
    "Office Products",
    "Clothing",
    "Shoes",
    "Jewelry",
  ];
 

  return (
    <div className={`py-5 sm:py-10 md:py-15 lg:py-20 `}>
      <Container>
        {/*   heading   */}
        <div className="flex items-center justify-between ">
          <h2 className=" commonHead ">New Products</h2>

          {/*  short by  */}
          <div className="flex gap-2 md:gap-4">
            <p className="font-montserrat font-normal text-[14px] md:text-base leading-[24px] w-[75px] text-primary">
              Sort by
            </p>
            <Shortby
              shortsArr={shortArray}
              shortWidth={`w-[110px] md:w-[120px] lg:w-[130px] xl:w-[217px]  `}
            />
          </div>
        </div>

        {/*  new products  */}
        <div className="grid grid-cols-1 gap-x-1 gap-y-2 sm:grid-cols-2  lg:grid-cols-4 xl:grid-cols-5 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
          { products.length > 0 &&  products.map((product, index) => (
            <ProductCart
              key={index}
              persent={product?.price?.discount}
              title={product.title}
              totalrating={product.totalrating}
              currentprice={product?.price?.currentPrice}
              delprice={product.price.discount  ? product.price.prevPrice : null}
              catagory={product?.category}
              rating={product.rating}
              customstyle={`hover:border-tertary`}
              customStar={`text-[#fbd550]`}
              image={product.thumbnail}
            />
          ))}
        </div>

        {/*  load more button  */}
        <div className="flex justify-center items-center mt-4 sm:mt-8 md:12 lg:mt-16">
          <Link
            to={`#`}
            className={`py-2 md:py-3 lg:py-4 px-5 sm:px-6 md:px-8 lg:px-10 rounded-[5px] lg:rounded-[10px] border border-brand font-montserrat font-bold text-[14px] md:text-base lg:text-xl leading-[30px] text-brand`}
          >
            Load More
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NewProduct;
