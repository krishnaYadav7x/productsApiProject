import React, { useEffect, useState } from "react";

import ProductsCard from "./ProductsCard";

export default function ProductsContainer({data,query,category}) {


  return (
    <div className="products-container mt-4 flex flex-wrap gap-2 px-4">
      <ProductsCard data={data} query={query} category={category} />
    </div>
  );
}
