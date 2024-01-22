// Trangchu.js hoặc component cha
import React, { useState } from 'react';
import Header from './header';
import Banner from './banner';
import GioHang from '../GioHang/GioHang';
import { Routes, Route } from 'react-router-dom';
import TuyChinh from '../SanPham/TuyChinh';
import ChinhSua from '../SanPham/ChinhSua';

import ThanhToan from '../GioHang/ThanhToan';
import { useCartContext } from '../MyContext/Context';
import Footer from './footer';


function Trangchu() {
  
  const { cartItems, addToCart } = useCartContext();
  return (
  
      <>
      <Banner cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <Header addToCart={addToCart} />

      <ToastContainer position="top-center" />
     
      </>
  );
}

export default Trangchu;
