import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../MyContext/AuthContext';
import axios from 'axios';
import axiosInstance from '../http/axiosInstance';
    const DonDatHangYeuThich = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchChiTiet = async () => {
        const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };

        try {
          const response = await axiosInstance.get('/get-favorite-product', config);
            console.log(response.data.products);
            setProducts(response.data.products);
        } catch (error) {
          console.error('Có lỗi xảy ra khi lấy thông tin người dùng', error);
        }
      };
      fetchChiTiet();
    }, []);

  return (
    <div class="row">
        {products.map((product, index) => (
        <div class="card col-5">
        <img class="card-img-top" src={`http://127.0.0.1:8000/${product.url}`} alt={product.ten_san_pham} />
        <div class="card-body">
          <h4 class="card-title">Tên: {product.ten_san_pham}</h4>
          <p class="card-text">Giá: {product.gia} VNĐ</p>
        </div>
        
      </div>
      ))}

    </div>
  );
};

export default DonDatHangYeuThich;
