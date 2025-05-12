import React from 'react';
import {Outlet} from "react-router";
import Header from "../header/Index.jsx";

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <>footer</>
        </>
    );
}

export default Layout;
