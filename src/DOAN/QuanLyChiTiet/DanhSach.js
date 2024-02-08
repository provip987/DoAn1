import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import ChiTietTaiKhoan from './ChiTietTaiKhoan';
import { AuthContext } from '../MyContext/AuthContext';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
// import DatLaiMatKhau from './DatLaiMatKhau';
// import DiaChiGiaoHang from './DiaChiGiaoHang';
import SanPhamYeuThich from './SanPhamYeuThich';
import DonHangDaDat from './DonHangDaDat';
import DatLaiMatKhau from './DatLaiMatKhau';
import Banner from '../TrangChu/banner';
const Dashboard = () => {
  const [activeKey, setActiveKey] = useState('chiTietTaiKhoan');
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout(); // Gọi hàm đăng xuất từ AuthContext
    // Thêm bất kỳ xử lý nào ở đây nếu cần, ví dụ chuyển hướng
  };
  const getContent = () => {
    switch (activeKey) {
      case 'chiTietTaiKhoan':
        return <ChiTietTaiKhoan />;
      case 'datLaiMatKhau':
        return <DatLaiMatKhau />;
      case 'donHangDaDat':
        return <DonHangDaDat />;
      case 'donDatHangYeuThich':
        return <SanPhamYeuThich />;
      default:
        return null;
    }
  };

  return (
<>
<Banner/>
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar">
          <Nav variant="pills" className="flex-column" activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item>
              <Nav.Link eventKey="chiTietTaiKhoan">Chi Tiết Tài Khoản</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="datLaiMatKhau">Đặt Lại Mật Khẩu</Nav.Link>
            </Nav.Item>
            {/* 
            <Nav.Item>
              <Nav.Link eventKey="diaChiGiaoHang">Địa Chỉ Giao Hàng</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="donDatHangYeuThich">Đơn Đặt Hàng Yêu Thích</Nav.Link>
            </Nav.Item> */}
            <Nav.Item>
              <Nav.Link eventKey="donHangDaDat">Đơn Hàng Đã Đặt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="donDatHangYeuThich">Món Yêu Thích</Nav.Link>
            </Nav.Item>
              {/* <Button onClick={getFavoriteProducts} variant="secondary" className="mt-3">Danh sách yêu thích</Button> */}
              <Button onClick={handleLogout} variant="secondary" className="mt-3">Đăng Xuất</Button>
          </Nav>
        </Col>
        <Col md={9} className="content">
          {getContent()}
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Dashboard;
