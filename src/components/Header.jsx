import React, { useEffect, useState } from "react";
import { ShoppingCart, MoonIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-4 flex items-center justify-between px-4 py-4.5 shadow-2xl sticky top-0 bg-white">
      <h2 className="text-2xl">Products</h2>
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-20 cursor-pointer items-center gap-1 rounded border border-black px-2 py-1">
          <MoonIcon width={20} height={25} />
          <span>Dark</span>
        </div>
        <div className="h-8 w-12 cursor-pointer rounded border border-black px-2 py-1">
          <ShoppingCart width={20} height={20} />
        </div>
      </div>
    </header>
  );
}
