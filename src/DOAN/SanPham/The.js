import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import { Link, useLocation } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hienthi = ({ selectedLoaiId, addToCart,handleRemoveFavorite }) => {
  console.log("addToCart in Hienthi:", addToCart);
  const [sanphams, setSanphams] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const location = useLocation();
  const [sortByPrice, setSortByPrice] = useState(null);
  const [favorites, setFavorites] = useState([]);
 
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
  const handleSortChange = () => {
    setSortByPrice((prevSort) => (prevSort === 'asc' ? 'desc' : 'asc'));
  };
  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  const handleAddToFavorites = (productId) => {
    addFavorites(productId);
    setFavorites((prevFavorites) => [...prevFavorites, productId]);
  };

  const handleRemoveFromFavorites = (productId) => {
    // Xóa khỏi mục yêu thích
    const updatedFavorites = favorites.filter((id) => id !== productId);
    setFavorites(updatedFavorites);
  };
  const addFavorites = async (id) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/add-favorite-product', { product_id: id }, config);

    } catch (error) {
      console.error('Có lỗi xảy ra khi lấy thông tin người dùng', error);
    }
  };

  const handleSize = (e) => {
    const target = e.target;
    const selectedOption = target.options[target.selectedIndex];
    const productId = selectedOption.getAttribute('data-product-id');
    const price = selectedOption.getAttribute('data-price');
    console.log(productId);
    setSelectedSize(e.target.value);
    const modifiedData = sanphams.map(item => {
      if (item.id == productId) {
        if (!item.hasOwnProperty('temp')) {
          item.temp = item.gia;
        }

        if (price > 0) {
          item.gia = price; // Thay đổi giá trị thuộc tính “gia” tại đây
        } else {
          item.gia = item.temp;
        }
      }
      return item;
    });
    console.log(modifiedData)
    setSanphams(modifiedData);

  }

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
      <div className="filter">

        <button onClick={handleSortChange}>
          Sắp xếp theo giá {sortByPrice === 'asc' ? 'cao đến thấp' : 'thấp đến cao'}
        </button>
      </div>
      <div className="row">
        {sanphams
          .sort((a, b) => {
            const priceA = a.gia;
            const priceB = b.gia;

            if (sortByPrice === 'asc') {
              return priceA - priceB;
            } else if (sortByPrice === 'desc') {
              return priceB - priceA;
            }

            return 0;
          })
          .map((sanpham, index) => (
            <div key={index} className="col-md-3">
              <div className="card">
                <div className="pic">
                  <img src={`http://127.0.0.1:8000/${sanpham.hinh_anh[0].url}`} alt={sanpham.ten_san_pham} />
                </div>
                <div className="card-head">
                  <div className="d-flex justify-content-between">
                    <h6>{sanpham.ten_san_pham}</h6>
                    <div className="price">
                      <p className="text-danger font-weight-bold">{sanpham.gia}đ</p>
                      <p className="text-secondary font-weight-bold" style={{ textDecoration: 'line-through' }}>{sanpham.gia_cu}đ</p>
                    </div>
                  </div>
                  <p className="title">{sanpham.mo_ta}</p>
                  {sanpham.chi_tiet_san_pham && sanpham.chi_tiet_san_pham.length > 0 && (
                    <div className="size-dropdown">
                      <label htmlFor={`sizeDropdown${sanpham.id}`}>Chọn size:</label>
                      <select
                        id={`sizeDropdown${sanpham.id}`}
                        onChange={(e) => handleSize(e)}
                      >
                        {sanpham.chi_tiet_san_pham.map((detail, detailIndex) => (
                          <option key={detailIndex} value={detail.size_id} data-product-id={detail.san_pham_id} data-price={detail.gia}>
                            {detail.size_id}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="d-flex justify-content-between">
                    <button className="update"><Link to={`/tuy_chinh/${sanpham.id}`}>Tùy chỉnh</Link></button>
                    {(sanpham.chi_tiet_san_pham).length != 0 && (<button className="add" onClick={() => handleAddToCart(sanpham)} >
                      Thêm
                    </button>)}
                    <FontAwesomeIcon
                      onClick={() => {
                       
                          handleAddToFavorites(sanpham.id);
                     
                      
                      }}
                      icon={faHeart}
                      style={{
                        cursor: 'pointer',
                        fontSize: '20px',
                        color: isFavorite(sanpham.id) ? 'red' : 'black',
                        margin: '10px 0px 0px 5px'
                      }}
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
