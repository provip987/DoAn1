// ChiTietTaiKhoan.js

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../MyContext/AuthContext';
import axios from 'axios';
import axiosInstance from '../http/axiosInstance';
const ChiTietTaiKhoan = () => {
  const { user } = useContext(AuthContext);
  const [chiTiet, setChiTiet] = useState(null);

  useEffect(() => {
    if (user) {
      const fetchChiTiet = async () => {
        const config = {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        };

        try {
          const response = await axiosInstance.get('http://127.0.0.1:8000/api/khach-hang/thong-tin', config);
          setChiTiet(response.data);
        } catch (error) {
          console.error('Có lỗi xảy ra khi lấy thông tin người dùng', error);
        }
      };

      fetchChiTiet();
    }
  }, [user]);

  if (!chiTiet) {
    return <div>Đang tải...</div>;
  }

  // Hiển thị thông tin chi tiết ở đây
  return (
    <div>
      <h1>Thông Tin Tài Khoản</h1>
      {/* Hiển thị thông tin tài khoản */}
      <p>Tên: {chiTiet.ten}</p>
      {/* Không hiển thị password */}
      <p>Email: {chiTiet.email}</p>
      <p>SĐT: {chiTiet.sdt}</p>
      <p>Địa chỉ: {chiTiet.dia_chi}</p>
      {/* Thêm các thông tin khác nếu cần */}
    </div>
  );
};

export default ChiTietTaiKhoan;
