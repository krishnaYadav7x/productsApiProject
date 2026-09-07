import React, { useContext, useState } from 'react'
import { Search } from "lucide-react";
import { ThemeContext } from '../contexts/ThemeContext';


export default function SearchProducts({ setQuery,query }) {
  const[isDark] = useContext(ThemeContext)

  const handleQuery = (e)=>{
    setQuery(e.target.value)
  }


  return (
    <div
      className={`flex items-center gap-2 rounded px-2 py-1 ${
        isDark
          ? "border-slate-600 bg-slate-900 text-white placeholder:text-slate-400 focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
          : "border-slate-400 bg-white text-black focus:border-violet-500 focus:ring-1 focus:ring-violet-500"
      }`}
    >
      <Search />
      <input
        className="w-full outline-none"
        type="text"
        name="text"
        id="search"
        placeholder="search products..."
        value={query}
        onChange={handleQuery}
      />
    </div>
  );
}
