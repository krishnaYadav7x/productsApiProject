import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductsControl from "./ProductsControl";
import ProductsContainer from "./ProductsContainer";

export default function ProductsPage() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All category");



  useEffect(() => {
    async function fetchData() {
      const products = await getProducts();
      setData(products);
    }

    fetchData();
  }, []);

  return (
    <main>
      <ProductsControl
        data={data}
        setQuery={setQuery}
        query={query}
        setCategory={setCategory}
      />

      <ProductsContainer data={data} query={query} category={category} />
    </main>
  );
}
