import React, { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

export  function CartItemProvider({children}) {
  const [cartItem,setCartItem] = useState([])
  return (
    <CartContext.Provider value={[cartItem, setCartItem]}>
      {children}
    </CartContext.Provider>
  );
}
