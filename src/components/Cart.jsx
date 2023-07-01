import { React, useContext, useEffect } from "react";
import CartCard from "./CartCard";
import { CartContext } from "../contexts/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const newCart = cart.map((item) => {
    return item[0];
  });

  return (
    <>
      {newCart.map((item) => {
        return (
          <CartCard
            key={item.id}
            title={item.title}
            desc={item.description}
            price={item.price}
            // rating={item.rating.rate}
            image={item.image}
          />
        );
      })}
    </>
  );
};

export default Cart;
