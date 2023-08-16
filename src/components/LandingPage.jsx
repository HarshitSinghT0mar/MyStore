import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel/lib/js";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BlurhashCanvas } from "react-blurhash";

const LandingPage = () => {
  const [loadImage, setLoadImage] = useState({
    
  });

 
  return (
    <div className="ecommerce-landing-page">
      <div className="mystore-header">
        <h1 style={{ fontWeight: "bold" }}>Welcome to MyStore</h1>
        <p>Discover the best deals on your favorite products.</p>
      </div>

      <section className="section-image-carousel">
        <Carousel
          interval={3000}
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={false}
          showThumbs={false}
          className="carousel-images"
        >
          <div>
            {!loadImage ? (
              <BlurhashCanvas
                hash="LMRwXz9oDG-d-6w^sUS1a8oOkVWT"
                className="blurhash-canvas"
              />
            ) : (
              <img loading="lazy" src="./images/sale.jpg" alt="Product 1" />
            )}
          </div>
          <div>
            {!loadImage ? (
              <BlurhashCanvas
                hash="LMRwXz9oDG-d-6w^sUS1a8oOkVWT"
                className="blurhash-canvas"
              />
            ) : (
              <img
                loading="lazy"
                src="./images/weekendOnly.jpg"
                alt="Product 2"

              />
            )}
          </div>
          <div>
            {!loadImage ? (
              <BlurhashCanvas
                hash="LMRwXz9oDG-d-6w^sUS1a8oOkVWT"
                className="blurhash-canvas"
              />
            ) : (
              <img
                loading="lazy"
                src="./images/holidayShopping.jpg"
                alt="Product 3"
              />
            )}
          </div>
        </Carousel>
      </section>
      <div className="main-banner">
        <h1>Shop Now</h1>
        <p>Explore a wide range of products and find what you need.</p>
        <div className="image-section">
          <div className="product-image">
            <img
              loading="lazy"
              src="./images/clothing.jpg"
              alt="Product Image 2"
            />
          </div>
          <div className="product-image">
            <img
              loading="lazy"
              src="./images/jewellery.jpg"
              alt="Product Image 1"
            />
          </div>
          <div className="product-image">
            <img
              loading="lazy"
              src="./images/Headphone.jpg"
              alt="Product Image 3"
            />
          </div>
        </div>
        <Link to="/Home" className="cta-button">
          Browse All Products
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
