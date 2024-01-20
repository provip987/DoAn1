// Trangchu.js hoặc component cha
import React, { useState } from 'react';
import Header from '../TrangChu/header';
import Banner from '../TrangChu/banner';
import GioHang from '../GioHang/GioHang';
import { Routes, Route } from 'react-router-dom';
import TuyChinh from '../SanPham/TuyChinh';
import ChinhSua from '../SanPham/ChinhSua';

import ThanhToan from '../GioHang/ThanhToan';
import { useCartContext } from '../MyContext/Context';
import Footer from '../TrangChu/footer';


function Trangchu() {
  
  const { cartItems, addToCart, updateCartItem } = useCartContext();
  return (
  
      <>
      <Banner cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />
      <Header addToCart={addToCart} />
      <Footer/>
  
      </>
  );
}

export default Trangchu;
