import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientComponent = () => {
  const settings = {
    slidesToShow: 3,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="slick-carousel">
      <Slider {...settings}>
        <div className="client">
          <a href="#"><img src="assets/images/clients/1.png" alt="client" /></a>
        </div>
        <div className="client">
          <a href="#"><img src="assets/images/clients/2.png" alt="client" /></a>
        </div>
        <div className="client">
          <a href="#"><img src="assets/images/clients/3.png" alt="client" /></a>
        </div>
        <div className="client">
          <a href="#"><img src="assets/images/clients/4.png" alt="client" /></a>
        </div>
        <div className="client">
          <a href="#"><img src="assets/images/clients/5.png" alt="client" /></a>
        </div>
        <div className="client">
          <a href="#"><img src="assets/images/clients/6.png" alt="client" /></a>
        </div>
        <div className="client">
          <a href="#"><img src="assets/images/clients/3.png" alt="client" /></a>
        </div>
        <div className="client">
          <a href="#"><img src="assets/images/clients/4.png" alt="client" /></a>
        </div>
      </Slider>
    </div>
  );
};

export default ClientComponent;
