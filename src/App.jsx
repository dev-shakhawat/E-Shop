import {BrowserRouter, Route, Routes} from "react-router";
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


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/allproduct" element={<Allproducts/>}/>
                <Route path="/product-detail" element={<ProductDetails/>}/>
                <Route path="/carts" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/account" element={<MyAccount/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/blog-details" element={<BlogDetails/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
