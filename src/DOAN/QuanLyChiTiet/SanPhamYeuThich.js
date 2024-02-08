import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../MyContext/AuthContext';
import axios from 'axios';
import axiosInstance from '../http/axiosInstance';

const SanPhamYeuThich = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setError('Có lỗi xảy ra khi lấy thông tin người dùng. Vui lòng thử lại sau.');
      } finally {
        setLoading(false);
      }
    };

    fetchChiTiet();
  }, []);

  return (
    <div className="row">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : products.length <1 ? (
        
        <h3>Không có sản phẩm nào trong danh sách yêu thích của bạn.</h3>
      ) : (
        products.map((product, index) => (
          <div className="card col-5" key={index}>
            <img className="card-img-top" src={`http://127.0.0.1:8000/${product.url}`} alt={product.ten_san_pham} />
            <div className="card-body">
              <h4 className="card-title">Tên: {product.ten_san_pham}</h4>
              <p className="card-text">Giá: {product.gia} VNĐ</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SanPhamYeuThich;