import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../http/axiosInstance';
import { useCartContext } from '../MyContext/Context';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';


const ThanhToan = ({ cartItems }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  // Lọc ra các sản phẩm được chọn từ giỏ hàng
  const selectedItems = cartItems.filter((item) => item.isSelected);
  const navigate = useNavigate();
  const [ghiChu, setGhiChu] = useState('');
  // Tính tổng giá trị đơn hàng của các sản phẩm được chọn
  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.gia_cu * item.quantity, 0);
  };

  const { setCartItems } = useCartContext();
  



  const handlePayment = async () => {
    if (selectedItems.length === 0) {
      // Hiển thị thông báo hoặc xử lý nếu không có sản phẩm nào được chọn
      toast.error('Không có sản phẩm nào được chọn để thanh toán.');
      return;
    }
    const sanitizedGhiChu = ghiChu ? ghiChu.replace(/\n/g, '') : 'không có';
    const orderData = {
     
      tong_tien: calculateTotalPrice(),
      trang_thai: 'thanh toán',
      ghi_chu: sanitizedGhiChu,
      chi_tiet: selectedItems.map(item => ({
        san_pham_id: item.id,
        so_luong: item.quantity,
        tong_tien: item.gia_cu * item.quantity,
        size_id: item.selectedSize,
      })),
    };

    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };
      const response = await axiosInstance.post('http://127.0.0.1:8000/api/dat-hang', orderData, config);
      setCartItems([]);
      setPaymentSuccess(response.data.success);
      
      navigate('/');
      toast.success('Đặt hàng thành công!');
      // Handle success, maybe redirect or show a success message
    } catch (error) {
      
      console.error('Error making payment:', error.message);
      toast.error('Đặt hàng không thành công!');
      // Handle error, show an error message to the user
    }
  };

  return (
    <div>
      <h1>Trang thanh toán</h1>
      {selectedItems.length > 0 ? (
        <div>
          <h2>Các sản phẩm đã chọn:</h2>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.id}>
                <h4> {item.ten_san_pham} | Giá {item.gia * item.quantity} đ | Size:{item.selectedSize && (
                  <strong>{item.selectedSize}</strong>
                )}</h4>

                <img src={`http://127.0.0.1:8000/${item.hinh_anh}`} alt={item.ten_san_pham} className="w-1" />

              </li>
            ))}
          </ul>
          <div>
            <label htmlFor="ghiChu">Ghi chú:</label>
            <textarea
              id="ghiChu"
              className="form-control"
              rows="3"
              placeholder="Nhập ghi chú cho đơn hàng..."
              value={ghiChu}
              onChange={(e) => setGhiChu(e.target.value)}
            ></textarea>
          </div>

          <h3>Tổng thanh toán: {calculateTotalPrice()}đ</h3>
        </div>
      ) : (
        <p>Không có sản phẩm nào được chọn để thanh toán.</p>
      )}
      <button onClick={handlePayment}>Thanh toán</button>
      {paymentSuccess !== null && (
        <p>{paymentSuccess ? 'Đặt hàng thành công!' : 'Lỗi khi đặt hàng.'}</p>
      )}
    </div>
  );
};

export default ThanhToan;
