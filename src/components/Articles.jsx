import React from "react";
import { useTranslation } from "react-i18next";

const Articles = () => {
  return <div>Articles</div>;
};

const RecentArticles = () => {
  const { t } = useTranslation();
  const posts = t("recentArticles.posts", { returnObjects: true });

  return (
    <section className="post-grid pb-60">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
            <div className="heading text-center mb-50">
              <h2 className="heading__subtitle">
                {t("recentArticles.subtitle")}
              </h2>
              <h3 className="heading__title">{t("recentArticles.title")}</h3>
            </div>
          </div>
        </div>

        <div className="row">
          {/* {posts.map((post) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={post.id}>
              <div className="post-item">
                <div className="post__img">
                  <a href={post.link}>
                    <img src={post.img} alt="post image" loading="lazy" />
                  </a>
                  <span className="post__date">{post.date}</span>
                </div>
                <div className="post__body">
                  <div className="post__meta d-flex align-items-center">
                    <div className="post__cat">
                      {post.categories.map((cat, idx) => (
                        <a href="#" key={idx}>
                          {cat}
                        </a>
                      ))}
                    </div>
                    <a className="post__author" href="#">
                      {post.author}
                    </a>
                  </div>
                  <h4 className="post__title">
                    <a href={post.link}>{post.title}</a>
                  </h4>
                  <p className="post__desc">{post.desc}</p>
                  <a
                    href={post.link}
                    className="btn btn__secondary btn__outlined btn__custom"
                  >
                    <i className="icon-arrow-right"></i>
                    <span>{t("readMore", "Read More")}</span>
                  </a>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export { Articles, RecentArticles };
