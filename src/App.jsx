import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useContext } from "react";
import Cart from "./components/Cart";
import { Route, Routes ,redirect} from "react-router-dom";
import { CartContext } from "./contexts/cartContext";
import RegisterForm from "./components/RegisterForm";
import LandingPage from "./components/LandingPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";

import Login from "./components/Login";



function App() {
  const { setCart, fetchData } = useContext(CartContext);

  onAuthStateChanged(auth,userExist=>{
    if(userExist){
      return redirect("/Home")
    }else{
console.log("user does not exist")
    }
  })

  useEffect(() => {
    fetchData();
  }, []);

  window.onload = () => {
    const storedItems = JSON.parse(localStorage.getItem("CartStorage"));
    storedItems && setCart(storedItems);
  };

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route index element={<RegisterForm isNotRegistered={true}/>} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegisterForm" element={<RegisterForm isNotRegistered={true}/>} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Home" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
