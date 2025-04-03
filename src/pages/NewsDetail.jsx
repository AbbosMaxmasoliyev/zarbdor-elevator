import React from "react";
import config from "../config/constanta";
import useNews from "../services/news";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import moment from "moment";
import RecentsPosts from "../components/RecentsPosts";

const NewsDetail = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const params = useParams();
  const { news, loading } = useNews(`news/slug?slug=${params.slug}`);

  if (loading) {
    return (
      <div className="h-5">
        <Loading />
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>{news?.contents[language]?.title}</title>
        <meta name="description" content="Sahifa tavsifi bu yerda bo'ladi." />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Sahifa sarlavhasi - Open Graph" />
        <meta
          property="og:description"
          content="Bu sahifa haqida qisqacha ma’lumot (FB uchun)."
        />
        <meta property="og:image" content={`${config.baseURL}/${news.image}`} />
        <meta property="og:url" content={location.toString()} />
        <meta property="og:type" content="website" />

        {/* Telegram / Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sahifa nomi Twitter uchun" />
        <meta name="twitter:description" content="Tavsif Twitter uchun" />
        <meta
          name="twitter:image"
          content={`${config.baseURL}/${news.image}`}
        />
      </Helmet>
      <section class="blog blog-single pt-0 pb-40 mt-[60px]">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8">
              <div class="post-item mb-0">
                <div class="post__img">
                  <a href="#">
                    <img
                      src={`${config.baseURL}/${news.image}`}
                      alt="post image"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div class="post__body">
                  <div class="post__meta d-flex align-items-center">
                    <div class="post__cat">
                      {t(`category.${news.category}`)}
                    </div>
                    <span class="post__date">
                      {moment(news.createdAt).format("MMM, DD.YYYY")}
                    </span>
                    {/* <span class="post__author">
                      By: <a href="#">Ahmed</a>
                    </span>
                    <span class="post__comments">
                      Comments:<a href="#"> 2</a>
                    </span> */}
                  </div>
                  <h1 class="post__title">
                    {news?.contents[language]?.title}{" "}
                  </h1>
                  <div
                    class="post__desc"
                    dangerouslySetInnerHTML={{
                      __html: news?.contents[language]?.content,
                    }}
                  ></div>
                </div>
              </div>
              <div class="blog-share d-flex flex-wrap align-items-center justify-content-between mb-30">
                <strong class="mr-20 color-heading">{t("share-others")}</strong>
                <ul class="list-unstyled social-icons d-flex mb-0">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-google"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="blog-tags d-flex flex-wrap mb-30">
                <strong class="mr-20 color-heading">Tags</strong>
                <ul class="list-unstyled d-flex flex-wrap mb-0">
                  <li>
                    <a href="#">Solar</a>
                  </li>
                  <li>
                    <a href="#">Insights</a>
                  </li>
                  <li>
                    <a href="#">Systems</a>
                  </li>
                  <li>
                    <a href="#">Battery</a>
                  </li>
                  <li>
                    <a href="#">Research</a>
                  </li>
                  <li>
                    <a href="#">Enenrgy</a>
                  </li>
                </ul>
              </div>
              <div class="widget-nav d-flex justify-content-between mb-40 pt-30 pb-30 border-top border-bottom">
                <a href="#" class="widget-nav__prev d-flex flex-wrap">
                  <div class="widget-nav__img">
                    <img
                      src="/assets/images/blog/grid/2.jpg"
                      alt="blog thumb"
                    />
                  </div>
                  <div class="widget-nav__content">
                    <span>Previous Post</span>
                    <h5 class="widget-nav__ttile mb-0">
                      Energy Research Will Help Eagles Coexist Wind
                    </h5>
                  </div>
                </a>
                <a href="#" class="widget-nav__next d-flex flex-wrap">
                  <div class="widget-nav__img">
                    <img
                      src="/assets/images/blog/grid/3.jpg"
                      alt="blog thumb"
                    />
                  </div>
                  <div class="widget-nav__content">
                    <span>Next Post</span>
                    <h5 class="widget-nav__ttile mb-0">
                      The Middle East’s Top New Alternative Energy Source
                    </h5>
                  </div>
                </a>
              </div>
              {/* <div class="widget blog-author d-flex flex-wrap mb-70">
              <div class="blog-author__avatar">
                <img src="/assets/images/blog/author/1.jpg" alt="avatar" />
              </div>
              <div class="blog-author__content">
                <h6 class="blog-author__name">Mahmoud Baghagho</h6>
                <p class="blog-author__bio">
                  Founded by Begha over many cups of tea at her kitchen table in
                  2009, our brand promise is simple: to provide powerful digital
                  marketing solutions to small and medium businesses.
                </p>
                <ul class="social-icons list-unstyled mb-0">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-vimeo-v"></i>
                    </a>{" "}
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin"></i>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div> */}
              {/* <div class="blog-comments">
              <h5 class="blog-widget__title">2 comments</h5>
              <ul class="comments-list list-unstyled">
                <li class="comment__item">
                  <div class="comment__avatar">
                    <img src="/assets/images/blog/author/2.png" alt="avatar" />
                  </div>
                  <div class="comment__content">
                    <h6 class="comment__author">Richard Muldoone</h6>
                    <span class="comment__date">Feb 28, 2017 - 08:07 pm</span>
                    <p class="comment__desc">
                      The example about the mattress sizing page you mentioned
                      in the last WBF can be a perfect example of new keywords
                      and content, and broadening the funnel as well. I can only
                      imagine the sale numbers if that was the site of a
                      mattress selling company.
                    </p>
                    <a class="comment__reply" href="#">
                      reply
                    </a>
                  </div>
                  <ul class="nested__comment list-unstyled">
                    <li class="comment__item">
                      <div class="comment__avatar">
                        <img
                          src="/assets/images/blog/author/3.png"
                          alt="avatar"
                        />
                      </div>
                      <div class="comment__content">
                        <h6 class="comment__author">Mike Dooley</h6>
                        <span class="comment__date">
                          Feb 28, 2017 - 08:22 pm
                        </span>
                        <p class="comment__desc">
                          The example about the mattress sizing page you
                          mentioned in the last WBF can be a perfect example of
                          new keywords and content, and broadening the funnel as
                          well. I can only imagine the sale numbers if that was
                          the site of a mattress selling company.
                        </p>
                        <a class="comment__reply" href="#">
                          reply
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="post-widget blog-comments-form">
              <h5 class="post__widget-title">Leave A Reply</h5>
              <form>
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name:"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email:"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-4 col-lg-4">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Website:"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        placeholder="Comment"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn__primary btn__xl">
                      <i class="icon-arrow-right"></i>{" "}
                      <span>Submit Comment</span>
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4">
              <aside class="sidebar">
                <div class="widget widget-search">
                  <h5 class="widget__title">Search</h5>
                  <div class="widget__content">
                    <form class="widget__form-search">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                      />
                      <button class="btn" type="submit">
                        <i class="icon-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                {/* <div class="widget widget-posts">
                  <h5 class="widget__title">Recent Posts</h5>
                  <div class="widget__content">
                    <div class="widget-post-item d-flex align-items-center">
                      <div class="widget-post__img">
                        <a href="#">
                          <img
                            src="/assets/images/blog/grid/2.jpg"
                            alt="thumb"
                          />
                        </a>
                      </div>
                      <div class="widget-post__content">
                        <span class="widget-post__date">Sep 19, 2022</span>
                        <h4 class="widget-post__title">
                          <a href="#">
                            Succession Risks That Threaten Your Leadership
                          </a>
                        </h4>
                      </div>
                    </div>

                    <div class="widget-post-item d-flex align-items-center">
                      <div class="widget-post__img">
                        <a href="#">
                          <img
                            src="/assets/images/blog/grid/3.jpg"
                            alt="thumb"
                          />
                        </a>
                      </div>
                      <div class="widget-post__content">
                        <span class="widget-post__date">July 7, 2022</span>
                        <h4 class="widget-post__title">
                          <a href="#">
                            Do Employee Surveys Tell About Employee?
                          </a>
                        </h4>
                      </div>
                    </div>

                    <div class="widget-post-item d-flex align-items-center">
                      <div class="widget-post__img">
                        <a href="#">
                          <img
                            src="/assets/images/blog/grid/6.jpg"
                            alt="thumb"
                          />
                        </a>
                      </div>
                      <div class="widget-post__content">
                        <span class="widget-post__date">March 13, 2022</span>
                        <h4 class="widget-post__title">
                          <a href="#">
                            Succession Risks That Threaten Your Leadership
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div> */}
                <RecentsPosts />
                <div class="widget widget-tags">
                  <h5 class="widget__title">Tags</h5>
                  <div class="widget-content">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#">Insights</a>
                      </li>
                      <li>
                        <a href="#">Industry</a>
                      </li>
                      <li>
                        <a href="#">Modern</a>
                      </li>
                      <li>
                        <a href="#">Corporate</a>
                      </li>
                      <li>
                        <a href="#">Business</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
