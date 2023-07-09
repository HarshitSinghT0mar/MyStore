import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import Cart from "./components/Cart";
import { Route, Routes, useLocation } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const [category, setCategory] = useState("all");
  const [allProducts, setAllProducts] = useState([]);
  const[priceRange,setPriceRange]=useState(['all'])
  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
      setAllProducts(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  
  const addCart = (id) => {
    const itemExists = cart.some((item) => item.id === id);
    if (itemExists) {
      return; // Item already exists in the cart, no need to add it again
    }

    setCart((prevItems) => {
      const newItem = productList.find((item) => item.id === id);

      if (newItem) {
        return [...prevItems, newItem];
      }
      return prevItems;
    });
  };
  const applyFilters = () => {
    const isInCategory = allProducts.filter((item) => {
      return item.category === category;
    });
    const isInPriceRange = allProducts.filter((item) => {
      return item.price >= priceRange[0] && item.price <= priceRange[1];
    });
    const commonProducts = isInCategory.filter((item) => {
      return isInPriceRange.includes(item);
    });
    const singleProducts =
      isInCategory.length && isInPriceRange.length
        ? commonProducts
        : isInCategory.length
        ? isInCategory
        : isInPriceRange;

    return setProductList(() => {
      return category === "all" && priceRange[0] === "all"
        ? allProducts
        : singleProducts;
    });
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
          addCart,
          category,
          setCategory,
          allProducts,
          setAllProducts,priceRange,setPriceRange,applyFilters
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
