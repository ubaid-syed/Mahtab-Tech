import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../App.css";

const Carsel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000, // Duration of the slide transition
    autoplaySpeed: 100, // Duration between each auto scroll
    cssEase: "linear",
    arrows: false,
    draggable: false,
  };

  return (
    <div className="mainContainer mt-9">
      <Slider {...settings}>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/elementor.png"
            alt="BRS Ventures"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/smtp.png"
            alt="Ibex Global"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/bit-bucket.png"
            alt="Ibex Global"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/avada.png"
            alt="Ibex Global"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/analytics.png"
            alt="Ibex Global"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/rev-slider.png"
            alt="Ibex Global"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/wordfence.png"
            alt="Ibex Global"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/form7.png"
            alt="Ibex Global"
          />
        </div>
        <div className="container">
          <img
            src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/logos/woo.png"
            alt="Ibex Global"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carsel;
