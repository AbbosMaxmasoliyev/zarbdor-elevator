import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    easing: "ease-in-out",
    cssEase: "ease-in-out", // chiroyli va silliq animatsiya uchun
  };

  return (
    <section className="slider w-full">
      <Slider {...settings}>
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="w-full  relative">
            <div className="absolute inset-0 z-0">
              <img
                src="/assets/images/banners/14.png"
                alt="Slide background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center min-h-[90vh]  px-4 py-12">
              <div className="max-w-4xl text-left text-white space-y-6 ">
                <h2 className="!text-3xl md:text-5xl text-white font-bold leading-tight">
                  Kelajakni Birga Quramiz: Don Mahsulotlari Qayta Ishlashda
                  Innovatsiya!
                </h2>
                <p className="text-base md:text-lg">
                  Biz don mahsulotlari ishlab chiqarish va tarqatish bo‘yicha
                  global yetkazib beruvchimiz. Sifatli xomashyo, tezkor
                  logistika va tajribali jamoamiz bilan har doim sizning
                  biznesingizga xizmat qilishga tayyormiz.
                </p>
                <ul className="flex justify-start gap-6 text-3xl  slide__icons list-unstyled mb-0 d-flex flex-wrap">
                  <li className="slide__icon !w-[50px] !h-[50px] md:h-auto md:!w-16 md:!h-16 md:text-xl">
                    <i className="icon-hydro-power3 text-xl md:text-5xl"></i>
                  </li>
                  <li className="slide__icon !w-[50px] !h-[50px] md:h-auto md:!w-16 md:!h-16 md:text-xl">
                    <i className="icon-eco-house text-xl md:text-5xl"></i>
                  </li>
                  <li className="slide__icon !w-[50px] !h-[50px] md:h-auto md:!w-16 md:!h-16 md:text-xl">
                    <i className="icon-energy text-xl md:text-5xl"></i>
                  </li>
                  <li className="slide__icon !w-[50px] !h-[50px] md:h-auto md:!w-16 md:!h-16 md:text-xl">
                    <i className="icon-green-energy3 text-xl md:text-5xl"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
