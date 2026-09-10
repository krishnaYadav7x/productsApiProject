import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { CartContext } from "../contexts/CartContext";

const imgUrl = new URL("../assets/hero.png", import.meta.url).href;

export default function Cart() {
  const [isDark] = useContext(ThemeContext);
  const [cartItem, setCartItem] = useContext(CartContext);

  const deleteItem = (id)=>{
    return setCartItem((prev)=>{
      return prev.filter((item)=>item.id!==id)
    })
  }

  console.log(cartItem);
  return (
    
      <div
        className={`flex min-h-[calc(100vh-68px)] flex-col border-t-2 px-4 py-2 pt-4 ${
          isDark
            ? "border-slate-700 bg-slate-950 text-slate-100"
            : "border-slate-300 bg-white text-slate-900"
        }`}
      >
        {" "}
        <h2 className="text-center text-2xl font-bold">Cart</h2>
        <button
          className=" my-3 flex w-20 cursor-pointer items-center gap-1 rounded border border-gray-100 px-3 py-2"
          onClick={() => history.back()}
        >
          <ArrowLeft />
          Back
        </button>
        <div className="mt-4 space-y-6">
          {cartItem.length === 0 ? (
            <h1 className="mt-50 flex items-center justify-center gap-2 text-center text-3xl font-bold">
              Your cart is empty <ShoppingCart />{" "}
            </h1>
          ) : (
            cartItem.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-center gap-4 rounded border px-4 py-2 sm:flex-row sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="max-w-15"
                      src={item.thumbnail}
                      alt={item.thumbnail}
                    />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <span>{item.price} Rs</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-end gap-2">
                    <div>
                      quantity <span>{item.quantity}</span>
                    </div>
                    <button
                      onClick={() => {
                        deleteItem(item.id);
                      }}
                      className="translate-x-1 translate-y-1 cursor-pointer rounded bg-red-500 px-4 py-2 shadow-2xl transition-transform active:scale-95"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      

  );
}
