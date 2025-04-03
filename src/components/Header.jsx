import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";

function Header() {
  const [collapse, setCollapse] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="header header-layout1">
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid w-full flex justify-between items-center ">
          <Link className="navbar-brand" to="/">
            <img
              src="/assets/images/logo/logo.png"
              className="logo border-none"
              alt="logo"
              width={80}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setCollapse(true)}
          >
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          {/* menu-opened */}
          <div
            className={`${
              collapse ? "menu-opened" : ""
            } navbar-collapse   flex-grow-0  "
            id="mainNavigation`}
          >
            <ul className="navbar-nav items-center">
              <li className="nav__item">
                <NavLink to="/" className="nav__item-link">
                  {t("home")}
                </NavLink>
              </li>

              <li className="nav__item has-dropdown">
                <NavLink to="/sahifa/jamiyat" className="nav__item-link">
                  {t("society")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/jamiyat-haqida"
                      className="nav__item-link"
                    >
                      {t("about_society")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/ish-grafigi"
                      className="nav__item-link"
                    >
                      {t("work_schedule")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/guvohnoma-va-sertifikatlar"
                      className="nav__item-link"
                    >
                      {t("certificates")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/bank-rekvizitlari"
                      className="nav__item-link"
                    >
                      {t("bank_details")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/zarbdor-elevatori-aj-predmeti-va-maqsadi"
                      className="nav__item-link"
                    >
                      {t("company_goal")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__item has-dropdown">
                <NavLink
                  to="/sahifa/tashkiliy-tuzilma"
                  className="nav__item-link"
                >
                  {t("structure")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/kuzatuv-kengashi"
                      className="nav__item-link"
                    >
                      {t("supervisory_board")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to="/sahifa/boshqaruv" className="nav__item-link">
                      {t("management")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/taftish-komissiyasi"
                      className="nav__item-link"
                    >
                      {t("audit_commission")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/shoba-va-tobe-xojalik-jamiyatlari"
                      className="nav__item-link"
                    >
                      {t("subsidiary_companies")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__item has-dropdown">
                <NavLink
                  to="/sahifa/aksiyador-va-investorlarga"
                  className="nav__item-link"
                >
                  {t("investors")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink to="/sahifa/guvohnoma" className="nav__item-link">
                      {t("guvohnoma")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/korporativ-hujjatlar"
                      className="nav__item-link"
                    >
                      {t("corporate_docs")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/kapital-tuzilmasi"
                      className="nav__item-link"
                    >
                      {t("capital_structure")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/affillangan-shaxslar"
                      className="nav__item-link"
                    >
                      {t("affiliated_persons")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/aksiyadorlarning-umumiy-yigilish-natijalari"
                      className="nav__item-link"
                    >
                      {t("shareholders_meeting")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/rivojlanish-strategiyasi"
                      className="nav__item-link"
                    >
                      {t("strategy")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/biznes-rejalar"
                      className="nav__item-link"
                    >
                      {t("business_plans")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/muhim-faktlar"
                      className="nav__item-link"
                    >
                      {t("key_facts")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to="/sahifa/hisobotlar" className="nav__item-link">
                      {t("reports")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/asosiy-korsatkichlar"
                      className="nav__item-link"
                    >
                      {t("main_indicators")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/auditorlik-xulosalari"
                      className="nav__item-link"
                    >
                      {t("audit_conclusions")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/divedentlar"
                      className="nav__item-link"
                    >
                      {t("dividends")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__item has-dropdown">
                <NavLink
                  to="/sahifa/matbuot-markazi"
                  className="nav__item-link"
                >
                  {t("media_center")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink to="/news" className="nav__item-link">
                      {t("news.heading")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sayt-xaritasi"
                      className="nav__item-link"
                    >
                      {t("site_map")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink to="/sahifa/pochta" className="nav__item-link">
                      {t("mail")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/bosh-ish-orinlari"
                      className="nav__item-link"
                    >
                      {t("vacancies")}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <LanguageChanger />
            </ul>

            {/* navbar- */}
            <button
              className="close-mobile-menu d-block d-lg-none"
              onClick={() => setCollapse(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
