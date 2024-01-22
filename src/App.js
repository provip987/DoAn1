// App.js
import React from 'react';
import './App.css';
import Header from './DOAN/TrangChu/header';
import Footer from './DOAN/TrangChu/footer';
import Khuyenmailon from './DOAN/khuyenmaito';
import { Routes, Route } from "react-router-dom";
import './bootstrap-5.2.3/css/bootstrap.min.css';
import Trangchu from './DOAN/Trang/Trangchu';
import { CartProvider } from '../src/DOAN/MyContext/Context';  // Import CartProvider từ MyContext/Context
import { faLongArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TrangGioHang from './DOAN/Trang/TrangGioHang';
import ChinhSua from './DOAN/SanPham/ChinhSua';
import TuyChinh from './DOAN/SanPham/TuyChinh';
import TrangTheSanPham from './DOAN/Trang/TrangTheSanPham';
import TrangThanhToan from './DOAN/Trang/TrangThanhToan';
import { AuthProvider } from './DOAN/MyContext/AuthContext'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './DOAN/QuanLyChiTiet/DanhSach';
import Dangky from './DOAN/TaiKhoan/Dangky';
import Dangnhap from './DOAN/TaiKhoan/Dangnhap';

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>

          <Routes>
            <Route path="/" element={<Trangchu />} />
            <Route path="/gio_hang" element={<TrangGioHang />} />
            <Route path="/tuy_chinh/:id" element={<TrangTheSanPham />} />
            <Route path="/khuyenmai" element={<Khuyenmailon />} />
            <Route path="/thanh_toan" element={<TrangThanhToan />} />
            <Route path='/login' element={< Dangnhap />} />
            <Route path='/dangky' element={<Dangky />} />
            <Route path='/quanlychitiet' element={<Dashboard />} />

          </Routes>
        </CartProvider>
      </AuthProvider>

      <ToastContainer position="top-center" />
     
    </>
  );
}

export default App;
