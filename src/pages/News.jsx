import React, { useEffect, useState } from "react";
import useNews from "../services/news";
import Loading from "../components/Loading";
import config from "../config/constanta";
import moment from "moment/moment";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import NotFound from "../components/NotFound";

const News = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { loading, error, news } = useNews("/news");
  const [newsContents, setNewsContents] = useState();

  useEffect(() => {
    // console.log(newsContents?.length ? newsContents : "yo'q");
    if (news?.data?.length) {
      setNewsContents(
        news?.data?.map((newsItem) => {
          if (newsItem.contents[language]) {
            return (
              <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="post-item border border-gray-300">
                  <div class="post__img">
                    <a href="blog-single-post.html">
                      <img
                        src={`${config.baseURL}/${newsItem.image}`}
                        alt="post image"
                        className="w-full h-54 object-cover"
                        loading="lazy"
                      />
                    </a>
                    <span class="post__date">
                      {moment(newsItem.createdAt).format("MMM, DD YYYY")}
                    </span>
                  </div>
                  <div class="post__body grid grid-cols-1 grid-rows-[30px_50px_70px_60px] items-start justify-start">
                    <div class="post__meta d-flex align-items-center">
                      <div class="post__cat">
                        <a>{t(`category.${newsItem.category}`)}</a>
                      </div>
                      {/* <a class="post__author">Mike Dooley</a> */}
                    </div>
                    <h4 class="post__title  line-clamp-1 text-ellipsis">
                      <a>{newsItem?.contents[language]?.title}</a>
                    </h4>
                    <p class="post__desc line-clamp-3 text-ellipsis">
                      {newsItem?.contents[language]?.description}
                    </p>
                    <Link
                      to={`/news-detail/${newsItem?.slug}`}
                      class="btn  btn__outlined btn__custom self-start border border-red-700 w-auto"
                    >
                      <i class="icon-arrow-right"></i>
                      <span>{t("more")}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })
      );
    }
  }, [news, language]);

  return (
    <>
      <section
        className="page-title page-title-layout1 bg-overlay bg-overlay-3 text-center"
        style={{
          backgroundImage: "url(assets/images/banners/19.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 z-3 relative">
              <h1 className="pagetitle__heading mb-0">{t("news.heading")}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#">{t("news.breadcrumbs.home")}</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">{t("news.breadcrumbs.press")}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {t("news.breadcrumbs.current")}
                  </li>
                </ol>
              </nav>
              <a href="#about" className="scroll-down">
                <i className="icon-arrow-down"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {!loading ? (
        <section class="post-grid">
          <div class="container">
            <div class="row">
              {newsContents?.some((item) => item) ? newsContents : <NotFound />}
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                <nav class="pagination-area">
                  <ul class="pagination justify-content-center">
                    <li>
                      <a class="current">1</a>
                    </li>
                    <li>
                      <a>2</a>
                    </li>
                    <li>
                      <a>
                        <i class="icon-arrow-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="h-32">
          <Loading />
        </div>
      )}
    </>
  );
};

export default News;
