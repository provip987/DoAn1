import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../MyContext/AuthContext';
import axios from 'axios';
import axiosInstance from '../http/axiosInstance';
import { toast, ToastContainer } from 'react-toastify';
    const DatLaiMatKhau = () => {
    const { logout } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password != rePassword) {
            setError(!error);
            return false;
        }

        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          };
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/change-password', {password: password}, config);
            logout(true);
        } catch (error) {
            toast.error('Thay đổi mật khẩu thất bại!');
        }
           
    }
  return (
    <div class="row">
        <form onSubmit={(e) => handleSubmit (e)} class="col-6">
        {error && (
        <>
            <div class="alert alert-danger">
                Mật khẩu không khớp
            </div>
            <label htmlFor='firstName'>Mật khẩu mới: </label>
        </>
        )}
        <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor='firstName'>Nhập lại mật khẩu mới: </label>
        <input
            type='password'
            name='password'
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
        />
            <br/>
            <br/>
        <input type="submit" value="Đổi mật khẩu" class="btn btn-primary"/>
        </form>
    </div>
  );
};

export default DatLaiMatKhau;
