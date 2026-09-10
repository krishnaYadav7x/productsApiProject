import React, { useState } from 'react'
import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CartContext = createContext()

export  function CartItemProvider({children}) {

    const addToCart = (product) => {
      setCartItem((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) => {
            return item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          });
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    };

  const [cartItem,setCartItem] = useLocalStorage('cartItem',[])
  return (
    <CartContext.Provider value={[cartItem, setCartItem, addToCart]}>
      {children}
    </CartContext.Provider>
  );
}
