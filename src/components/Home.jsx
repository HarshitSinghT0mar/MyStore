import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import {CartContext} from "../contexts/cartContext";

const Home = () => {
 
  const {setCart,productList,fakestore } = useContext(CartContext);

  useEffect(() => {
    fakestore();
  }, []);


  const addCart = (id) => {
    setCart((prevItem) => {
      return [
        ...prevItem,
        productList.filter((item) => {
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
            onAdd={()=>{addCart(item.id)}}
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.description}
            price={item.price}
            rating={item.rating.rate}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default Home;
