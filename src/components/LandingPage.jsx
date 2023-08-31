import CircularProgress from "@mui/material/CircularProgress";
import React, { Suspense, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

const BannerComponent = React.lazy(() => import("./BannerCarousel"));

const LandingPage = () => {
  // const [imgLoaded, setImgLoaded] = useState({
  //   shirt: false,
  //   jewellery: false,
  //   headphone: false,
  // });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
            {/* {!imgLoaded.shirt && (
              <BlurhashCanvas
                hash="LDKwqX00BV0K~q9aD*?H9aNG%1%2"
                className="hash-image"
              />
            )} */}
            <img
              loading="lazy"
              src="https://ecommercephotographyindia.com/info/wp-content/uploads/2021/09/apparel-photoshoot.jpg"
              alt="Product Image 2"
              name="shirt"
            />
          </div>
          <div className="product-image">
            {/* {!imgLoaded.jewellery && (
              <BlurhashCanvas
                hash="L9L4y*00~qt84n%2ITof00?bD%Rj"
                className="hash-image"
              />
            )} */}
            <img
              loading="lazy"
              src="https://www.jiomart.com/images/product/original/rves6kmivy/fashion-frill-stunning-leaf-design-american-diamond-silver-plated-adjuable-ring-for-women-ring-fashionable-ring-jewellery-product-images-rves6kmivy-1-202206031452.jpg?im=Resize=(500,630)"
              alt="Product Image 1"
              name="jewellery"
            />
          </div>
          <div className="product-image">
            {/* {!imgLoaded.headphone && (
              <BlurhashCanvas
                hash="LlH^oT9Y~E%4;3S#r?wdxwX8WBt8"
                className="hash-image"
              />
            )} */}
            <img
              loading="lazy"
              src="https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg"
              alt="Product Image 3"
              name="headphone"
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
