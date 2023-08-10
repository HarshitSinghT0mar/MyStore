import React, { useContext, useEffect} from "react";
import Card from "./Card";
import { CartContext } from "../contexts/cartContext";
import Filters from "./Filters";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const { productList, loading ,cart,setCart} =
    useContext(CartContext);

    useEffect(() => {
      cart.length && localStorage.setItem("CartStorage", JSON.stringify(cart));
    }, [cart]);
    const addCart = (id) => {
      const itemExists = cart.some((item) => item.id === id);
      if (itemExists) {
        return;
      }
  
      setCart((prevItems) => {
        const newItem = productList.find((item) => item.id === id);
          return [...prevItems, newItem];
        
      });
    };

  return (
    <div className="home-container">
      <div className="filters-container">
        <Filters />
      </div>
      <div className="product-list">
        {!loading ? (
          productList.length > 0 ? (
            productList.map((item, index) => {
              const { id, title, description, rating, price, category, image } =
                item;
              return (
                <Card
                  onclick={() => {
                    addCart(item.id);
                  }}
                  key={id}
                  id={id}
                  title={title}
                  desc={description}
                  price={price}
                  rating={rating.rate}
                  image={image}
                  text="add to cart"
                  btnText="go to cart"
                  bool={false}
                  category={category}
                />
              );
            })
          ) : (
            <p
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: "larger",
              }}
            >
              No Products Available
            </p>
          )
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Home;
