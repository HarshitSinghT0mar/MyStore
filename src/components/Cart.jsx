import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { CartContext } from "../contexts/cartContext";
import { v4 as uuidv4 } from "uuid";


const Cart = () => {
  const { cart, setCart,location } = useContext(CartContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const onRemove = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      return updatedCart;
    });
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
        <div
    
          style={{ justifySelf: "flex-start", margin: "0 0 5vh 0" }}
        >
          <img src="/emptyCart.png" alt="empty cart" />
        </div>
      )}
    </div>
  );
};

export default Cart;
