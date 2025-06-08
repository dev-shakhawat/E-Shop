import React, { useEffect, useState } from 'react'


// redux
import { useDispatch, useSelector } from 'react-redux';
import { totalPagination } from '../../redux/slices/paginationSlice';

// components
import Pagination from './Pagination';
import ProductsHead from './ProductsHead'
import ProductCart from '../common/ProductCart'


export default function AllProducts() {

  const [products , setProducts] = useState([]);
  const mode = useSelector(state => state.viewmode.value);
  const dispatch = useDispatch();
  const paginationCurrent = useSelector(state => state.pagination.value)
  
  

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=194')
   .then(res => res.json())
   .then(data => {
    dispatch(totalPagination(Math.floor(data.total/16)))
   });
  }, [])

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=16&skip=${(paginationCurrent - 1) * 16}`)
    .then(res => res.json())
    .then(data => {
     setProducts(data.products);
    });
    
  }, [paginationCurrent])
  
  
  const showPersentage = [2,5,8,11,13,16]
  const ShowDelPrice = [2,5,8,11,13,16]

  
  
  
  
  
  
  return (
    <div className='w-full'>
        <ProductsHead/>

        {/* all products */}
            {
              products.length == 0 ? 
              // not found data
              <div className=" h-[100vh] grid place-items-center w-full ">
                <div className="">
                  <h2 className=" font-montserrat font-extrabold text-5xl text-tertary ">Offs, Sorry!</h2>
                  <h4 className=" font-poppins font-semibold text-primary/80  ">It's may be your internet problem or our server problem.</h4>
                  <p className=" font-poppins font-semibold text-primary/80  ">Please try again later.</p>
                </div>
              </div>
               : 

              // all products data
              <div className={` ${mode == 'grid' ?  "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 " : 'grid-cols-1' }  grid mt-12 `}>
                {products.length > 0 && 
                  products.map(product => <ProductCart key={product.id} delprice={ShowDelPrice.includes(product.id) && Math.floor(product.price / (1 - product.discountPercentage / 100)) } persent={ showPersentage.includes(product.id) && product.discountPercentage} image={`${product.images[0]}`} customStar={`text-[#fbd550]`} totalrating={product.reviews.length} rating={product.reviews.length} catagory={product.category} currentprice={product.price} title={product.title} customstyle="hover:border-tertary" />)
                }
              </div>
            }

        {/* pagination */}
        <Pagination/>

    </div>
  )
}
