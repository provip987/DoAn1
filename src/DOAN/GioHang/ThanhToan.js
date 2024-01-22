import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import axiosInstance from '../http/axiosInstance';
import { useCartContext } from '../MyContext/Context';
import { Link, useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import { toast } from 'react-toastify';
=======
import { useCartContext } from '../MyContext/Context';
>>>>>>> f24eb0cc2ef4d339d87e7978bc37200fbccb2afe
const ThanhToan = ({ cartItems }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  // Lọc ra các sản phẩm được chọn từ giỏ hàng
  const selectedItems = cartItems.filter((item) => item.isSelected);
  const navigate = useNavigate();
  // Tính tổng giá trị đơn hàng của các sản phẩm được chọn
  const calculateTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.gia_cu * item.quantity, 0);
  };
<<<<<<< HEAD
  const { setCartItems } = useCartContext();
  
=======

  const { setCartItems } = useCartContext();
>>>>>>> f24eb0cc2ef4d339d87e7978bc37200fbccb2afe
  const handlePayment = async () => {
    if (selectedItems.length === 0) {
      // Hiển thị thông báo hoặc xử lý nếu không có sản phẩm nào được chọn
      toast.error('Không có sản phẩm nào được chọn để thanh toán.');
      return;
    }
    const orderData = {
      khachhang_id: 3,
      tong_tien: calculateTotalPrice(),
      trang_thai: 'thanh toán',
      ghi_chu: 'hihi',
      chi_tiet: selectedItems.map(item => ({
        san_pham_id: item.id,
        so_luong: item.quantity,
        tong_tien: item.gia_cu * item.quantity,
        size_id: 2,  // Replace with the actual size_id
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