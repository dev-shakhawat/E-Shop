import React from 'react';
import {Outlet} from "react-router";
import Header from "../header/Index.jsx";
import Footer from "../footer/Footer.jsx";

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
