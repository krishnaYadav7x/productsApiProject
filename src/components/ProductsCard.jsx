import React from 'react'

export default function ProductsCard({ data, query ,category}) {
  return !data
    ? "No products found"
    : data
        .filter(
          (product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) &&
            product.category.toLowerCase()===category.toLowerCase(),
        )
        .map((product) => {
          return (
            <div key={product.id} className="border">
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.title}</span>
              <h2>
                Rs
                {new Intl.NumberFormat("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(product.price * 10)}{" "}
              </h2>
            </div>
          );
        });
}
