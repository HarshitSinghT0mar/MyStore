import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Cart from "./components/Cart";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const fakestore = () => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setProductList(res));
    } catch (error) {
      console.log(err);
    }
  };
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          productList,
          setProductList,
          fakestore,
          location,
        }}
      >
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="Home" element={<Home />} />
          </Route>
        </Routes>

        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
