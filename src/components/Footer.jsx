import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-primary">
        <div className="container">
          <div className="row">
            {/* Quick Contact */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-contact">
              <h6 className="footer-widget-title">
                {t("footer.quick_contact")}
              </h6>
              <div className="footer-widget-content">
                <p className="mb-20">{t("footer.contact_text")}</p>
                <div className="contact__number d-flex align-items-center mb-30">
                  <i className="icon-phone"></i>
                  <a href="tel:5565454117" className="color-primary">
                    55 654 541 17
                  </a>
                </div>
                <p className="mb-20">{t("footer.address")}</p>
                <a href="#" className="btn__location">
                  <i className="icon-location"></i>
                  <span>{t("footer.get_directions")}</span>
                </a>
              </div>
            </div>

            {/* Society Links */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">{t("footer.society")}</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="/sahifa/jamiyat-haqida">
                        {t("footer.about")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/ish-grafigi">
                        {t("footer.work_schedule")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/guvohnoma-va-sertifikatlar">
                        {t("footer.certificates")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/bank-rekvizitlari">
                        {t("footer.bank_details")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/zarbdor-elevatori-aj-predmeti-va-maqsadi">
                        {t("footer.company_goal")}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Structure Links */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">{t("footer.structure")}</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="/sahifa/kuzatuv-kengashi">
                        {t("footer.supervisory_board")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/boshqaruv">
                        {t("footer.management")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/taftish-komissiyasi">
                        {t("footer.audit_commission")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/shoba-va-tobe-xojalik-jamiyatlari">
                        {t("footer.subsidiaries")}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Investors Links */}
            <div className="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
              <h6 className="footer-widget-title">{t("footer.investors")}</h6>
              <div className="footer-widget-content">
                <nav>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="/sahifa/guvohnoma">
                        {t("footer.certificate")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/korporativ-hujjatlar">
                        {t("footer.corporate_docs")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/kapital-tuzilmasi">
                        {t("footer.capital_structure")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/affillangan-shaxslar">
                        {t("footer.affiliated_persons")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sahifa/hisobotlar">
                        {t("footer.reports")}
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Follow Us */}
            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
              <h6 className="footer-widget-title">{t("footer.follow_us")}</h6>
              <div className="footer-widget-content">
                <ul className="social-icons list-unstyled">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyrights">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
              <nav>
                <ul className="copyright__nav d-flex flex-wrap list-unstyled mb-0">
                  <li>
                    <a href="#">{t("footer.terms")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.privacy")}</a>
                  </li>
                  <li>
                    <a href="#">{t("footer.sitemap")}</a>
                  </li>
                </ul>
              </nav>
              <p className="mb-0">
                <span className="color-gray">{t("footer.copyright")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
