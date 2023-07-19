import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    cart.length && localStorage.setItem("CartStorage", JSON.stringify(cart));
  }, [cart]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
      setAllProducts(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  window.onload = () => {
    const storedItems = JSON.parse(localStorage.getItem("CartStorage"));
    storedItems && setCart(storedItems);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          productList,
          setProductList,
          fetchData,
          location,
          loading,
          setAllProducts,
          allProducts,
        }}
      >
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Home" element={<Home />} />
        </Routes>

        <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
