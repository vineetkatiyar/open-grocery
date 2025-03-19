import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import PageProduct from './pages/product/PageProduct';
import About from './pages/Extra/About';
import Contact from './pages/Extra/Contact';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import ForgetPassword from './pages/Auth/ForgetPassword';
import Cart from './pages/Cart/Cart';
import UserProfile from './pages/User/UserProfile';
import PrivacyPolicy from './pages/Extra/PrivacyPolicy';
import Termsandconditions from './pages/Extra/Termsandconditions';
import FAQ from './pages/Extra/FAQ'
import ProductCard from './components/Product/ProductCard';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/product/:prodid' element={<PageProduct/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgetpassword' element={<ForgetPassword/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/user/:activepage' element={<UserProfile/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/termsandconditions' element={<Termsandconditions/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='*' element={<h1>404 page not found</h1>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
