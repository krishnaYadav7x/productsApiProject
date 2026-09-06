import React, { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";

export default function ProductsContainer({data,query,category}) {


  return (
    <div className="products-container mt-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-4">
      <ProductsCard data={data} query={query} category={category} />
    </div>
  );
}
