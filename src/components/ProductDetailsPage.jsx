import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router'

import { searchProducts } from '../api/products';

export default function ProductDetailsPage() {
  const [productsData,setProductsData] = useState([])
  console.log(productsData);
  const {title} = useParams()
  console.log(title);
  
  useEffect(()=>{
     async function getData (){
      const data = await searchProducts(title)
      setProductsData(...data)
    }
    getData()
      
  },[])
  return (
    <>
      <div className="space-x-10 px-4 py-2">
        <button
          onClick={() => history.back()}
          className="flex cursor-pointer border px-2 py-1 rounded"
        >
          <ArrowLeft /> Back
        </button>
        <img src={productsData.thumbnail} alt={productsData.title} />
        {productsData.brand ? (
          <span className="text-2xl font-bold">
            Brand: {productsData.brand}
          </span>
        ) : (
          ""
        )}
        <h2 className="font-bold">
          Price:{" "}
          {new Intl.NumberFormat("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(productsData.price * 10)}{" "}
          <span>Rs</span>
        </h2>
        <figcaption>
          <span className='font-bold'>Description</span>: {productsData.description}
        </figcaption>
      </div>
    </>
  );
}
