// Trangchu.js hoặc component cha
import React, { useState } from 'react';
import Header from '../TrangChu/header';
import Banner from '../TrangChu/banner';

import { useCartContext } from '../MyContext/Context';
import Footer from '../TrangChu/footer';
import Khuyenmailon from '../khuyenmaito';


function TrangQuanLyChiTiet() {
  
 
  return (
  
      <>
      <Banner />
      
      <TrangQuanLyChiTiet/>
      <Footer/>
  
      </>
  );
}

export default TrangQuanLyChiTiet;
