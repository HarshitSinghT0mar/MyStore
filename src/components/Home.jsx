import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import {CartContext} from "../contexts/cartContext";


const Home = () => {
 
  const {cart,setCart,productList,fakestore } = useContext(CartContext);

  useEffect(() => {
    fakestore();
  }, []);


  const addCart = (id) => {
   setCart((prevItem) => {
      return [
        ...prevItem,
        productList.find((item) => {
          return item.id === id;
        }),
      ];
    });
  };

  return (
    <div className="d-flex  flex-wrap justify-content-center h-50">
      {productList.map((item, index) => {
        return (
          <Card
            onclick={()=>{addCart(item.id)}}
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.description}
            price={item.price}
            rating={item.rating.rate}
            image={item.image}
            text="add to cart"
        btnText="go to cart"
        bool={false}
          />
        );
      })}
    </div>
  );
};

export default Home;
