import React from "react";
import SearchProducts from "./SearchProducts";
import Select from "./Select";

export default function ProductsControl({ data, setQuery, query, setCategory }) {
  return (
    <div className="flex flex-col gap-4 px-2">
      <SearchProducts setQuery={setQuery} query={query} />
      <div className="flex justify-between gap-2 max-[369px]:flex-col">
        <Select
          setCategory={setCategory}
          options={[...new Set(data.map((product) => product.category))]}
          defaultOption={"All category"}
          onChange={(e) => {
            setCategory(e.target.value.toLowerCase());
          }}
        />
        <Select
          options={["Price low to high", "Price high to low", "Ratings"]}
          defaultOption={"Sort products"}
        />
      </div>
    </div>
  );
}
