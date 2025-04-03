import React from "react";
import Loading from "../components/Loading";
import { RecentArticles } from "../components/Articles";
import ClientComponent from "../components/ClientComponent";
import FeatureCarousel from "../components/FeatureCarousel";
import Contact from "../components/Contact";

const AboutUs = () => {
  return (
    <div class="wrapper">
      <Loading />

      <section
        class="page-title page-title-layout1 bg-overlay bg-overlay-3 text-center"
        style={{
          backgroundImage: "url(assets/images/about/bugdoy.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div class="container ">
          <div class="row ">
            <div class="col-12 z-3 relative">
              <h1 class="pagetitle__heading mb-0">About Us</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="#">Company</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>
              <a href="#about" class="scroll-down">
                <i class="icon-arrow-down"></i>
              </a>
            </div>
            {/* col-xl- */}
          </div>
        </div>
      </section>

      <section id="about" class="about-layout1">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7 offset-lg-1">
              <div class="heading__layout2 mb-60">
                <h2 class="heading__subtitle">
                  Biz sifatli va tabiiy bug'doy mahsulotlarini ishlab
                  chiqaramiz!{" "}
                </h2>
                <h3 class="heading__title">
                  Kelajakka toza va sifatli oziq-ovqat yetkazish yo‘lida
                  yetakchimiz!{" "}
                </h3>
              </div>
            </div>
            {/* col-lg- */}
          </div>

          <div class="row flex items-stretch  h-full">
            <div class="col-sm-12 col-md-12 col-lg-2">
              {/* <!-- counter item # */}
              <div class="counter-item">
                <h4 class="counter">1000</h4>
                <p class="counter__desc pr-0">
                  Yiliga ishlab chiqariladigan yuqori sifatli bug'doy
                  mahsulotlari{" "}
                </p>
                <div class="divider__line"></div>
              </div>
              {/* <!-- counter item # */}
              <div class="counter-item">
                <h4 class="counter">1,200 </h4>
                <p class="counter__desc pr-0">
                  Professional va malakali zavod xodimlari
                </p>
                <div class="divider__line"></div>
              </div>
              {/* <!-- counter item # */}
              <div class="counter-item">
                <h4 class="counter">50</h4>
                <p class="counter__desc pr-0">
                  Mahalliy va xalqaro sifat sertifikatlari va mukofotlar
                </p>
                <div class="divider__line"></div>
              </div>
            </div>
            {/* col-lg- */}
            <div class="col-sm-12 col-md-12 col-lg-5  ">
              <div class="video-banner-layout2  h-full">
                <img
                  src="assets/images/about/bugdoyzor.png"
                  alt="about"
                  class="w-100 h-100 object-cover"
                />
                <div class="video-has-img  top-[unset] bottom-4 left-4 absolute">
                  <img src="assets/images/video/1.jpg" alt="video" />
                  <a
                    class="video__btn video__btn-white popup-video"
                    href="https://www.youtube.com/watch?v=nrJtHemSPW4"
                  >
                    <div class="video__player">
                      <i class="fa fa-play"></i>
                    </div>
                  </a>
                  <span class="video__btn-title">Watch Our Intro!</span>
                </div>
              </div>
              {/* video- */}
            </div>
            {/* col-lg- */}
            <div class="col-sm-12 col-md-12 col-lg-5 pt-5">
              <div class="about__text">
                <div class="text__icon">
                  <i class="icon-green-energy3"></i>
                </div>
                <p class="heading__desc font-weight-medium color-secondary mb-30">
                  Bizning zavod zamonaviy texnologiyalar orqali sifatli bug‘doy
                  mahsulotlarini ishlab chiqaradi. Maqsadimiz – insonlar hayot
                  sifatini yaxshilash va har bir xonadonga sog‘lom va to‘yimli
                  mahsulot yetkazib berishdir.
                </p>
                <p class="heading__desc mb-20">
                  Bugungi kunda oziq-ovqat xavfsizligi dunyo aholisining eng
                  asosiy ehtiyojlaridan biridir. Biz o'zimizning eng ilg'or
                  texnologiyalarimiz va yuqori malakali mutaxassislarimiz bilan
                  ushbu ehtiyojni to‘liq ta'minlash yo‘lida tinimsiz ishlaymiz.
                </p>

                <div class="d-flex align-items-center mt-30">
                  <a href="services.html" class="btn btn__secondary mr-30">
                    <i class="icon-arrow-right"></i> <span>Learn More</span>
                  </a>
                  <img
                    src="assets/images/about/singnture.png"
                    alt="singnture"
                  />
                </div>
              </div>
            </div>
            {/* col-lg- */}
          </div>
        </div>
      </section>

      <section
        class="features-layout1 pt-120 pb-80"
        style={{
          backgroundImage: "url(assets/images/backgrounds/3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div class="container">
          <div class="row mb-40">
            <div class="col-12">
              <h2 class="heading__subtitle color-primary">
                Kelajak bugundan boshlanadi!
              </h2>
            </div>
            {/* <!-- /col- */}
            <div class="col-sm-12 col-md-12 col-lg-5">
              <h3 class="heading__title color-white">
                Sifatli mahsulot ishlab chiqarish orqali jamiyat salomatligiga
                hissa qo‘shamiz!
              </h3>
            </div>
            {/* <!-- /col-lg- */}
            <div class="col-sm-12 col-md-12 col-lg-6 offset-lg-1">
              <p class="heading__desc color-gray mb-20">
                Biz bug'doyni qayta ishlashning har bir bosqichida eng zamonaviy
                texnologiyalarni qo‘llaymiz. Ishlab chiqarish hajmini oshirish
                bilan birga, mahsulot sifatini doimiy ravishda yuqori darajada
                saqlash zavodimizning asosiy vazifasidir.
              </p>
              <p class="heading__desc color-gray mb-30">
                Zavodimizda ishlab chiqarilayotgan barcha mahsulotlar ekologik
                jihatdan toza, xavfsiz va tabiiydir.
              </p>
              <a href="#" class="btn btn__primary btn__outlined btn__custom">
                <i class="icon-arrow-right"></i>
                <span>Batafsil ma'lumotga ega bo'lish</span>
              </a>
            </div>
            {/* col-lg- */}
          </div>

          <FeatureCarousel />

          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <div class="read-note d-flex flex-wrap mt-60">
                <div class="rating mb-10 mr-50">
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                  <i class="fas fa-star color-primary"></i>
                </div>
                <p class="read-note__text flex gap-2">
                  <span class="font-weight-bold text-underlined-primary color-primary">
                    99,8% mijozlar ishonchi
                  </span>
                  150+ korxonalardan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="banner-layout1 py-0">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-7">
              <div class="text-block">
                <div class="banner__text">
                  <p>
                    Biz ishlab chiqarish va yetkazib berish jarayonining har bir
                    bosqichini sinchiklab nazorat qilamiz:
                  </p>
                </div>

                <ul class="list-items list-items-layout2 list-unstyled mb-0">
                  <li>Doimiy sifat nazorati va laboratoriya tekshiruvlari</li>
                  <li>Yuqori sifatli mahsulot va kafolatlangan natija</li>
                  <li>O‘z vaqtida yetkazib berish va logistika xizmatlari</li>
                </ul>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-5">
              <div class="img-block">
                <img src="assets/images/banners/13.png" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="portfolio-layout1">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="heading-layout2 mb-40">
                <h3 class="heading__title">So'nggi yangiliklar</h3>
              </div>
            </div>
            {/* col-lg- */}
          </div>

          <div class="row">
            {/* <!-- portfolio item # */}
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="portfolio-item">
                <div class="portfolio__img  ">
                  <img
                    className="min-h-[230px] block object-cover "
                    src="assets/images/portfolio/grid/13.png"
                    alt="portfolio img"
                  />
                </div>
                {/* portfolio- */}
                <div class="portfolio__body">
                  <div class="portfolio__cat">
                    <a href="#">Finance</a>
                    <a href="#">Supply Chain</a>
                  </div>
                  {/* portfolio- */}
                  <h4 class="portfolio__title">
                    <a href="#">
                      Bug'doy mahsulotlarini qayta ishlash jarayonini
                      modernizatsiya qilish loyihasi
                    </a>
                  </h4>
                </div>
              </div>
              {/* portfolio- */}
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="portfolio-item">
                <div class="portfolio__img  ">
                  <img
                    className="min-h-[230px] block object-cover "
                    src="assets/images/portfolio/grid/13.png"
                    alt="portfolio img"
                  />
                </div>
                {/* portfolio- */}
                <div class="portfolio__body">
                  <div class="portfolio__cat">
                    <a href="#">Finance</a>
                    <a href="#">Supply Chain</a>
                  </div>
                  {/* portfolio- */}
                  <h4 class="portfolio__title">
                    <a href="#">
                      Bug'doy mahsulotlarini qayta ishlash jarayonini
                      modernizatsiya qilish loyihasi
                    </a>
                  </h4>
                </div>
              </div>
              {/* portfolio- */}
            </div>
            <div class="col-sm-6 col-md-6 col-lg-4">
              <div class="portfolio-item">
                <div class="portfolio__img  ">
                  <img
                    className="min-h-[230px] block object-cover "
                    src="assets/images/portfolio/grid/13.png"
                    alt="portfolio img"
                  />
                </div>
                {/* portfolio- */}
                <div class="portfolio__body">
                  <div class="portfolio__cat">
                    <a href="#">Finance</a>
                    <a href="#">Supply Chain</a>
                  </div>
                  {/* portfolio- */}
                  <h4 class="portfolio__title">
                    <a href="#">
                      Bug'doy mahsulotlarini qayta ishlash jarayonini
                      modernizatsiya qilish loyihasi
                    </a>
                  </h4>
                </div>
              </div>
              {/* portfolio- */}
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 text-center">
              <button
                type="button"
                class="btn btn__primary btn__loadMore loadMoreportfolio"
              >
                <i class="icon-arrow-right"></i>
                <span>Explore All Projects</span>
              </button>
            </div>
            {/* col-lg- */}
          </div>
        </div>
      </section>

      <section
        class="contact-layout2 pb-0 bg-overlay bg-overlay-3 primary-gradient "
        style={{
          backgroundImage: "url(assets/images/banners/15.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div class="container relative z-3">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div class="col-inner">
                <div class="heading-layout2 heading-light mb-60">
                  <h2 class="heading__subtitle">
                    Sifat va yangilik orqali doimiy rivojlanish!
                  </h2>
                  <h3 class="heading__title">
                    Mahsulotlarimiz va innovatsion yechimlarimiz:
                  </h3>
                  <p class="heading__desc">
                    Biz mahsulotlarimiz sifatini oshirish maqsadida innovatsion
                    yechimlarni qo‘llash orqali har bir mijozimizga eng yaxshi
                    xizmatni taqdim etamiz. Oziq-ovqat sanoati yetakchilari
                    bilan hamkorlik qilib, yangi standartlarni joriy
                    qilmoqdamiz.
                  </p>
                </div>

                <div class="row fancybox-light">
                  <div class="col-sm-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-biosphere2"></i>
                      </div>
                      <div class="fancybox__content">
                        <h4 class="fancybox__title mb-0">
                          Ekologik xavfsizlik
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-tube"></i>
                      </div>

                      <div class="fancybox__content">
                        <h4 class="fancybox__title mb-0">
                          Individual yechimlar
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-sm-4">
                    <div class="fancybox-item">
                      <div class="fancybox__icon">
                        <i class="icon-electric-charge"></i>
                      </div>

                      <div class="fancybox__content">
                        <h4 class="fancybox__title mb-0">
                          Yuqori mahsuldorlik
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="clients clients-layout2 border-bottom py-0">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-md-12 col-lg-6">
              <ClientComponent />
            </div>
            {/* col-lg- */}
            <div class="col-sm-12 col-md-12 col-lg-6">
              <strong class="text-center d-block mt-30">
                Receive an accurate quote within 3-5 days when you fill out the
                form on this page. Or, give us a call:
                <a href="tel:00201061245741" class="text-underlined-primary">
                  (002) 01061245741
                </a>
              </strong>
            </div>
            {/* col-lg- */}
          </div>
        </div>
        <Contact />

        <RecentArticles />
      </section>

      <button id="scrollTopBtn">
        <i class="fas fa-long-arrow-alt-up"></i>
      </button>
    </div>
  );
};

export default AboutUs;
