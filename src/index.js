import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './styles/index.css';

import Banner from './components/Banner';
import Footer from './components/Footer';
import Error from './components/Error'

import Home from './pages/Home';
import Product from './pages/Product'


import { CartProvider, CartIsOpenProvider } from './utils/context';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <CartIsOpenProvider>
          <Banner/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/plante/:product" element={<Product/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
          <Footer/>
        </CartIsOpenProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
