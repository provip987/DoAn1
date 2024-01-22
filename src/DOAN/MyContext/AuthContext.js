import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
// Tạo một Context mới
export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

// Tạo một Provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Kiểm tra localStorage hoặc gọi API để xác định trạng thái đăng nhập
    const token = localStorage.getItem('token');
    setUser(token); 
    setIsLoggedIn(!!token);
  }, []);

 
  // Hàm để "đăng nhập" người dùng
  const login = (token, userData)=> {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    //setUser(userData); // Lưu thông tin người dùng
    setUser(token); 
  };

  // Hàm để "đăng xuất" người dùng
  const logout = (message = false) => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    if(!message) {
      toast.success("Đăng xuất thành công!"); 
    } else {
      toast.success("Đổi mật khẩu thành công!"); 
    }
    
    navigate('/login');
  };

  // Giá trị mà AuthContext sẽ cung cấp
  const value = {
    isLoggedIn,
    user, 
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
