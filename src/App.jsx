import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useContext } from "react";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";


function App() {

  const{setCart,fetchData}=useContext(CartContext)
  

  useEffect(() => {
    fetchData();
  }, []);



  window.onload = () => {
    const storedItems = JSON.parse(localStorage.getItem("CartStorage"));
    storedItems && setCart(storedItems);
  };

  return (
    <>
     
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Home" element={<Home />} />
        </Routes>

        <Footer />
     
    </>
  );
}

export default App;
