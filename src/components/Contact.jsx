import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-layout1 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-panel p-0 box-shadow-none">
              <div className="contact__panel-info mb-30">
                <div className="contact-info-box">
                  <h4 className="contact__info-box-title">
                    {t("contact.location")}
                  </h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>
                      2307 Beverley Rd Brooklyn, New York 11226 United States.
                    </li>
                  </ul>
                </div>
                <div className="contact-info-box">
                  <h4 className="contact__info-box-title">
                    {t("contact.quick_contact")}
                  </h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>
                      {t("contact.email")}:{" "}
                      <a href="mailto:Solatec@7oroof.com">Solatec@7oroof.com</a>
                    </li>
                    <li>
                      {t("contact.support")}:{" "}
                      <a href="mailto:Solatec@7oroof.com">Solatec@7oroof.com</a>
                    </li>
                  </ul>
                </div>
                <div className="contact-info-box">
                  <h4 className="contact__info-box-title">
                    {t("contact.hours")}
                  </h4>
                  <ul className="contact__info-list list-unstyled">
                    <li>{t("contact.days")}</li>
                    <li>{t("contact.time")}</li>
                  </ul>
                </div>
                <a href="#" className="btn btn__primary">
                  <i className="icon-arrow-right"></i>
                  <span>{t("contact.request_quote")}</span>
                </a>
              </div>

              <form
                method="post"
                action="assets/php/contact.php"
                id="contactForm"
                className="contact__panel-form mb-30"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <h4 className="contact__panel-title">
                      {t("contact.get_in_touch")}
                    </h4>
                    <p className="contact__panel-desc mb-40">
                      {t("contact.description")}
                    </p>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t("contact.name")}
                        id="contact-name"
                        name="contact-name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={t("contact.email")}
                        id="contact-email"
                        name="contact-email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={t("contact.phone")}
                        id="contact-phone"
                        name="contact-phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="form-group">
                      <select className="form-control">
                        <option value="0">{t("contact.select_service")}</option>
                        <option value="1">{t("contact.service1")}</option>
                        <option value="2">{t("contact.service2")}</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder={t("contact.details")}
                        id="contact-message"
                        name="contact-message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                    <button type="submit" className="btn btn__secondary">
                      <i className="icon-arrow-right"></i>
                      <span>{t("contact.submit")}</span>
                    </button>
                    <div className="contact-result"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
