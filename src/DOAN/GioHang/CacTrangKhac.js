
import React from 'react';
import GioHang from '../GioHang/GioHang';
import { Routes, Route } from 'react-router-dom';
import ThanhToan from '../GioHang/ThanhToan';
import { useCartContext } from '../MyContext/Context';

const TrangGioHang = () => {
  const { cartItems, updateCartItem } = useCartContext();

  return (
    <div>
      <Routes>
        <Route path="/" element={<GioHang cartItems={cartItems} updateCartItem={updateCartItem} />} />
        <Route path="/thanh_toan" element={<ThanhToan cartItems={cartItems} />} />
      </Routes>
    </div>
  );
};

export default TrangGioHang;
