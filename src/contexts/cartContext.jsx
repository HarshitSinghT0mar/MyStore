import { createContext, useState } from "react";


export const CartContext = createContext();

export function CartProvider({ children }) {
  const [productList, setProductList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);


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

  return (
    <CartContext.Provider
      value={{
        productList,
        setProductList,
        allProducts,
        setAllProducts,
        cart,
        setCart,
        loading,
        setLoading,
        fetchData
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
