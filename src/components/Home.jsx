import { useContext, useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductsControl from "./ProductsControl";
import ProductsContainer from "./ProductsContainer";
import { ThemeContext } from "../contexts/ThemeContext";
import { useLocalStorage } from "../hooks/useLocalStorage";


export default function ProductsPage() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useLocalStorage('query',"");
  const [category, setCategory] = useState("All category");

 const[isDark] = useContext(ThemeContext)
 

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setData(products);
    }

    fetchData();
  }, []);

  return (
    <main
      className={`pb-4 ${isDark ? "bg-slate-950 text-white" : "bg-white"} min-h-[calc(100vh-68px)]`}
    >
      <ProductsControl
        data={data}
        setData={setData}
        setQuery={setQuery}
        query={query}
        setCategory={setCategory}
      />

      <ProductsContainer data={data} query={query} category={category} />
    </main>
  );
}
