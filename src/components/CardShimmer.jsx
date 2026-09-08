import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function CardShimmer() {
  const[isDark] =  useContext(ThemeContext)
  return (
    <div className="products-container mt-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 px-2">
      {
        Array.from({length:20}).map((card,i)=>{
          return (
            <div
              key={i}
              className={`min-h-96 rounded ${isDark ? "bg-slate-200 dark:bg-slate-800 " : "bg-slate-200"} animate-pulse`}
            ></div>
          );
        })
      }
    </div>
  )
}
