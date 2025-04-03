import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

function HowItWorksCarousel() {
  const { t } = useTranslation();

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
  const steps = [0, 1, 2];

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xl-10">
        <Slider {...settings}>
          {steps.map((i) => (
            <div key={i} className="heading heading-layout2">
              <h2 className="heading__subtitle">
                {t(`workingSteps.${i}.subtitle`)}
              </h2>
              <h3 className="heading__title">{t(`workingSteps.${i}.title`)}</h3>
              <p className="heading__desc">{t(`workingSteps.${i}.desc`)}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HowItWorksCarousel;
