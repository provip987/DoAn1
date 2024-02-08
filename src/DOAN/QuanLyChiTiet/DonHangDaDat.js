import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../MyContext/AuthContext';
import axios from 'axios';
import 'moment-timezone';
import moment from 'moment'; // Import thư viện moment
import axiosInstance from '../http/axiosInstance';
const DonHangDaDat = () => {
    const [orders, setOrders] = useState([]);
    const [details, setDetails] = useState([]);
    const [showTable, setShowTable] = useState(true);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        const fetchChiTiet = async () => {
            const config = {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            };

        try {
                const response = await axiosInstance.get('/get-orders', config);
                setOrders(response.data.orders);
                setDetails(response.data.details);
            } catch (error) {
                console.error('Có lỗi xảy ra khi lấy thông tin người dùng', error);
            }
        };
        fetchChiTiet();
    }, []);


const showDetailTable = (orderId) => {
    setShowTable(!showTable);
    const data = details.filter(item => item.id === orderId);
    setFilterData(data);
    }
  // Hiển thị thông tin chi tiết ở đây
  return (
    <div class="row">
        {showTable && (
        <table class="table">
        <thead class="thead-light">
        <tr>
            <th>STT</th>
            <th>Tổng tiền</th>
            <th>Ghi chú</th>
            <th>Trạng thái</th>
            <th>Ngày Đặt</th>
            
            <th></th>
        </tr>
        </thead>
        <tbody>
        {orders.map((order, index) => (
        <tr>
            <td>{index + 1}</td>
            <td>{order.tong_tien}đ</td>
            <td>{order.ghi_chu}</td>
            <td>{order.trang_thai}</td>
            <td>{moment(order.created_at).tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss')}</td>
            <td><a onClick={() => showDetailTable(order.id)} href="#">Chi tiết</a></td>
        </tr>
        ))}
        </tbody>
        </table>
    )}

{!showTable && (
        <table class="table">
            <caption style={{'caption-side':'top', 'text-align': 'center'}}><h3>Chi tiết đơn hàng</h3></caption>
        <thead class="thead-light">
        <tr>
            <th>STT</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Size</th>
            <th>Thành tiền</th>
        </tr>
        </thead>
        <tbody>
        {filterData.map((detail, index) => (
            <tr>
                <td>{index + 1}</td>    
                <td>{detail.ten_san_pham}</td>
                <td>{detail.gia}</td>
                <td>{detail.so_luong}</td>
                <td>{detail.size_id}</td>
                <td>{detail.tong_tien}đ</td>
            </tr>
        ))}
        </tbody>
        </table>
    )}
    </div>
  );
};

export default DonHangDaDat;