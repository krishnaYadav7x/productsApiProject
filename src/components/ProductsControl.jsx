import React from "react";
import SearchProducts from "./SearchProducts";
import Select from "./Select";

export default function ProductsControl({ data, setQuery, query, setCategory,setData }) {
  return (
    <div className="flex flex-col gap-4 px-2 pt-4">
      <SearchProducts setQuery={setQuery} query={query} />
      <div className="flex justify-between gap-2 max-[369px]:flex-col">
        <Select
          setCategory={setCategory}
          options={[...new Set(data.map((product) => product.category))]}
          defaultOption={"All category"}
          onChange={(e) => {
            setCategory(e.target.value.toLowerCase());
          }}
          id="category"
        />
        <Select
          options={["Price low to high", "Price high to low"]}
          defaultOption={"Sort products"}
          id="sort"
          onChange={(e)=>{
            if(e.target.value==="Price low to high"){
                setData((prev)=>[...prev.sort((a,b)=>a.price-b.price)])
            }else{
              setData((prev) => [...prev.sort((a, b) => b.price - a.price)]);
            }
          }}
        />
      </div>
    </div>
  );
}
