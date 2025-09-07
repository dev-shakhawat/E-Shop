import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';


// redux
import { useDispatch, useSelector } from 'react-redux';
import { currentProductPagination, totalProductPagination } from '../../../redux/slices/paginationSlice';  

// components
import Pagination from '../../common/Pagination';
import ProductsHead from './ProductsHead'
import ProductCart from '../../common/ProductCart'
import Notification from '../../common/Notification';

// function
import {handelAddToCart} from '../../../helpers/AddtoCart'
import getProduct from '../../../helpers/getAllProduct'


export default function AllProducts({urlSearchParams}) {

  const [products , setProducts] = useState([]);
  const mode = useSelector(state => state.viewmode.value);
  const dispatch = useDispatch();
  const paginationCurrent = useSelector(state => state.pagination.productPagi.currentPage);
  const totalPage = useSelector(state => state.pagination.productPagi.totalPage);
  const noti = useSelector(state => state.notification.value);
  const navigate = useNavigate();


  useEffect(() => {
  const params = new URLSearchParams();

  // multiple categories
  urlSearchParams.category.forEach(cat => params.append("category", cat));

  // multiple brands
  urlSearchParams.brand.forEach(brand => params.append("brand", brand));

  // min & max price
  if (urlSearchParams.minPrice) params.append("minPrice", urlSearchParams.minPrice);
  if (urlSearchParams.maxPrice) params.append("maxPrice", urlSearchParams.maxPrice);
  
  
   (async () => {
    try {
        await getProduct(`product/all/filter?${params.toString()}`) 
        .then((res) => { 

          const allData = res.data
          
          
          if(allData.length > 16 ){
            dispatch(totalProductPagination(Math.floor(allData.length/16)))
          }
          
          setProducts(allData);
 
           
        })
    } catch (err) {
      console.error(err);
    }
  })();


}, [urlSearchParams]); 
   
   
  
  // navigate to product details
  const handelNavigateToProductDetails = (product) => { 
    navigate(`/product-detail/${product}`)
  }
   
  
  return (
    <div className='w-full'>

        {/* notification  */}
        {noti &&  <Notification success={noti.success} message={noti.message}/>}


        <ProductsHead totalResults={products?.length} />

        {/* all products */}
            {
              products.length == 0 ? 
              // not found data
              <div className=" h-[100vh] grid place-items-center w-full ">
                <div className="">
                  <h2 className=" font-montserrat font-extrabold text-5xl text-tertary ">Offs, Sorry!</h2>
                  <h4 className=" font-poppins font-semibold text-primary/80  ">It's may be your internet problem or our server problem.</h4>
                  <p className=" font-poppins font-semibold text-primary/80  ">Please try again later. or <Link to={`/contact`} className='text-brand'>Contact Us</Link></p>
                </div>
              </div>
               : 

              // all products data
              <div className={` ${mode == 'grid' ?  "grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 " : 'grid-cols-1' }  grid mt-12 `}>
                {products.length > 0 && 
                  products.map(product => <ProductCart addCart={()=> handelAddToCart(product, dispatch)} onClick={() => handelNavigateToProductDetails(product._id)} key={product._id} image={product.thumbnail} title={product.title} currentprice={product.price.currentPrice} delprice={product.price.discount ? product.price.prevPrice : null} persent={product.price.discount}  totalrating={product.totalrating} rating={product.rating}   customStar={`text-[#fbd550]`}    customstyle="hover:border-tertary" />)
                }
              </div>
            }

        {/* pagination */}
        <Pagination currentPaginationPageDispatch={currentProductPagination} currentPage={paginationCurrent} totalPage={totalPage} />

    </div>
  )
}
