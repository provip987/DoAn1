import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../Api/CustomApi';

function TuyChinh({ addToCart }) {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const res = await fetchProductDetails(id);
        console.log('Raw API Response:', res);
        // Kiểm tra xem response có giá trị không
        if (res !== undefined) {
          // Nếu dữ liệu trả về là một đối tượng và không có thuộc tính success
          if (typeof res === 'object' && !('success' in res)) {
            setProductDetails(res);  // Sử dụng toàn bộ response nếu không có success
          } else if (res.success) {
            setProductDetails(res.data);
          } else {
            console.error('Error response from API:', res.message);
            // Xử lý khi API trả về lỗi
          }
        } else {
          console.error('Empty response received');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    getProductDetails();
  }, [id]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              {productDetails.hinh_anh && productDetails.hinh_anh.length > 0 && (
                <img
                  className="card-img-top mb-5 mb-md-0"
                  src={`http://127.0.0.1:8000/${productDetails.hinh_anh[0].url}`}
                  alt="{productDetails.ten_san_pham}"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
              )}
            </div>
            <div className="col-md-6">
              <div className="fs-5 mb-5">
                <span>{productDetails.ten}</span>
                <span>{productDetails.gia}đ</span>
              </div>
              <p className="lead">{productDetails.mo_ta_chi_tiet}</p>

              {productDetails.chi_tiet_san_pham.length !== 0 && (
                <div className="d-flex">
                  <input
                    className="form-control text-center me-3"
                    id="inputQuantity"
                    type="number"
                    value="1"
                    style={{ maxWidth: '5rem' }}
                  />
                  <button
                    className="btn btn-outline-dark flex-shrink-0"
                    type="button"
                    onClick={() => addToCart(productDetails)}
                  >
                    Thêm
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
export default TuyChinh;
