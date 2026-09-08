import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ProductDetailsShimmer() {
  const [isDark] = useContext(ThemeContext);

  const shimmer = isDark ? "bg-slate-800" : "bg-slate-200";

  return (
    <div className="w-full max-w-[700px]">
      {/* Image */}
      <div className="flex justify-center">
        <div
          className={`h-[500px] w-full max-w-[600px] animate-pulse rounded ${shimmer}`}
        />
      </div>

      
      <div className="mt-4 space-y-3">
     
        <div className={`h-7 w-64 animate-pulse rounded ${shimmer}`} />

    
        <div className={`h-5 w-32 animate-pulse rounded ${shimmer}`} />

      
        <div className="space-y-2">
          <div className={`h-4 w-full animate-pulse rounded ${shimmer}`} />
          <div className={`h-4 w-11/12 animate-pulse rounded ${shimmer}`} />
          <div className={`h-4 w-8/12 animate-pulse rounded ${shimmer}`} />
        </div>
      </div>

    
      <div className={`mt-8 h-8 w-60 animate-pulse rounded ${shimmer}`} />

      {/* Reviews */}
      <div className="mt-6 space-y-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={`h-28 animate-pulse rounded border-l-8 border-l-violet-500 ${shimmer}`}
          />
        ))}
      </div>
    </div>
  );
}
