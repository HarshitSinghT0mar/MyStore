import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useContext, useMemo, useEffect } from "react";
import Cart from "./components/Cart";
import { Route, Routes} from "react-router-dom";
import { CartContext } from "./contexts/cartContext";
import LandingPage from "./components/LandingPage";
import RegisterForm from "./components/RegisterForm";
// import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { auth } from "./utils/firebase";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { setCart} = useContext(CartContext);

  


  window.onload = () => {
    const storedItems = JSON.parse(localStorage.getItem("CartStorage"));
    storedItems && setCart(storedItems);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        
        setCart(() => []);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // return (
  //   <>
      
  //   </>
  // );
}

export default App;
