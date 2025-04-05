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
        <div className="container w-full flex justify-between items-start 2xl:items-center ">
          <Link className="navbar-brand relative h-full" to="/">
            <img
              src="/assets/images/logo/logo.png"
              className="logo border-none h-full relative"
              alt="logo"
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
            <ul className="navbar-nav items-start lg:items-center">
              <li className="nav__item">
                <NavLink to="/" className="nav__item-link !text-[12px]">
                  {t("home")}
                </NavLink>
              </li>

              <li className="nav__item has-dropdown w-full lg:w-auto">
                <NavLink
                  to="/sahifa/jamiyat"
                  className="nav__item-link !text-[12px]"
                >
                  {t("society")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/jamiyat-haqida"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("about_society")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/ish-grafigi"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("work_schedule")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/guvohnoma-va-sertifikatlar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("certificates")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/bank-rekvizitlari"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("bank_details")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/zarbdor-elevatori-aj-predmeti-va-maqsadi"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("company_goal")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__item has-dropdown w-full lg:w-auto">
                <NavLink
                  to="/sahifa/tashkiliy-tuzilma"
                  className="nav__item-link !text-[12px]"
                >
                  {t("structure")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/kuzatuv-kengashi"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("supervisory_board")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/boshqaruv"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("management")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/taftish-komissiyasi"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("audit_commission")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/shoba-va-tobe-xojalik-jamiyatlari"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("subsidiary_companies")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__item has-dropdown w-full lg:w-auto">
                <NavLink
                  to="/sahifa/aksiyador-va-investorlarga"
                  className="nav__item-link !text-[12px]"
                >
                  {t("investors")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/guvohnoma"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("guvohnoma")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/korporativ-hujjatlar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("corporate_docs")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/kapital-tuzilmasi"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("capital_structure")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/affillangan-shaxslar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("affiliated_persons")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/aksiyadorlarning-umumiy-yigilish-natijalari"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("shareholders_meeting")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/rivojlanish-strategiyasi"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("strategy")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/biznes-rejalar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("business_plans")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/muhim-faktlar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("key_facts")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/hisobotlar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("reports")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/asosiy-korsatkichlar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("main_indicators")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/auditorlik-xulosalari"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("audit_conclusions")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/divedentlar"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("dividends")}
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav__item has-dropdown w-full lg:w-auto">
                <NavLink
                  to="/sahifa/matbuot-markazi"
                  className="nav__item-link !text-[12px]"
                >
                  {t("media_center")}
                </NavLink>
                <button className="dropdown-toggle" data-toggle="dropdown" />
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink to="/news" className="nav__item-link !text-[12px]">
                      {t("news.heading")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sayt-xaritasi"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("site_map")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/pochta"
                      className="nav__item-link !text-[12px]"
                    >
                      {t("mail")}
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/sahifa/bosh-ish-orinlari"
                      className="nav__item-link !text-[12px]"
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
