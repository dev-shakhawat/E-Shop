import React, { useEffect } from 'react';
import {Outlet} from "react-router";
import Header from "./header/Index.jsx";
import Footer from "./footer/Footer.jsx";
import GetAuth from './GetAuth.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { categorySet } from '../../redux/slices/productSlice.js';


function Layout() {

    const dispatch = useDispatch();

    useEffect(() => { 

        (async () => {
            await axios.get(`${import.meta.env.VITE_BASE_URL}/category/getallcategory`) 
            .then((res) => {
                console.log(res.data.data);
                dispatch(categorySet(res.data.data)); 
                
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
