import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="container mb-5 text-center">
      <h1>404</h1>
      <p>{t("not_found.message")}</p>
      <Link to="/" className="btn btn-primary !bg-amber-500 mt-3">
        {t("not_found.back_home")}
      </Link>
    </div>
  );
};

export default NotFound;
