import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HowItWorksCarousel() {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  return (
        <div className="row  ">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10">
            <Slider {...settings}>
              {/* Slide 1 */}
              <div className="heading heading-layout2">
                <h2 className="heading__subtitle">How It Works, Step One:</h2>
                <h3 className="heading__title">We Design & Ship.</h3>
                <p className="heading__desc">
                  We collaborate with you to design and deliver a system that
                  meets your requirements, ensuring efficient shipping and
                  quality selection.
                </p>
              </div>

              {/* Slide 2 */}
              <div className="heading heading-layout2">
                <h2 className="heading__subtitle">How It Works, Step Two:</h2>
                <h3 className="heading__title">Contract Or Install.</h3>
                <p className="heading__desc">
                  We ensure seamless delivery and professional installation,
                  guaranteeing your wheat processing system perfectly matches
                  your utility and productivity needs.
                </p>
              </div>
            </Slider>
          </div>
        </div>
  );
}

export default HowItWorksCarousel;
