import React, { useState } from "react";
import Card from "./Card";

const Home = () => {
    const[productList,setProductList]=useState([])
    const [cart,setCart]=useState([])
  const fakestore= fetch("https://fakestoreapi.com/products")
    .then((res) =>res.json())
    .then((res) => setProductList(res))
    .catch((err)=>console.log(err))
    
    const addCart=(id)=>{
    setCart((prevItem)=>{return [...prevItem,productList.filter((item,index)=>{return item.id===id})]})
    }
    
  return (
    <div className="d-flex  flex-wrap justify-content-center h-50">
     {productList.map((item,index)=>{return <Card onAdd={()=>{addCart(item.id)}}key={item.id} id={item.id} title={item.title} desc={item.description} price={item.price} rating={item.rating.rate} image={item.image}/>})}
    </div>
  );
};

export default Home;
