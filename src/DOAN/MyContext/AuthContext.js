import React, { createContext, useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  useEffect(() => {
    // Kiểm tra localStorage hoặc gọi API để xác định trạng thái đăng nhập
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

 
  // Hàm để "đăng nhập" người dùng
  const login = (token, userData)=> {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
    setUser(userData); // Lưu thông tin người dùng
  };

  // Hàm để "đăng xuất" người dùng
  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    toast.success("Đăng xuất thành công!"); 
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
