export async function getProducts() {
  const req = await fetch("https://dummyjson.com/products?limit=500");
  const res = await req.json();
  return res.products;
}
export async function searchProducts(value) {
  const req = await fetch(
    `https://dummyjson.com/products/search?q=${value}&limit=500`,
  );
  const res = await req.json();
  return res.products;
}

