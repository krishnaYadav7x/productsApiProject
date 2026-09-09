import React, { useContext, useEffect, useState } from "react";
import { ShoppingCart, MoonIcon, SunIcon } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router";

export default function Header() {
  const [isDark, setIsDark] = useContext(ThemeContext);
 
  return (
    <header
      className={`sticky top-0 flex items-center justify-between px-4 py-4.5 shadow-2xl ${isDark ? "bg-slate-900 text-white" : "bg-white text-black"}`}
    >
      <h2 className="text-2xl">Amazon</h2>
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-20 cursor-pointer items-center gap-1 rounded border border-black px-2 py-1 ${isDark ? "border border-white" : "border border-black"}`}
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          {isDark ? (
            <SunIcon width={20} height={25} />
          ) : (
            <MoonIcon width={20} height={25} />
          )}
          <span>{isDark ? "Light" : "Dark"}</span>
        </div>
        <Link to={`/cart`}
          className={`h-8 w-12 cursor-pointer rounded ${isDark ? "border border-white" : "border border-black"} px-2 py-1`}
        >
          <ShoppingCart width={20} height={20} />
        </Link>
      </div>
    </header>
  );
}
