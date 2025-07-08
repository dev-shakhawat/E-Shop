import React from "react"; 
import { Link } from "react-router";

function BestSellerRight() {
  return (
    <div className={`text-center pb-5 lg:pb-0  `}>
      {/*   image    */}
      {/*<Link to={`#`}><img src="/images/bestseller.png" alt="bestseller"/></Link>*/}

      <h2 className="cmnHeadTwo text-primary  mt-5 sm:mt-10 md:mt-15 lg:mt-20   ">
        Buy One,
        <br />
        Get One Free!
      </h2>
      <p className="font-montserrat font-normal text-[14px] md:text-base lg:text-[18px] leading-[30px] mt-2  lg:mt-5 text-primary   ">
        50% off promo for all headphones & earphones.
      </p>
      <button type="button" className=" commonButton mt-16   "  >Shop Now</button>
    </div>
  );
}

export default BestSellerRight;
