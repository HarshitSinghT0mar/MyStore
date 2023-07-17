import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
import { CartContext } from "./contexts/cartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState([]);
  const [category, setCategory] = useState("all");
  const [allProducts, setAllProducts] = useState([]);
  const [priceRange, setPriceRange] = useState(["all"]);
  const [counter, setCounter] = useState();
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("none");

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductList(data);
      setAllProducts(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addCart = (id) => {
    const itemExists = cart.some((item) => item.id === id);
    if (itemExists) {
      return;
    }

    setCart((prevItems) => {
      const newItem = productList.find((item) => item.id === id);

      if (newItem) {
        return [...prevItems, newItem];
      }
      return prevItems;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    cart.length && localStorage.setItem("CartStorage", JSON.stringify(cart));
  }, [cart]);

  window.onload = () => {
    const storedItems = JSON.parse(localStorage.getItem("CartStorage"));
    setCart((prevCart) => (storedItems ? storedItems : prevCart));
  };

  const applyFilters = async () => {
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
          setAllProducts,
          priceRange,
          setPriceRange,

          counter,
          setCounter,
          loading,
          sortOrder,
          setSortOrder,
          applyFilters,
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
