import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProductDetailsPage from "./components/ProductDetailsPage";
import ProductsPage from './components/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: ProductsPage },
      { path: "productDetails/:title", Component: ProductDetailsPage },
    ],
  },
]);


import App from './App.jsx'

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
