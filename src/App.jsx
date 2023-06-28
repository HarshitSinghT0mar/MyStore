import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Cart from "./components/Cart";
import { Route, createBrowserRouter, Routes,createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="Cart" element={<Cart />} />
     
    </Route>
  )
)
function App({routes}) {
  
  return (
    <>
  
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
