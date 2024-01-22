import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../Api/CustomApi';

function TuyChinh({addToCart}) {
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
      <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                      {productDetails.hinh_anh && productDetails.hinh_anh.length > 0 && (
              <img class="card-img-top mb-5 mb-md-0" src={`http://127.0.0.1:8000/${productDetails.hinh_anh[0].url}`} alt="{productDetails.ten_san_pham}" />
            )}
                      </div>
                    <div class="col-md-6">
                        <div class="small mb-1">SKU: BST-498</div>
                        <h1 class="display-5 fw-bolder">Shop item template</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">{productDetails.gia_cu}</span>
                            <span>{productDetails.gia}đ</span>
                        </div>
                        <p class="lead">{productDetails.mo_ta_chi_tiet}</p>
                        {(productDetails.chi_tiet_san_pham).length != 0 && (<div class="d-flex">
                            <input class="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{maxWidth: '3rem'}} />
                            <button class="btn btn-outline-dark flex-shrink-0" type="button"  onClick={() => addToCart(productDetails)}>
                                <i class="bi-cart-fill me-1"></i>
                                Add to cart
                               
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
