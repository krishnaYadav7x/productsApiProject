import React, { useState } from 'react'
import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CartContext = createContext()

export  function CartItemProvider({children}) {
  const [cartItem,setCartItem] = useLocalStorage('cartItem',[])
  return (
    <CartContext.Provider value={[cartItem, setCartItem]}>
      {children}
    </CartContext.Provider>
  );
}
