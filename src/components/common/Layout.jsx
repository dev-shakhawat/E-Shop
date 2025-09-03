import React from 'react';
import {Outlet} from "react-router";
import Header from "./header/Index.jsx";
import Footer from "./footer/Footer.jsx";
import GetAuth from './GetAuth.jsx';

function Layout() {
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
