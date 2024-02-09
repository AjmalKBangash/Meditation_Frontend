// CustomCarousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CustomCarousel.css"; // Add your custom styles here

const CustomCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      stopOnHover={true}
      infiniteLoop={true}
      showArrows={true} // Hide default arrows
      showStatus={false}
      showThumbs={false}
    >
      <div className="carousel-item">
        <div className="text">
          <p>Salam, this is zikr halka </p>
          <p>and everyone can customize it</p>
          <p>according to his/her wish</p>
        </div>
        {/* <img src="https://placekitten.com/800/400" alt="Kitten 1" /> */}
        <img src="Media/m011.jpg" alt="Zikr" />
      </div>
      <div className="carousel-item">
        <div className="text">Text 2</div>
        {/* <img src="https://placekitten.com/800/401" alt="Kitten 2" /> */}
        <img src="Media/m022.jpg" alt="Zikr" />
      </div>
      <div className="carousel-item">
        <div className="text">Text 3</div>
        {/* <img src="https://placekitten.com/800/402" alt="Kitten 3" /> */}
        <img src="Media/m0333.jpg" alt="Zikr" />
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
