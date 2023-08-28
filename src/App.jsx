import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useContext, useMemo } from "react";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";
import LandingPage from "./components/LandingPage";

function App() {
  const { setCart, fetchData } = useContext(CartContext);

  useMemo(() => fetchData(), []);
  
    window.onload = () => {
      console.log("onload");
      const storedItems = JSON.parse(localStorage.getItem("CartStorage"));
      storedItems && setCart(storedItems);
    };


  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Home" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
