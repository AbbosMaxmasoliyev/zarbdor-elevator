import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeatureCarousel = () => {
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slick-carousel">
      <Slider {...settings}>
        <div className="p-3">
          <div className="feature-item p-3 min-h-[280px] grid grid-row-4" >
            <div className="feature__icon">
              <i className="icon-hydro-power3"></i>
            </div>
            <h4 className="feature__title">Ishonchli hamkorlik</h4>
            <p className="feature__desc">
              Har bir mijozimiz bilan uzoq muddatli va ishonchli hamkorlik
              qilamiz.
            </p>
            <a href="#" className="btn__link">
              <i className="icon-arrow-right icon-filled"></i>
              <span>Explore More</span>
            </a>
          </div>
        </div>

        <div className="p-3">
          <div className="feature-item p-3 min-h-[280px] grid grid-row-4" >
            <div className="feature__icon">
              <i className="icon-eco-house"></i>
            </div>
            <h4 className="feature__title">Tabiiy mahsulotlar</h4>
            <p className="feature__desc">
              Mahsulotlarimiz 100% tabiiy xomashyo asosida ishlab chiqariladi.
            </p>
            <a href="#" className="btn__link">
              <i className="icon-arrow-right icon-filled"></i>
              <span>Explore More</span>
            </a>
          </div>
        </div>
        <div className="p-3">
          <div className="feature-item p-3 min-h-[280px] grid grid-row-4" >
            <div className="feature__icon">
              <i className="icon-energy2"></i>
            </div>
            <h4 className="feature__title">Zamonaviy texnologiyalar</h4>
            <p className="feature__desc">
              Eng so‘nggi texnologiyalar bilan jihozlangan zavodimiz mahsulotlar
              sifatini kafolatlaydi.
            </p>
            <a href="#" className="btn__link">
              <i className="icon-arrow-right icon-filled"></i>
              <span>Explore More</span>
            </a>
          </div>
        </div>

        <div className="p-3">
          <div className="feature-item p-3 min-h-[280px] grid grid-row-4" >
            <div className="feature__icon">
              <i className="icon-electric-car"></i>
            </div>
            <h4 className="feature__title">Malakali mutaxassislar</h4>
            <p className="feature__desc">
              Har bir mahsulotimiz malakali mutaxassislar nazorati ostida ishlab
              chiqariladi.
            </p>
            <a href="#" className="btn__link">
              <i className="icon-arrow-right icon-filled"></i>
              <span>Explore More</span>
            </a>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default FeatureCarousel;
