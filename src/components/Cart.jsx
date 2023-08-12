import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { CartContext } from "../contexts/cartContext";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const onRemove = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      localStorage.setItem("CartStorage", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart(() => []);
    localStorage.clear();
  };

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-item" key={uuidv4()}>
            <Card
              title={item.title}
              id={item.id}
              desc={item.description}
              price={item.price}
              rating={item.rating.rate}
              image={item.image}
              onclick={() => {
                onRemove(item.id);
              }}
              text="Remove from Cart"
              btnText="Go to Home"
              bool={true}
            />
          </div>
        ))
      ) : (
        <div className="empty-cart-img">
          <img src="images/emptyCart.png" alt="empty cart" />
          <h5 style={{ fontFamily: "cursive", marginLeft: "1rem" }}>
            cart empty
          </h5>
        </div>
      )}
      {cart.length > 0 && (
        <button className="clear-cart-btn" onClick={clearCart}>
          clear cart
        </button>
      )}
    </div>
  );
};

export default Cart;
