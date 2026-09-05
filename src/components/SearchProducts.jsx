import React, { useState } from 'react'
import { Search } from "lucide-react";


export default function SearchProducts({ setQuery,query }) {

  const handleQuery = (e)=>{
    setQuery(e.target.value)
  }


  return (
    <div className="flex items-center gap-2 rounded border bg-white px-2 py-1">
      <Search />
      <input
        className="w-full outline-none"
        type="text"
        name="text"
        id="text"
        placeholder="search products..."
        value={query}
        onChange={handleQuery}
      />
    </div>
  );
}
