import React, { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import CardShimmer from "./CardShimmer";
import { CartContext } from "../contexts/CartContext";

export default function ProductsCard({ data, query, category }) {
  const [isDark] = useContext(ThemeContext);
  const [cartItem, setCartItem] = useContext(CartContext);

  const addToCart = (product) => {
    setCartItem((prev)=>{
      const existing = prev.find((item)=>item.id===product.id)
      if(existing){
        return prev.map((item)=>{
         return item.id===product.id?{...item,quantity:item.quantity+1}:item
        })
      }
      return [...prev,{...product,quantity:1}]
    })
  };

  return data.length === 0 ? (
    <CardShimmer />
  ) : (
    data
      .filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) &&
          (category === "All category" ||
            product.category.toLowerCase() === category.toLowerCase()),
      )
      .map((product) => {
        return (
          <Link
            to={`/productDetails/${product.title}`}
            key={product.id}
            className={`rounded px-4 py-2 shadow-2xl ${
              isDark
                ? "border border-slate-700 bg-slate-900 text-slate-100"
                : "border bg-white text-black"
            }`}
            state={product}
          >
            <img src={product.thumbnail} alt={product.title} />
            <span className="text-center font-bold">{product.title}</span>
            <div className="flex justify-between pt-2.5">
              <h2 className="flex items-center gap-1 whitespace-nowrap">
                <span>Rs</span>
                {new Intl.NumberFormat("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(product.price * 10)}{" "}
              </h2>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product);
                }}
                className={`cursor-pointer rounded bg-gray-300 px-2 py-1 ${
                  isDark
                    ? "bg-violet-500 text-white hover:bg-violet-600"
                    : "bg-gray-300 text-black hover:bg-gray-400"
                }`}
              >
                Add to cart
              </button>
            </div>
          </Link>
        );
      })
  );
}
