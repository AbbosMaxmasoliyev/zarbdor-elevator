import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        easing: 'ease-in-out',
        cssEase: 'ease-in-out', // chiroyli va silliq animatsiya uchun
      };

    return (
        <section className="slider">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className=" border border-blue-700 border-1 w-full">
                    <div className="slide-item align-v-h bg-overlay bg-overlay-2 w-full ">
                        <div className="bg-img  w-full block bg-overlay-2 absolute z-2" >
                            <img src="assets/images/banners/14.png" className='w-full  z-1' alt="slide img" />
                        </div>
                        <div className="absolute z-3">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                                    <div className="slide__body">
                                        <h2 className="slide__title">Shaping Future Of Solar Energy!</h2>
                                        <p className="slide__desc">As a world wide distributor of solar supplies we endeavor to provide fast and
                                            knowledgeable service, we can get you materials by sea or air.
                                        </p>
                                        <ul className="slide__icons list-unstyled mb-0 d-flex flex-wrap">
                                            <li className="slide__icon"><i className="icon-hydro-power3"></i></li>
                                            <li className="slide__icon"><i className="icon-eco-house"></i></li>
                                            <li className="slide__icon"><i className="icon-energy"></i></li>
                                            <li className="slide__icon"><i className="icon-green-energy3"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" border border-blue-700 border-1 w-full">
                    <div className="slide-item align-v-h bg-overlay bg-overlay-2 w-full">
                        <div className="bg-img absolute z-1 w-full block bg-overlay-2 ">
                            <img src="assets/images/banners/14.png" className='w-full' alt="slide img" />
                        </div>
                        <div className="absolute z-3">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                                    <div className="slide__body">
                                        <h2 className="slide__title">Shaping Future Of Solar Energy!</h2>
                                        <p className="slide__desc">As a world wide distributor of solar supplies we endeavor to provide fast and
                                            knowledgeable service, we can get you materials by sea or air.
                                        </p>
                                        <ul className="slide__icons list-unstyled mb-0 d-flex flex-wrap">
                                            <li className="slide__icon"><i className="icon-hydro-power3"></i></li>
                                            <li className="slide__icon"><i className="icon-eco-house"></i></li>
                                            <li className="slide__icon"><i className="icon-energy"></i></li>
                                            <li className="slide__icon"><i className="icon-green-energy3"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                

            </Slider>

        </section >
    );
};

export default HeroSlider;
