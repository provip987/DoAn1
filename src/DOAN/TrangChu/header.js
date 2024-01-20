// Header.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import Hienthi from "../SanPham/The";

function Header({  addToCart }) {
  const [loai, setLoais] = useState([]);
  const [selectedLoaiId, setSelectedLoaiId] = useState(0);

  // Lấy danh sách tất cả loại
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/loai-san-pham")
      .then((response) => setLoais(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleLoaiClick = (id) => {
    setSelectedLoaiId(id);
  };

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={6}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {Array.isArray(loai) && loai.length > 0 ? (
          loai.map((cat) => (
            <SwiperSlide key={cat.id} onClick={() => handleLoaiClick(cat.id)}>
              <div className="product-item">
                <h2 className="text-center bordered-text small-text">{cat.ten}</h2>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>Không có dữ liệu</SwiperSlide>
        )} 
      </Swiper>
      <Hienthi selectedLoaiId={selectedLoaiId} addToCart={addToCart} />
    </>
  );
}

export default Header;
