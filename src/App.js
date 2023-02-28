import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup';
import Resetpassword from './pages/Resetpassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OurStory from './pages/OurStory';
import PersonalDataProtection from './pages/PersonalDataProtection';
import CookiePolicy from './pages/CookiePolicy';
import DistanceSalesAgreement from './pages/DistanceSalesAgreement';
import OrderTracking from './pages/OrderTracking';
import FAQ from './pages/FAQ';

function App() {
  return (
<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='store' element={<OurStore/>}/>
        <Route path='product/:id' element={<SingleProduct/>}/>
        <Route path='blogs' element={<Blog/>}/>
        <Route path='blog/:id' element={<SingleBlog/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='wishlist' element={<WishList/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgot-password' element={<Forgotpassword/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='reset-password' element={<Resetpassword/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='refund-policy' element={<RefundPolicy/>}/>
        <Route path='shipping-policy' element={<ShippingPolicy/>}/>
        <Route path='term-condition' element={<TermAndConditions/>}/>
        <Route path='our-story' element={<OurStory/>}/>
        <Route path='data-protection' element={<PersonalDataProtection/>}/>
        <Route path='cookie-policy' element={<CookiePolicy/>}/>
        <Route path='distance-sales-agreement' element={<DistanceSalesAgreement/>}/>
        <Route path='order-tracking' element={<OrderTracking/>}/>
        <Route path='FAQ' element={<FAQ/>}/>

      </Route>
    </Routes>
  </BrowserRouter>
</>
);
}

export default App;
