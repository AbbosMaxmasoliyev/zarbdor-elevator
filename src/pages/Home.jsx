import React from "react";
import { RecentArticles } from "../components/Articles";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import ClientComponent from "../components/ClientComponent";
import Testimonials from "../components/TestimonialsSlider";
import Contact from "../components/Contact";
import HowItWorksCarousel from "../components/HowItWorksCarousel";

const Home = () => {
  return (
    <div className="wrapper">
      <HeroSlider />
      {/* <section className="slider">
        <div className="slick-carousel carousel-arrows-light carousel-dots-light m-slides-0"
          data-slick='{"slidesToShow": 1, "arrows": true, "dots": true, "speed": 700,"fade": true,"cssEase": "linear"}'>
          <div className="slide-item align-v-h bg-overlay bg-overlay-2">
            <div className="bg-img"><img src="assets/images/banners/13.png" alt="slide img" /></div>
            <div className="container">
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
          <div className="slide-item align-v-h bg-overlay">
            <div className="bg-img"><img src="assets/images/banners/14.png" alt="slide img" /></div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
                  <div className="slide__body">
                    <h2 className="slide__title">Improving Solar Energy Products</h2>
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
      </section> */}
      <section className="fancybox-layout1 py-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="cta__banner h-100">
                <h3 className="cta__title color-white">
                  Fostering Growth of Solar Energy!{" "}
                </h3>
                <p className="cta__desc font-weight-bold color-white mb-0">
                  Benefiting from 20 years experience in the solar material
                  procurement sector and PV manufacturing.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8">
              <div className="row row-no-gutter fancybox-wrapper">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="fancybox-item h-100">
                    <div className="fancybox__panel">
                      <div className="fancybox__body">
                        <h4 className="fancybox__title">Powerfull Strategy</h4>
                        <p className="fancybox__desc">
                          Facilities meet high security requirements and are
                          certified{" "}
                        </p>
                        <a href="#" className="btn__link">
                          <i className="icon-arrow-right icon-filled"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="fancybox-item h-100">
                    <div className="fancybox__panel">
                      <div className="fancybox__body">
                        <h4 className="fancybox__title">Award Winning</h4>
                        <p className="fancybox__desc">
                          International supply chains involves of unknown risks
                          and Challenges.
                        </p>
                        <a href="#" className="btn__link">
                          <i className="icon-arrow-right icon-filled"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <div className="fancybox-item h-100">
                    <div className="fancybox__panel">
                      <div className="fancybox__body">
                        <h4 className="fancybox__title">Accurate Testing</h4>
                        <p className="fancybox__desc">
                          Utilising latest processing solutions, and decades of
                          work experience.
                        </p>
                        <a href="#" className="btn__link">
                          <i className="icon-arrow-right icon-filled"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-layout5">
        <div className="bg-img">
          <img src="assets/images/backgrounds/map4.png" alt="bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-10 col-xl-7">
              <div className="heading-layout2">
                <h2 className="heading__title">
                  We Are Ready For Solar Energy, All We Need Is To Use It Well!
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="text-block">
                <div className="banner__text">
                  <p>
                    The increase in extreme weather events and rising sea levels
                    are unmistakable signs of climate change. Roughly 850
                    million people still live without access to electricity,
                    which is the foundation of sustainable development.
                  </p>
                </div>
                <p>
                  How can we meet the growing demand for electricity while
                  protecting our climate and make planet a better place?
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="img-block">
                <div className="video__wrapper d-flex align-items-center">
                  <span className="video__btn-title p-0 mr-20">
                    Watch Our Intro!
                  </span>
                  <span className="video__btn-divider"></span>
                  <a
                    className="video__btn popup-video"
                    href="https://www.youtube.com/watch?v=R9pxFgJwxFE"
                  >
                    <div className="video__player">
                      <i className="fa fa-play"></i>
                    </div>
                  </a>
                </div>
                <img src="assets/images/banners/13.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-layout5 pb-0">
        <div className="container">
          <div className="row heading-layout2 align-items-end mb-50">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <h2 className="heading__subtitle">
                Fostering the Growth of Solar Energy Market
              </h2>
              <h3 className="heading__title">
                A Leading Supplier Of Solar Materials For Manufacturers, And
                Contractors.
              </h3>
              <p className="heading__desc font-weight-bold mb-20">
                Our Solar business is focused on creating PV material solutions
                that reduce manufacturing costs, while improving the yield and
                performance of solar energy products. Our PV industry experience
                enables us to provide in-depth material sourcing, financing and
                supply chain .
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div className="d-flex flex-wrap justify-content-between">
                <a href="#" className="btn btn__secondary btn__outlined mr-10">
                  <i className="icon-arrow-right"></i>
                  <span>Get Started</span>
                </a>
                <a href="#" className="btn btn__secondary">
                  <span>Get Started</span>
                  <i className="icon-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row row-no-gutter features-wrapper">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__icon custom-icon">
                  <i className="icon-solar-panel"></i>
                </div>
                <h4 className="feature__title">Solar Panels Services</h4>
                <p className="feature__desc">
                  Save money on utilities or increase the value of your home by
                  installing solar
                </p>
                <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>Explore More</span>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__icon custom-icon">
                  <i className="icon-wind-turbine"></i>
                </div>
                <h4 className="feature__title">Wind Turbines Services</h4>
                <p className="feature__desc">
                  The smallest turbines are used for applications such as the
                  battery charging for auxiliary power.
                </p>
                <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>Explore More</span>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__icon custom-icon">
                  <i className="icon-hydro-power"></i>
                </div>
                <h4 className="feature__title">Hydropower Plants Services</h4>
                <p className="feature__desc">
                  Our remote industrial solar systems are designed to reliably
                  power our clients
                </p>
                <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>Explore More</span>
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="feature-item">
                <div className="feature__icon custom-icon">
                  <i className="icon-eco-factory"></i>
                </div>
                <h4 className="feature__title">Fossil Resources Services</h4>
                <p className="feature__desc">
                  Our sales engineers on our staff have experience and can
                  design any complete
                </p>
                <a href="#" className="btn__link">
                  <i className="icon-arrow-right icon-filled"></i>
                  <span>Explore More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner-layout4 py-0">
        <div className="container-fluid px-0">
          <div className="row row-no-gutter">
            <div className="col-sm-12 col-md-12 col-lg-6 background-banner">
              <div className="bg-img">
                <img src="assets/images/banners/15.png" alt="banner" />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="soultions-carousel inner-padding d-none d-xl-block">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-8">
                    <div
                      className="slick-carousel"
                      data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "arrows": true, "dots": true}'
                    >
                      <p className="text__link mb-0">
                        We drive the transition to more sustainable, reliable &
                        affordable energy systems,
                        <a
                          href="#"
                          className="color-primary text-underlined-primary"
                        >
                          <span> Find Your Solution</span>{" "}
                          <i className="icon-arrow-right"></i>
                        </a>
                      </p>
                      <p className="text__link mb-0">
                        We drive the transition to more sustainable, reliable &
                        affordable energy systems,
                        <a
                          href="#"
                          className="color-primary text-underlined-primary"
                        >
                          <span> Find Your Solution</span>{" "}
                          <i className="icon-arrow-right"></i>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-padding bg-primary">
                <div className="heading-layout2 heading-light mb-50">
                  <h3 className="heading__title">
                    Energize Society With Sustainable And Reliable Energy
                    Systems!
                  </h3>
                  <p className="heading__desc">
                    In recent years, new capacity across the solar value chain
                    become necessary to support the PV market’s growth. However,
                    the capital required to establish and scale-up wafer, solar
                    cell and solar module manufacturing facilities.
                  </p>
                </div>
                <div className="row fancybox-light">
                  <div className="col-sm-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-hydro-power3"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">Save Your Money</h4>
                        <p className="fancybox__desc">
                          Save money on utilities or increase the value of your
                          home by installing solar panels as a great option.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="fancybox-item">
                      <div className="fancybox__icon">
                        <i className="icon-biosphere"></i>
                      </div>
                      <div className="fancybox__content">
                        <h4 className="fancybox__title">
                          5Stars Customer Service
                        </h4>
                        <p className="fancybox__desc">
                          Understand that we must go above our customer
                          expectations during each interaction always.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="request-quote.html"
                  className="btn btn__white btn__white-style2 mt-20"
                >
                  <i className="icon-arrow-right"></i>
                  <span>Request A Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecentArticles />

      <section className="banner-layout2 pt-130 pb-130" style={{
            backgroundImage: "url(assets/images/banners/16.png)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}>
       
          <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-7">
              <div className="text-block">
                <HowItWorksCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
