import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../contexts/cartContext";

const Filters = () => {
  const { setProductList, allProducts, productList } = useContext(CartContext);

  const [sortOrder, setSortOrder] = useState("none");

  const [priceRange, setPriceRange] = useState(["all"]);
  const [category, setCategory] = useState("all");

  const applyFilters = () => {
    const isInCategory = allProducts.filter((item) => {
      return item.category === category;
    });
    const isInPriceRange = allProducts.filter((item) => {
      return item.price >= priceRange[0] && item.price <= priceRange[1];
    });
    const commonProducts = isInCategory.filter((item) => {
      return isInPriceRange.includes(item);
    });
    const filteredProducts =
      isInCategory.length && isInPriceRange.length
        ? commonProducts
        : isInCategory.length
        ? isInCategory
        : isInPriceRange.length
        ? isInPriceRange
        : allProducts;

    filteredProducts.sort(comparator);
    return setProductList([...filteredProducts]); //using spread operator to create new reference to be able to update it
  };
  const comparator = (a, b) => {
    if (sortOrder === "none") {
      // Return 0 to maintain the original order
      return 0;
    }
    const valueA = a.price;
    const valueB = b.price;
    if (sortOrder === "lowToHigh") {
      return valueA - valueB;
    } else if (sortOrder === "highToLow") {
      return valueB - valueA;
    }
  };

  const selectCategory = (e) => {
    const selectedOption = e.target.value;

    return setCategory(selectedOption);
  };

  const priceFilter = (event) => {
    const rangeStr = event.target.value;

    const numberArray = rangeStr.split(",");
    const priceArray = numberArray.map(Number); //converts each element of numberArray from string to number
    rangeStr === "all" ? setPriceRange([rangeStr]) : setPriceRange(priceArray); //for "all" pricearray would have been [NaN]
  };

  const sortProducts = (event) => {
    return setSortOrder(event.target.value);
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div className="filter-options">
        <div className="filter-category">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            onChange={selectCategory}
            value={category}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
            <option value="jewelery">Jewelery</option>
          </select>
        </div>
        <div className="filter-price">
          <label htmlFor="price">Price:</label>
          <select id="price" name="price" onChange={priceFilter}>
            <option value="all">All</option>
            <option value={[0, 10]}>Under $10</option>
            <option value={[10, 50]}>$10 - $50</option>
            <option value={[50, 100]}>$50 - $100</option>
            <option value={[100, 500]}>$100-$500</option>
            <option value={[500, 1500]}>Over $500</option>
          </select>
        </div>
        <div className="sort-products">
          <label htmlFor="price">Sort by:</label>
          <select
            id="sort"
            name="sort"
            onChange={sortProducts}
            value={sortOrder}
          >
            <option value="none">None</option>
            <option value="lowToHigh">price: low to high</option>
            <option value="highToLow">price: high to low</option>
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
