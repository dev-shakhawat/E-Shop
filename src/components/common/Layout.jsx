import React, { useEffect } from 'react';
import {Outlet} from "react-router";
import Header from "./header/Index.jsx";
import Footer from "./footer/Footer.jsx";
import GetAuth from './GetAuth.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { categorySet } from '../../redux/slices/productSlice.js';
import { brandSet } from '../../redux/slices/productSlice.js';


function Layout() {

    const dispatch = useDispatch();

    useEffect(() => { 

        (async () => {

            // get all categories
            await axios.get(`${import.meta.env.VITE_BASE_URL}/category/getallcategory`) 
            .then((res) => { 
                dispatch(categorySet(res.data.data)); 
                
            })

            // get all brands
            await axios.get(`${import.meta.env.VITE_BASE_URL}/brand/getallbrand`) 
            .then((res) => { 
                dispatch(brandSet(res.data.data));  
            })
            
        })();

    }, [])

    return (
        <>
            <GetAuth/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
