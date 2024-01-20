import React from 'react'
import Banner from '../TrangChu/banner'
import Footer from '../TrangChu/footer'
import TuyChinh from '../SanPham/TuyChinh'
import Header from '../TrangChu/header'
import { useCartContext } from '../MyContext/Context'

const TrangTheSanPham = () => {
    const { cartItems, addToCart, updateCartItem } = useCartContext();
  return (
    <div>
   <Banner cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}/>
      <TuyChinh addToCart={addToCart}/>
      <Footer/>
    </div>
  )
}

export default TrangTheSanPham
