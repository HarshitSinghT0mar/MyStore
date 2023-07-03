import { React, useContext, useEffect } from "react";
import Card from "./Card";
import { CartContext } from "../contexts/cartContext";
import { v4 as uuidv4 } from "uuid";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const onRemove = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      return updatedCart;
    });
  };
   

  return (
    <>
    {cart.length > 0 ? (
      cart.map((item) => {
        return (
          <div className="cart d-flex justify-content-center" key={uuidv4()}>
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
              text="remove from cart"
              btnText="go to home"
              bool={true}
            />
          </div>
        );
      })
    ) : (
      <p className="text-center">Your cart is empty.</p>
    )}
  </>
  

  );
};

export default Cart;
