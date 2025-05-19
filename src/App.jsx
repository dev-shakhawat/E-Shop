import {BrowserRouter, Route, Routes} from "react-router";


import {Provider} from 'react-redux'
import {store} from '../src/redux/store.js'

// language
import '../i18n.js';

// pages
import Home from "./pages/Home.jsx";
import Allproducts from "./pages/Allproducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Register from "./pages/Register.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./components/common/Layout.jsx";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/allproduct" element={<Allproducts/>}/>
                        <Route path="/product-detail" element={<ProductDetails/>}/>
                        <Route path="/carts" element={<Cart/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/account" element={<MyAccount/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/blog-details" element={<BlogDetails/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App
