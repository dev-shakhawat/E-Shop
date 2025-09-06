import { BrowserRouter, Route, Routes } from "react-router";

 
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
import Login from "./components/customeUI/login/Login.jsx";
import ForgetPassword from "./components/customeUI/forgetPassword/ForgetPassword.jsx";
import OTP from "./components/customeUI/otp/OTP.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userSet } from "./redux/slices/userSlice.js";
import getUserData from "./helpers/getUserData.js";
import Toast from "./components/common/Toast.jsx";

function App() {

  const user = useSelector(state => state.user.user)
  const notify = useSelector(state => state.toast)
  
  const dispatch = useDispatch();

  useEffect( () => { 

    (async function hudai(){
      const information = await getUserData() 
      
      dispatch(userSet(information.data))

    }())
    
  }, []);
  
  
  return ( 
      <BrowserRouter>
        {notify.isShow && <Toast message={notify.message} success={notify.success} />}
        <Routes>
          {/* auth routes */}
          {user ? 
          <Route path="/auth" element={<Layout />} >
            <Route index element={<Account />} />
            <Route path="otp/:id" element={<OTP />} />
          </Route>
           : 
          <Route path="/auth" >
            <Route index element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="reset-password" element={<ForgetPassword />} />
            <Route path="otp/:id" element={<OTP />} />
          </Route> 
           }

           {/* otp */}
           <Route path="authorize/:id" element={<OTP />} />

          {/* Product */}
          <Route path={"/"} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/allproduct" element={<Allproducts />} />
            <Route path="/product-detail/:id" element={<ProductDetails />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
            
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Blog */}
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<Blog />} />
            <Route path="details/:id" element={<BlogDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
