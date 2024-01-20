import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Dangky = () => {
  const [ten, setTen] = useState('');
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [sdt, setSdt] = useState('');
  const [diaChi, setDiaChi] = useState('');
  const navigate = useNavigate();

  const handleDangky = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/khach-hang', {
        ten: ten,
        ten_dang_nhap: tenDangNhap,
        password: password,
        email: email,
        sdt: sdt,
        dia_chi: diaChi,
        quyen_id: 1, // Đặt quyen_id thành 1
      });

      // Kiểm tra xem API đã trả về lỗi không
      if (response.data.success === false) {
        // Xử lý thông báo lỗi từ API
        const errors = response.data.errors;
        if (errors.ten) {
          toast.error(errors.ten[0]); // Hiển thị lỗi trường 'ten'
        }
        if (errors.ten_dang_nhap) {
          toast.error(errors.ten_dang_nhap[0]); // Hiển thị lỗi trường 'ten_dang_nhap'
        }
        // Xử lý lỗi cho các trường dữ liệu khác
      } else {
        // Đăng ký thành công, hiển thị thông báo thành công
        toast.success('Đăng ký thành công!');
        // Chuyển hướng người dùng sau khi đăng ký thành công
        navigate('/login');
      }
    } catch (error) {
      // Xử lý lỗi từ API
      toast.error('Đăng ký thất bại!');
    }
  };

  return (
    <div>
      <div className="dangky-container col-4">
        <div className="title">Đăng ký</div>
        <div className="text">Tên</div>
        <input
          type="text"
          placeholder="Tên của bạn *"
          value={ten}
          onChange={(event) => setTen(event.target.value)}
        />
        <div className="text">Tên đăng nhập</div>
        <input
          type="text"
          placeholder="Tên đăng nhập của bạn *"
          value={tenDangNhap}
          onChange={(event) => setTenDangNhap(event.target.value)}
        />
        <div className="text">Mật khẩu</div>
        <input
          type="password"
          placeholder="Mật khẩu... *"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="text">Email</div>
        <input
          type="text"
          placeholder="Email của bạn *"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="text">Số điện thoại</div>
        <input
          type="text"
          placeholder="Số điện thoại của bạn *"
          value={sdt}
          onChange={(event) => setSdt(event.target.value)}
        />
        <div className="text">Địa chỉ</div>
        <input
          type="text"
          placeholder="Địa chỉ của bạn *"
          value={diaChi}
          onChange={(event) => setDiaChi(event.target.value)}
        />
        <div className="dangky-container col-4">
          <button
            className={
              ten && tenDangNhap && password && email && sdt && diaChi ? 'active' : ''
            }
            disabled={
              ten && tenDangNhap && password && email && sdt && diaChi ? false : true
            }
            onClick={() => handleDangky()}
          >
            Đăng ký
          </button>
        </div>
      </div>
      {/* Thêm component ToastContainer để hiển thị thông báo nổi */}
      <ToastContainer />
    </div>
  );
};

export default Dangky;
