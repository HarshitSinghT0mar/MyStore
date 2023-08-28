import React from "react";
import { Carousel } from "react-responsive-carousel/lib/js";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const BannerCarousel = () => {
  return (
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
          <img loading="lazy" src="./images/sale.jpg" alt="Product 1" />
        </div>
        <div>
          <img loading="lazy" src="./images/weekendOnly.jpg" alt="Product 2" />
        </div>
        <div>
          <img
            loading="lazy"
            src="./images/holidayShopping.jpg"
            alt="Product 3"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
