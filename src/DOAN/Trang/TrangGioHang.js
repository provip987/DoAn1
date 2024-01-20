import React from 'react'
import GioHang from '../GioHang/GioHang'
import Header from '../TrangChu/header'
import Footer from '../TrangChu/footer'
import Banner from '../TrangChu/banner'
import { useCartContext } from '../MyContext/Context'

const TrangGioHang = () => {
    const { cartItems, addToCart, updateCartItem } = useCartContext();
  return (
    <div>
      <Banner cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}/>
      <GioHang  cartItems={cartItems} updateCartItem={updateCartItem} />
      <Footer/>
    </div>
  )
}

export default TrangGioHang
