import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { Link, useLocation } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hienthi = ({ selectedLoaiId, addToCart }) => {
  console.log("addToCart in Hienthi:", addToCart);
  const [sanphams, setSanphams] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const location = useLocation();
  useEffect(() => {
    // Chỉ gọi API và hiển thị sản phẩm nếu đường dẫn là trang chủ
    if (location.pathname === '/') {
      axios
        .get("http://127.0.0.1:8000/api/san-pham")
        .then((response) => {
          const data = response.data.data;
          let ListSanpham;
          if (selectedLoaiId === 0) {
            ListSanpham = data;
          } else {
            ListSanpham = data.filter((sanpham) => Number(sanpham.loai_san_pham_id) === Number(selectedLoaiId));
          }
          setSanphams(ListSanpham);
        })
        .catch((error) => console.log(error));
    } else {
      // Khi không phải ở trang chủ, set danh sách sản phẩm thành mảng rỗng
      setSanphams([]);
    }
  }, [selectedLoaiId, location.pathname]);

  const handleAddToCart = (sanpham) => {
    addToCart(sanpham, selectedSize);
  };
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={6}
      spaceBetween={10}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <div className="row">
        {sanphams &&
          sanphams.length > 0 &&
          sanphams.map((sanpham, index) => (
            <div key={index} className="col-md-3">
              <div className="card">
                <div className="pic">
                  <img src={`http://127.0.0.1:8000/${sanpham.hinh_anh[0].url}`} alt={sanpham.ten_san_pham} />
                </div>
                <div className="card-head">
                  <div className="d-flex justify-content-between">
                    <h6>{sanpham.ten_san_pham}</h6>
                    <div className="price">
                      <p className="text-danger font-weight-bold">{sanpham.gia_cu}đ</p>
                      <p className="text-secondary font-weight-bold" style={{ textDecoration: 'line-through' }}>{sanpham.gia}đ</p>
                    </div>
                  </div>
                  <p className="title">{sanpham.mo_ta}</p>
                  {sanpham.chi_tiet_san_pham && sanpham.chi_tiet_san_pham.length > 0 && (
                    <div className="size-dropdown">
                      <label htmlFor={`sizeDropdown${sanpham.id}`}>Chọn size:</label>
                      <select
  id={`sizeDropdown${sanpham.id}`}
  onChange={(e) => setSelectedSize(e.target.value)}
>
  {sanpham.chi_tiet_san_pham.map((detail, detailIndex) => (
    <option key={detailIndex} value={detail.size_id}>
      {detail.size_id}
    </option>
  ))}
</select>
                    </div>
                  )}
                  <div className="d-flex justify-content-between">
                    <button className="update"><Link to={`/tuy_chinh/${sanpham.id}`}>Tùy chỉnh</Link></button>
                    <button className="add" onClick={() => handleAddToCart(sanpham)}>
    Thêm
  </button>
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ cursor: 'pointer', fontSize: '20px', color: 'gray-light', margin: '10px 0px 0px 5px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Swiper>
  );
}

export default Hienthi;
