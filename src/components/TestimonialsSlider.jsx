import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    slidesToShow: 1,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div className="slick-carousel">
      <Slider {...settings}>
        <div className="testimonial-item">
          <p className="testimonial__desc">
            “They provide exceptional quality wheat products, timely deliveries, and outstanding customer service. Highly recommended!”
          </p>
          <div className="testimonial__meta d-flex flex-wrap align-items-center">
            <div className="testimonial__thumb">
              <img src="assets/images/testimonials/thumbs/1.png" alt="thumb" />
            </div>
            <div>
              <h4 className="testimonial__author">Ahmad Karimov</h4>
              <p className="testimonial__position">Agro Business Manager</p>
            </div>
          </div>
        </div>

        <div className="testimonial-item">
          <div className="testimonial__content">
            <h4 className="testimonial__desc">
              "They guided us through the entire process, from selecting the right wheat processing equipment to layout design. Very knowledgeable and supportive!"
            </h4>
            <div className="testimonial__meta d-flex flex-wrap align-items-center">
              <div className="testimonial__thumb">
                <img src="assets/images/testimonials/thumbs/2.png" alt="thumb" />
              </div>
              <div>
                <h4 className="testimonial__author">Emily Johnson</h4>
                <p className="testimonial__position">Procurement Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
