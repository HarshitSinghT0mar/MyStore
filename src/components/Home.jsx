import React, { useState } from "react";
import Card from "./Card";

const Home = () => {
    const[productList,setProductList]=useState([])
    
  const fakestore= fetch("https://fakestoreapi.com/products")
    .then((res) =>res.json())
    .then((res) => setProductList(res))


  return (
    <div className="d-flex  flex-wrap justify-content-center">
     {productList.map((item,index)=>{return <Card key={item.id} title={item.title} desc={item.description} price={item.price} rating={item.rating.rate} image={item.image}/>})}
    </div>
  );
};

export default Home;
