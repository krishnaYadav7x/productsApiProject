import { useEffect, useState } from "react";
import { getProducts } from "./api/products";
import "./App.css";
import Header from "./components/Header";
import ProductsControl from "./components/ProductsControl";
import ProductsContainer from "./components/ProductsContainer";

function App() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [category,setCategory] = useState('')
    
    useEffect(() => {
      async function fetchData() {
        const products = await getProducts();
        setData(products);
      }
      fetchData();
    }, []);
  return (
    <>
      <Header />
      <main>
        <ProductsControl
          data={data}
          setQuery={setQuery}
          query={query}
          setCategory={setCategory}
        />
        <ProductsContainer data={data} query={query} category={category} />
      </main>
    </>
  );
}

export default App;
