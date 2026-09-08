import "./App.css";
import Header from "./components/Header";

import { Outlet } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartItemProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartItemProvider>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </CartItemProvider>
  );
}

export default App;
