import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useContext, useMemo } from "react";
import Cart from "./components/Cart";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";
import LandingPage from "./components/LandingPage";import RegisterForm from "./components/RegisterForm";
// import LandingPage from "./components/LandingPage";

import Login from "./components/Login";
import { auth } from "./utils/firebase";

function App() {

  const{setCart,fetchData}=useContext(CartContext)
  
  useEffect(() => {
    fetchData();
  }, []);
  const navigate=useNavigate()

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
    <>
      <Navbar />
      <Routes>
      <Route index element={<RegisterForm isNotRegistered={true} />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/RegisterForm"
          element={<RegisterForm isNotRegistered={true} />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
