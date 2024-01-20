// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item, selectedSize) => {
    const finalSize = selectedSize || item.chi_tiet_san_pham[0]?.size_id;

    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.selectedSize === finalSize
    );

    let updatedCartItems;

    if (existingItem) {
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.selectedSize === finalSize
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              gia_cu: cartItem.gia_cu + item.chi_tiet_san_pham.find((size) => size.size_id === finalSize).gia,
              isSelected: true,
            }
          : cartItem
      );
    } else {
      const selectedSizeDetails = item.chi_tiet_san_pham.find((size) => size.size_id === finalSize);

      updatedCartItems = [
        ...cartItems,
        {
          ...item,
          quantity: 1,
          hinh_anh: item.hinh_anh[0].url,
          selectedSize: finalSize,
          gia_cu: selectedSizeDetails.gia,
          isSelected: true,
        },
      ];
    }

    setCartItems(updatedCartItems);
    setCartCount(cartCount + 1);
  };

  const updateCartItem = (itemId, sizeId, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId && item.selectedSize === sizeId
          ? { ...item, quantity: newQuantity }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      // If newQuantity <= 0, remove the item from the cart
      const updatedCartItems = cartItems.filter(
        (item) => !(item.id === itemId && item.selectedSize === sizeId)
      );
      setCartItems(updatedCartItems);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.gia_cu * item.quantity, 0);
  };

  const contextValue = {
    cartItems,
    cartCount,
    addToCart,
    updateCartItem,
    calculateTotalPrice,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
