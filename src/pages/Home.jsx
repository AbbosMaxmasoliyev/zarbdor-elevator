import React from "react";
import { RecentArticles } from "../components/Articles";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import ClientComponent from "../components/ClientComponent";
import Testimonials from "../components/TestimonialsSlider";
import Contact from "../components/Contact";
import HowItWorksCarousel from "../components/HowItWorksCarousel";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <HeroSlider />

      <section className="fancybox-layout1 py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="cta__banner h-100">
                <h3 className="cta__title color-white">
                  {t("fancyboxLayout1.ctaBanner.title")}
                </h3>
                <p className="cta__desc font-weight-bold color-white mb-0">
                  {t("fancyboxLayout1.ctaBanner.desc")}
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row row-no-gutter fancybox-wrapper">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="col-md-4">
                    <div className="fancybox-item h-100">
                      <div className="fancybox__panel">
                        <div className="fancybox__body">
                          <h4 className="fancybox__title">
                            {t(`fancyboxLayout1.fancyBoxItems.${index}.title`)}
                          </h4>
                          <p className="fancybox__desc">
                            {t(`fancyboxLayout1.fancyBoxItems.${index}.desc`)}
                          </p>
                          <a href="#" className="btn__link">
                            <i className="icon-arrow-right icon-filled"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Layout 5 */}
      <section className="banner-layout5">
        <div className="bg-img">
          <img src="/assets/images/backgrounds/map4.png" alt="bg" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <div className="heading-layout2">
                <h2 className="heading__title">{t("bannerLayout5.heading")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="text-block">
                <div className="banner__text">
                  <p>{t("bannerLayout5.contentText")}</p>
                </div>
                <p>{t("bannerLayout5.note")}</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-block">
                <div className="video__wrapper d-flex align-items-center">
                  <span className="video__btn-title p-0 mr-20">
                    {t("bannerLayout5.videoBlock.videoTitle")}
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
                <img
                  src={t("bannerLayout5.videoBlock.bannerImage")}
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Layout 5 */}
      <section className="features-layout5 pb-0">
        <div className="container">
          <div className="row heading-layout2 align-items-end mb-50">
            <div className="col-lg-8">
              <h2 className="heading__subtitle">
                {t("featuresLayout5.headingSubtitle")}
              </h2>
              <h3 className="heading__title">
                {t("featuresLayout5.headingTitle")}
              </h3>
              <p className="heading__desc font-weight-bold mb-20">
                {t("featuresLayout5.headingDesc")}
              </p>
            </div>
            <div className="col-lg-4">
              <div className="d-flex flex-wrap justify-content-between">
                <a href="#" className="btn btn__secondary btn__outlined mr-10">
                  <i className="icon-arrow-right"></i>
                  <span>{t("featuresLayout5.buttonMore")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="row row-no-gutter features-wrapper mt-6">
            {[
              { icon: "icon-solar-panel" },
              { icon: "icon-wind-turbine" },
              { icon: "icon-hydro-power" },
              { icon: "icon-eco-factory" },
            ].map((i,index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="feature-item">
                  <div className="feature__icon custom-icon">
                    <i class={i.icon}></i>
                  </div>
                  <h4 className="feature__title">
                    {t(`featuresLayout5.featureItems.${index}.title`)}
                  </h4>
                  <p className="feature__desc">
                    {t(`featuresLayout5.featureItems.${index}.desc`)}
                  </p>
                  <a href="#" className="btn__link">
                    <i className="icon-arrow-right icon-filled"></i>
                    <span>{t(`featuresLayout5.featureItems.${index}.more`)}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Layout 4 */}
      <section className="banner-layout4 py-0 ">
        <div className="container-fluid px-0">
          <div className="row row-no-gutter">
            <div className="col-lg-6 background-banner">
              <div className="bg-img">
                <img src="/assets/images/banners/15.png" alt="banner" />
              </div>
            </div>
            <div className="col-lg-6 mt-16">
              <div className="inner-padding bg-primary">
                <div className="heading-layout2 heading-light mb-50">
                  <h3 className="heading__title">
                    {t("bannerLayout4.headingTitle")}
                  </h3>
                  <p className="heading__desc">
                    {t("bannerLayout4.headingDesc")}
                  </p>
                </div>
                <div className="row fancybox-light">
                  {[0, 1].map((i) => (
                    <div key={i} className="col-sm-6">
                      <div className="fancybox-item">
                        <div class="fancybox__icon">
                          <i class="icon-hydro-power3"></i>
                        </div>
                        <div className="fancybox__content">
                          <h4 className="fancybox__title">
                            {t(`bannerLayout4.infoBoxes.${i}.title`)}
                          </h4>
                          <p className="fancybox__desc">
                            {t(`bannerLayout4.infoBoxes.${i}.desc`)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="request-quote.html"
                  className="btn btn__white btn__white-style2 mt-20"
                >
                  <i className="icon-arrow-right"></i>
                  <span>{t("bannerLayout4.buttonRequest")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecentArticles />

      <section
        className="banner-layout2 pt-130 pb-130"
        style={{
          backgroundImage: "url(/assets/images/banners/16.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
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
