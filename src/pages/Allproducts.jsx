import React, { useEffect, useRef, useState } from 'react';
import Container from "../components/common/Container.jsx";
import Chooser from "../components/customeUI/catagoryChooser/Chooser.jsx";
import PriceChooser from "../components/customeUI/catagoryChooser/PriceChooser.jsx";
import AllProducts from '../components/customeUI/allProducts/AllProducts.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { filterMobile } from '../redux/slices/productSlice.js';
import axios from 'axios';

function Allproducts() {

    const brands = [{
        name: "Apple",
        total: 565,
    }, {
        name: "Samsung",
        total: 428
    }, {
        name: "Asus",
        total: 323
    }, {
        name: "Dell",
        total: 298
    }, {
        name: "Linovo",
        total: 180
    }, {
        name: "HP",
        total: 98
    }, {
        name: "Penasonic",
        total: 17
    }]
    const isFilter = useSelector(state => state.product.filter) 
    const filterRef = useRef(null)
    const dispatch = useDispatch()
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                dispatch(filterMobile(false))
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    })

    const allcatagories = useSelector(state => state.product.categories)
 

    const [urlSearchParams , setUrlSearchParams] = useState({category : "" , brand : "" , minPrice : "" , maxPrice : "" , limit : "" , page : ""});

 

    return (
        <div className={`2xl:mt-17 xl:mt-15 lg:mt-12 md:mt-10 mt-8 2xl:pb-20 xl:pb-16 lg:pb-12 md:pb-10 pb-8  `}>
            <Container>
                <div className="flex gap-6.5 h-fit relative ">

                    {/*  catagory/brand/price chooser  */}
                    <div ref={filterRef} className={` ${isFilter ? "fixed md:sticky top-0 left-0 z-1 md:z-0 h-screen md:h-fit overflow-y-scroll w-[70%] sm:w-[50%]   " : "hidden md:block md:sticky top-0 left-0  h-fit 2xl:rounded-[25px] xl:rounded-[20px] lg:rounded-[15px] rounded-[10px]   "}  lg:min-w-[335px]  bg-[#F4F4F4]  2xl:p-12 xl:p-10 lg:p-8 md:p-6 p-4    `}>

                        {/*  catagory chooser  */}
                        <Chooser allcatagories={allcatagories} urlSearchParams={urlSearchParams} setUrlSearchParams={setUrlSearchParams} type="category" />

                        <hr className={`2xl:my-10 xl:my-9 lg:my-8 md:my-6 my-4   text-tertary`}/>

                        {/*  brand chooser  */}
                        <Chooser allcatagories={brands} urlSearchParams={urlSearchParams} setUrlSearchParams={setUrlSearchParams} type="brand" />

                        <hr className={`2xl:my-10 xl:my-9 lg:my-8 md:my-6 my-4   text-tertary`}/>

                        {/*  price chooser  */}
                        <PriceChooser/>
                    </div>


                    {/*  all products  */}
                    <div className="w-full">
                        <AllProducts/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Allproducts;
