import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useContext } from "react";
import Cart from "./components/Cart";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";
import RegisterForm from "./components/RegisterForm";
import LandingPage from "./components/LandingPage";

import Login from "./components/Login";
import { auth } from "./utils/firebase";

function App() {
  const { setCart, fetchData } = useContext(CartContext);

  const navigate=useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  window.onload = () => {
    const storedItems = JSON.parse(localStorage.getItem("CartStorage"));
    storedItems && setCart(storedItems);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
     navigate("/Home")
      } else {
       navigate("/Login")
      }
    });
  
    return () => {
      unsubscribe(); 
    };
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route index element={<RegisterForm isNotRegistered={true} />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/RegisterForm"
          element={<RegisterForm isNotRegistered={true} />}
        />
        <Route path="Cart" element={<Cart />} />
        <Route path="Home" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
