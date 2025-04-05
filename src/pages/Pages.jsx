import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import RecentsPosts from "../components/RecentsPosts";
import NotFound from "../components/NotFound";
import usePages from "../services/pages";

const Pages = () => {
  const { page } = useParams();
  const {
    i18n: { language },
  } = useTranslation();

  const {
    pages: { data },
    error,
    loading,
  } = usePages(`/pages/page/${page}`);
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const content = data?.contents?.[language]?.content || "";
    console.log(content);
    setHasContent(content ? true : false);
    setPageContent(content);
  }, [data, language]);

  const [hasContent, setHasContent] = useState(true);

  const decodeHtmlEntities = (encodedStr) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedStr;
    return textarea.value;
  };

  return (
    <div>
      {/* Header Section */}
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
            <div className="col-sm-12 col-md-12 col-lg-6">
              <h1 className="pagetitle__heading mb-0 !text-white">
                {hasContent ? data?.contents?.[language]?.title : ""}
              </h1>
              <p className="pagetitle__desc !text-white">
                {data?.contents?.uz?.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="text-content-section pb-90 mt-4">
        <div className="container">
          <div className="flex xl:flex-row flex-col-reverse gap-4">
            {/* Recent Posts Sidebar */}
            <div className="col-sm-12 col-md-12 col-lg-4">
              <RecentsPosts />
            </div>

            {/* Page Content */}
            <div className="col-sm-12 col-md-12 col-lg-8">
              {hasContent ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: decodeHtmlEntities(pageContent || ""),
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
