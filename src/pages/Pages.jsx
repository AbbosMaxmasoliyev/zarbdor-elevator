import { useTranslation } from "react-i18next";
import RecentsPosts from "../components/RecentsPosts";
import usePages from "../services/pages";
import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "../components/NotFound";

const Pages = () => {
  const { page } = useParams();
  const {
    i18n: { language },
  } = useTranslation();

  const { pages, error, loading } = usePages(`/pages/page/${page}`);

  function decodeHtmlEntities(encodedStr) {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedStr;
    return textarea.value;
  }

  const pageContent = pages?.contents?.[language]?.content;
  const hasContent = !error && pageContent;

  return (
    <div>
      <section
        className="page-title page-title-layout2 bg-overlay bg-overlay-2 pb-5 z-0"
        style={{
          backgroundImage: "url(/assets/images/page-titles/16.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container z-10 relative">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 ">
              <h1 className="pagetitle__heading mb-0 !text-white">
                {hasContent ? pages?.contents?.[language]?.title : ""}
              </h1>
              <p className="pagetitle__desc !text-white">
                {pages?.contents?.uz?.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-content-section pb-90 mt-4 ">
        <div className="container">
          <div className="flex xl:flex-row flex-col-reverse gap-4">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <RecentsPosts />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-8">
              {hasContent ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: decodeHtmlEntities(pageContent),
                  }}
                />
              ) : (
                <NotFound />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pages;
