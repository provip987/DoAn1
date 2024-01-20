// CardUuDai.js

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchAllUser } from '../../Api/CustomApi';
import { faEnvelope ,faHeart, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

const CardUuDai = ({ addToCart }) => {
  const [listUsers, setListUsers] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});


  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetchAllUser();
        if (res && res.data) {
          setListUsers(res.data);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    getUser();
  }, []);

  const handleFavoriteClick = (itemId) => {
    console.log(`Nút "Yêu thích" cho mục ${itemId} đã được nhấp`);
    
  };
  
  const handleSizeChange = (itemId, selectedSize) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [itemId]: selectedSize,
    }));
  };
 
  
  return (

    <div className="Container">
 
      <div className="row">
        {listUsers &&
          listUsers.length > 0 &&
          listUsers.map((item, index) => (
         
            <div key={index} className="col-md-3">
              <div className="card">
                <div className="pic">
                  {item.hinh_anh && item.hinh_anh.length > 0 && item.hinh_anh[0].url ? (
                    <img src={`http://127.0.0.1:8000/${item.hinh_anh[0].url}`} alt={item.ten_san_pham} />
                  ) : (
                    <img src="path_to_default_image.jpg" alt="No Image" />
                  )}
                </div>
                <div className="card-head">
                  <div className="d-flex justify-content-between">
                    <h6>{item.ten_san_pham}</h6>
                    <div className="price">
                      <p className="text-danger font-weight-bold">{item.gia_cu}đ</p>
                      <p className="text-secondary font-weight-bold" style={{ textDecoration: 'line-through' }}>{item.gia}đ</p>
                    </div>
                  </div>
                  <p className="title">{item.mo_ta}</p>
                  {item.chi_tiet_san_pham && item.chi_tiet_san_pham.length > 0 && (
                    <div className="size-dropdown">
                      <label htmlFor={`sizeDropdown${item.id}`}>Chọn size:</label>
                      <select
                        id={`sizeDropdown${item.id}`}
                        onChange={(e) => handleSizeChange(item.id, e.target.value)}
                      >
                        {item.chi_tiet_san_pham.map((detail, detailIndex) => (
                          <option key={detailIndex} value={detail.size_id}>
                            {detail.size_id}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="d-flex justify-content-between">
                    <button className="update"><Link to={`/tuy_chinh/${item.id}`}>Tùy chỉnh</Link></button>
                    <button className="add" onClick={() => addToCart(item,selectedSizes[item.id])}>
                      Thêm
                    </button>

                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ cursor: 'pointer', fontSize: '20px', color: 'gray-light', margin: '10px 0px 0px 5px' }}
                      onClick={() => handleFavoriteClick(item.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CardUuDai;
