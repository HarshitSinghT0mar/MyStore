import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  
} from "react-router-dom";

import { CartContext, CartProvider } from "./contexts/cartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import Cart from "./components/Cart.jsx";
import Login from "./components/Login.jsx";
import RegisterForm from "./components/RegisterForm.jsx";
import Layout from "./components/Layout.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingPage />} />
      <Route path="Home" element={<Home />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Login" element={<Login isNotRegistered={false}/>} />
      <Route path="RegisterForm" element={<RegisterForm isNotRegistered={true}/>} />
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <ToastContainer theme="colored" />
    <AuthProvider>
      <CartProvider>
        {/* <HashRouter>
          <App />
        </HashRouter> */}
        <RouterProvider router={router} >
          <App />
        </RouterProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
