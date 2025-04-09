import useNews from "../services/news";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const RecentsPosts = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { news, loading } = useNews("news");
  useEffect(() => {
    console.log("ishalayapti");
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <aside className="sidebar has-marign-right mb-30">
      <div className="widget widget-categories">
        <h5 className="widget__title">{t("recents-post")}</h5>
        <div className="widget-content">
          <ul className="list-unstyled">
            {news?.data?.length &&
              news?.data?.map((newsItem) =>
                newsItem?.contents[language] ? (
                  <li>
                    <Link
                      to={`/news-detail/${newsItem?.slug}`}
                      className="active grid grid-cols-[30px_90%] items-start"
                    >
                      <i className="icon-arrow-right "></i>
                      <span className="line-clamp-1 w-[90%]">
                        {newsItem?.contents[language]?.title}
                      </span>
                    </Link>
                  </li>
                ) : null
              )}
          </ul>
        </div>
      </div>
      <div
        className="widget widget-help bg-overlay bg-overlay-primary bg-img"
        style={{
          backgroundImage: "url(assets/images/banners/7.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="widget__content">
          <h5 className="widget__title">
            Dedicated Customer Teams &amp; Agile Services
          </h5>
          <p className="widget__desc mb-30">
            Our worldwide presence ensures the timeliness, cost efficiency
            compliance adherence required to ensure your production timelines
            are met.
          </p>
          <a
            href="request-quote.html"
            className="btn btn__white btn__outlined btn__block mb-30"
          >
            Schedule An Appointment
          </a>
          <div className="contact__number d-none d-xl-flex align-items-center">
            <i className="icon-phone"></i>
            <a href="tel:5565454117">55 654 541 17</a>
          </div>
        </div>
      </div>
      <div className="widget widget-download">
        <h5 className="widget__title">Download</h5>
        <div className="widget__content">
          <a href="#" className="btn btn__primary btn__block mb-20">
            <span>Company Report 2020</span>
            <img src="/assets/images/icons/pdf.png" alt="pdf" />
          </a>
          <a href="#" className="btn btn__secondary btn__block btn__hover3">
            <span>Company Brochure</span>
            <img src="/assets/images/icons/pdf.png" alt="pdf" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default RecentsPosts;
