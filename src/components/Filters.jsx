import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartContext";

const Filters = () => {
  const {
    productList,

    setProductList,
    fetchData,
    category,
    setCategory,
    allProducts
  } = useContext(CartContext);

  

  useEffect(() => {
   fetchData();
  }, []);

  const selectCategory = (e) => {
    const selectedOption = e.target.value;
    console.log(selectedOption);
    return setCategory(selectedOption);
  };

  const applyFilters = () => {
    return setProductList((prevItem) => {
      const singleProducts = allProducts.filter((item) => {
        return item.category === category;
      });
      // console.log(singleProducts,category)
      return singleProducts;
    });
  };
  // console.log(productList)

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div className="filter-options">
        <div className="filter-category">
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" onChange={selectCategory}>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
        <div className="filter-price">
          <label htmlFor="price">Price:</label>
          <select id="price" name="price">
            <option value="">All</option>
            <option value="under10">Under $10</option>
            <option value="10to50">$10 - $50</option>
            <option value="50to100">$50 - $100</option>
            <option value="over100">Over $100</option>
          </select>
        </div>
      </div>
      <button onClick={applyFilters} className="filter-button">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
