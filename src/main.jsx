import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter } from "react-router-dom";

import { CartProvider } from "./contexts/cartContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
