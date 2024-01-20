import React from 'react'
import Banner from '../TrangChu/banner'
import ThanhToan from '../GioHang/ThanhToan'
import Footer from '../TrangChu/footer'
import { useCartContext } from '../MyContext/Context'

const TrangThanhToan = () => {
    const { cartItems, addToCart, updateCartItem } = useCartContext();
  return (
    <div>
        <Banner/>
        <ThanhToan  cartItems={cartItems}/>
        <Footer/>
      
    </div>
  )
}

export default TrangThanhToan
