import { React, useContext, useEffect } from "react";
import Card from "./Card";
import { CartContext } from "../contexts/cartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  

  const newCart = cart.map((item) => {
    return item[0];
  });
  const onRemove = (id) => {
    setCart((prevItem) => {
      return [
        newCart.filter((item) => {
          return item.id !== id;
        }),
      ];
    });
    return;
  };

  return (
   <>
      {newCart.map((item) => {
        return (
          <div className="cart">
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.description}
              price={item.price}
              rating={item.rating.rate}
              image={item.image}
              onclick={() => {
                onRemove(item.id);
              }}
              text="remove from cart"
              btnText="go to home"
              bool={true}
            />
          </div>
        );
      })}
      </>
  );
};

export default Cart;
