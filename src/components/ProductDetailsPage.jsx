import React, { useContext, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation, useParams } from "react-router";

import { searchProducts } from "../api/products";
import { ThemeContext } from "../contexts/ThemeContext";
import ProductDetailsShimmer from "./ProductDetailsShimmer";
import { CartContext } from "../contexts/CartContext";

export default function ProductDetailsPage() {
  const [productsData, setProductsData] = useState([]);
  const [isDark] = useContext(ThemeContext);
  const [cartItem,setCartItem,addToCart] = useContext(CartContext)

  const { title } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setProductsData(state);
      return;
    }

    async function getData() {
      const data = await searchProducts(title);
      setProductsData(...data);
    }

    getData();
  }, []);

  return (
    <main
      className={`min-h-screen px-4 py-2 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-white text-black"
      }`}
    >
      <button
        className="flex cursor-pointer gap-1 rounded border px-2 py-2 shadow-2xl"
        onClick={() => history.back()}
      >
        <ArrowLeft />
        Back
      </button>

      <div className="flex justify-center">
        {!productsData.reviews ? (
          <ProductDetailsShimmer />
        ) : (
          <div className="product-details-container w-full max-w-[700px]">
            {/* Product Image */}
            <img
              className="w-full max-w-[600px]"
              src={productsData.thumbnail}
              alt={productsData.title}
            />

            {/* Product Information */}
            <div className="space-y-2">
              {productsData.brand && (
                <h2 className="text-2xl font-bold">
                  <span>Brand:</span> {productsData.brand}
                </h2>
              )}

              <p className="font-bold">
                <span>Price:</span>{" "}
                {new Intl.NumberFormat("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(productsData.price * 10)}{" "}
                Rs
              </p>

              <p>
                <span
                  className={`font-bold ${
                    isDark ? "text-slate-300" : "text-black"
                  }`}
                >
                  Description:
                </span>{" "}
                {productsData.description}
              </p>
            </div>

            <div className="flex justify-end my-5">
              <button onClick={() => addToCart(productsData)}
                className={`cursor-pointer rounded-md px-5 py-2 text-sm font-semibold shadow-md transition-all duration-200 active:scale-95 ${
                  isDark
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-700 text-white hover:bg-blue-800"
                }`}
              >
                Add to cart
              </button>
            </div>

            <div className="mt-8 w-60 border-b-4 border-b-violet-500 text-2xl font-bold">
              Customers reviews
            </div>

            <div className="ratings-reviews mt-6 space-y-8">
              {productsData.reviews.map((review, i) => (
                <div
                  className={`review space-y-2 rounded border-l-8 px-4 py-2 shadow-md ${
                    isDark
                      ? "border-l-violet-500 bg-slate-900"
                      : "border-l-violet-500 bg-white"
                  }`}
                  key={i}
                >
                  <div className="flex justify-between">
                    <h2 className="font-bold">{review.reviewerName}</h2>

                    <span>
                      {new Date(review.date).toLocaleDateString("en-IN", {
                        timeZone: "Asia/Kolkata",
                      })}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <span className="font-bold">Email</span>
                    <span>{review.reviewerEmail}</span>
                  </div>

                  <span className="font-bold">Rating: {review.rating}</span>

                  <p>
                    <span className="font-bold">Review:</span> {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
