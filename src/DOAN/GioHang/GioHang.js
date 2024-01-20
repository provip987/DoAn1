import '../../App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeart, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import{collapse} from '../../bootstrap-5.2.3/css/bootstrap-grid.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const GioHang = ({ cartItems, updateCartItem }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

 
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.gia_cu * item.quantity, 0);
  };
  const [isCollapsed, setCollapsed] = useState(false);

  const handleCollapseToggle = () => {
     setCollapsed(!isCollapsed);
  };
  const handleQuantityChange = (itemId, sizeId, newQuantity) => {
    console.log("Calling updateCartItem:", itemId, sizeId, newQuantity);
    updateCartItem(itemId, sizeId, newQuantity);
  };

  const handleSelectToggle = (itemId) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) => {
        const updatedItem = item.id === itemId ? { ...item, isSelected: !item.isSelected } : item;
        return updatedItem;
      }),
      () => {
        // Hiển thị giá trị true hoặc false trong console sau khi setState hoàn thành
        console.log(`Checkbox clicked for item ID: ${itemId}, isSelected: ${selectedItems.find(item => item.id === itemId)?.isSelected}`);
      }
    );
  };
  
  
  const handleGoToThanhToan = () => {
    // Lọc ra các sản phẩm được chọn từ giỏ hàng
    const selectedItemsForPayment = cartItems.filter((item) => item.isSelected);
    // Chuyển hướng đến trang thanh toán và truyền danh sách sản phẩm được chọn
    navigate('/thanh_toan', { state: { selectedItems: selectedItemsForPayment } });
  };

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
     
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
          
            <div className="card mb-4">
            <div className="card-header py-3">
            <h4> <b>Giỏ hàng của tôi</b></h4>

              </div>
              
              <div className="card-body">
                {cartItems.length === 0 ? (
               
                  <p>GIỎ HÀNG CỦA BẠN ĐANG TRỐNG. HÃY ĐẶT MÓN NGAY!</p>
                 
                  
                ) : (
                  <div>
                    {cartItems.map((item) => (
                    <div key={item.id} className={`row ${item.isSelected ? 'selected' : ''}`}>
                    <input
                        type="checkbox"
                        checked={item.isSelected}
                        onChange={() => handleSelectToggle(item.id)}
/>
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          
                          <div className="bg-image hover-overlay hover-zoom ripple rounded " data-mdb-ripple-color="light">
                            
                            <img src={`http://127.0.0.1:8000/${item.hinh_anh}`} alt={item.ten_san_pham} className="w-100" />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                            </a>
                          </div>
                          
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p><strong>{item.ten_san_pham}</strong></p>
                          <a className="btn " onClick={handleCollapseToggle}> Xem chi tiết </a>
                                 <div className={`collapse ${isCollapsed ? 'show' : ''}`} id="collapseExample">
                           <div > {item.mo_ta} </div>
                                  </div>                       
                          <button type="button" className="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                          <button type="button" className="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
                            <FontAwesomeIcon icon={faHeart} />
                          </button>
                          <p><strong><Link to="/chinh_sua"className="btn ">Chỉnh sữa</Link></strong></p>
                          {item.selectedSize && (
                            <p>Kích thước: <strong>{item.selectedSize}</strong></p>
                          )}
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <button
                          className="btn btn-primary px-3 me-2"
                          onClick={() => handleQuantityChange(item.id, item.selectedSize, Math.max(item.quantity - 1, 0))}
                          disabled={item.quantity <= 0}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                            <div className="form-outline">
                              <input
                                id={`quantity-${item.id}`}
                                min="0"
                                name="quantity"
                                value={item.quantity}
                                type="number"
                                className="form-control"
                                readOnly
                              />
                              <label className="form-label" htmlFor={`quantity-${item.id}`}>
                              
                              </label>
                            </div>
                           <button
                          className="btn btn-primary px-3 ms-2"
                          onClick={() => handleQuantityChange(item.id, item.selectedSize, item.quantity + 1)}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                          </div>
                          <p className="text-start text-md-center">
                            <strong>{item.gia_cu * item.quantity}đ</strong>
                          </p>
                        </div>
                      </div>
                    ))}
                    <div>
                      <h4>Total order value: {calculateTotalPrice()}đ</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
            <div className="card-header py-3">
                <h3 className="mb-0"> <b>{cartItems.length} món</b></h3>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Tổng đơn hàng
                    <span>{calculateTotalPrice()}đ</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Phí giao hàng
                    <span>Free</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Tổng thanh toán</strong>
                      
                    </div>
                    <span><strong>{calculateTotalPrice()}đ</strong></span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleGoToThanhToan}>
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GioHang;