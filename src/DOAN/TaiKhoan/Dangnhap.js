import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useContext } from 'react';
import { AuthContext } from '../MyContext/AuthContext';

const Dangnhap = () => {
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const handleLogin = async () => {
    if (tenDangNhap.trim() === '' || password.trim() === '') {
      toast.error('Vui lòng nhập tên đăng nhập và mật khẩu.');
      return;
    }
  
    try {


    
      const response = await axios.post('http://127.0.0.1:8000/api/dang-nhap', {
        ten_dang_nhap: tenDangNhap,
        password: password,
      });
      


      // Nếu đăng nhập thành công, hiển thị thông báo nổi thành công
      if (response.status === 200) {
        toast.success('Đăng nhập thành công!');
        login(response.data.access_token); // Cập nhật trạng thái đăng nhập
        navigate('/');
      }else {
        toast.error('Đăng nhập thất bại! Vui lòng thử lại sau.');
      };
    } catch (error) {
      // Nếu có lỗi, hiển thị thông báo nổi lỗi
      toast.error('Đăng nhập thất bại!');
    }
  };

  return (
    <div>
      <>
        <div className="login-container col-4">
          <div className="title">Đăng nhập</div>
          <div className="text">Tên đăng nhập</div>
          <input
            type="text"
            placeholder="tên đăng nhập của bạn"
            value={tenDangNhap}
            onChange={(event) => setTenDangNhap(event.target.value)}
          />
          <div className="text">Mật khẩu</div>
          <input
            type="password"
            placeholder="mật khẩu"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className={tenDangNhap && password ? 'active' : ''}
            disabled={tenDangNhap && password ? false : true}
            onClick={() => handleLogin()}
          >
            Đăng nhập
          </button>
          <div className="dang-ky">
            Đăng ký tài khoản? <Link to="/dangky">Đăng ký</Link>
          </div>
        </div>

        <Routes>
          <Route path="/login" element={<Dangnhap />} />
        </Routes>

        {/* Thêm component ToastContainer để hiển thị thông báo nổi */}
        <ToastContainer />
      </>
    </div>
  );
};

export default Dangnhap;
