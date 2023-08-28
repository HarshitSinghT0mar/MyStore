import CircularProgress from "@mui/material/CircularProgress";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";

const BannerComponent = React.lazy(() => import("./BannerCarousel"));

const LandingPage = () => {
  return (
    <div className="ecommerce-landing-page">
      <div className="mystore-header">
        <h1 style={{ fontWeight: "bold" }}>Welcome to MyStore</h1>
        <p>Discover the best deals on your favorite products.</p>
      </div>
      <Suspense
        fallback={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        }
      >
        <BannerComponent />
      </Suspense>

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
