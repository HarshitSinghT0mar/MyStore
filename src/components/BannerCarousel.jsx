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
        className="carousel-image"
      >
        <div>
          <img loading="lazy" src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/8a89ee09acc1a9e5.jpg?q=50" alt="Product 1" />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://www.fnp.com/assets/images/custom/new-desk-home/hero-banners/Homepage_Desk_Return-Gift-Banner.jpg"
            alt="Product 2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/67c3de34d4d16fb3.png?q=50"
            alt="Product 3"
          />
        </div>
      
        <div>
          <img
            loading="lazy"
            src="https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/534fcf0a58f2958d.jpg?q=50"
            alt="Product 4"
          />
        </div>
        
        
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
