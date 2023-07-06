import React, { useContext, useEffect} from "react";
import Card from "./Card";
import {CartContext} from "../contexts/cartContext";
import Filters from "./Filters";



const Home = () => {
 
  const {addCart,productList,fetchData } = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div style={{display:"flex",marginTop: "80px" ,height:"100%",boxSizing:"border-box"}}>
    <div className="filter" style={{flex:"0.2 0" ,border:"1px solid grey",width:"15%",boxSizing:"border-box",alignSelf:"stretch"}}>
      <Filters />
    </div>
    <div className="d-flex" style={{flex:"1 0",flexWrap:"wrap",boxSizing:"border-box"}}>
      {productList.map((item, index) => {
        const {id,title,description,rating,price,category,image}=item
        return (
          <Card
            onclick={()=>{addCart(item.id)}}
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
      })}
    </div>
    </div>
  );
};

export default Home;
