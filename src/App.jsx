import { BrowserRouter, Route, Routes } from "react-router";

import { Provider } from "react-redux";
import { store } from "../src/redux/store.js";

// language
import "../i18n.js";

// pages
import Home from "./pages/Home.jsx";
import Allproducts from "./pages/Allproducts.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Register from "./components/customeUI/register/Register.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./components/common/Layout.jsx";
import BlogLayout from "./components/common/BlogLayout.jsx"; 
import Account from "./pages/Account.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/allproduct" element={<Allproducts />} />
            <Route path="/product-detail/:id" element={<ProductDetails />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path="details/:id" element={<BlogDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
