import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header header-layout1">
      {/* <div className="header-topbar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="d-flex align-items-center justify-content-between">
                                <ul
                                    className="contact__list d-flex flex-wrap align-items-center list-unstyled mb-0"
                                >
                                    <li>
                                        <i className="icon-mail"></i>
                                        <a href="mailto:Solatec@7oroof.com"
                                        >Email: Solatec@7oroof.com</a
                                        >
                                    </li>
                                    <li>
                                        <i className="icon-clock"></i>
                                        <a href="contact-us.html">Mon - Fri: 8:00 am - 7:00 pm</a>
                                    </li>
                                    <li>
                                        <i className="icon-location color-primary"></i>
                                        <a href="#" className="color-primary">Get Directions</a>
                                    </li>
                                </ul>

                                <div className="d-flex align-items-center">
                                    <form className="header-topbar__search mr-20">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Type Your Search Words..."
                                        />
                                        <button className="header-topbar__search-btn">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                    <ul className="social-icons list-unstyled mb-0 mr-20">
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                        </li>
                                    </ul>
                                    <div className="dropdown lang-dropdown">
                                        <button
                                            className="dropdown-toggle lang-dropdown-toggle"
                                            id="langDropdown"
                                            data-toggle="dropdown"
                                        >
                                            <img src="assets/images/flags/en.png" alt="en" />
                                            <span>English</span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="langDropdown">
                                            <a className="dropdown-item" href="#">
                                                <img src="assets/images/flags/fr.png" alt="en" />
                                                <span>France</span>
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <img src="assets/images/flags/gr.png" alt="en" />
                                                <span>Germany</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div> */}
      {/* header- */}
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img
              src="assets/images/logo/logo.png"
              className="logo"
              alt="logo"
            />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines">
              <span></span>
            </span>
          </button>
          <div className=" navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav">
              <li className="nav__item ">
                <NavLink to="/" className="nav__item-link">
                  Bosh sahifa
                </NavLink>

                {/* dropdown- */}
              </li>
              {/* nav- */}
              <li className="nav__item has-dropdown">
                <NavLink to="about" className="nav__item-link ">
                  Jamiyat
                </NavLink>
                <button
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                ></button>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Jamiyat haqida
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/work-plan"
                      className="nav__item-link"
                    >
                      Ish grafigi
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association-pasport"
                      className="nav__item-link"
                    >
                      Guvohnoma va sertifikatlar
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association-pasport"
                      className="nav__item-link"
                    >
                      Bank rekvizitlari
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association-pasport"
                      className="nav__item-link"
                    >
                      "ZARBDOR ELEVATORI" AJ predmeti va maqsadi
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <NavLink to="about" className="nav__item-link ">
                  Tashkiliy tuzilma
                </NavLink>
                <button
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                ></button>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Kuzatuv kengashi
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Boshqaruv
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Taftish komissiyasi
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Sho'ba va tobe xo'jalik jamiyatlari
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <NavLink to="about" className="nav__item-link ">
                  Aksiyador va investorlarga
                </NavLink>
                <button
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                ></button>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Guvohnoma
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Korporativ hujjatlar
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Kapital tuzilmasi
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Affillangan shaxslar
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Aksiyadorlarning umumiy yig'ilish natijalari
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Rivojlanish strategiyasi
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Biznes rejalar
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Muhim faktlar
                    </NavLink>
                  </li>

                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Hisobotlar
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Asosiy ko'rsatkichlar
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Auditorlik xulosalari
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Divedentlar
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav__item has-dropdown">
                <NavLink to="about" className="nav__item-link ">
                  Matbuot markazi
                </NavLink>
                <button
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                ></button>
                <ul className="dropdown-menu">
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Yangiliklar
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Sayt xaritasi
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Pochta
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/about-us/association"
                      className="nav__item-link"
                    >
                      Bo'sh ish o'rinlari
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            {/* navbar- */}
            <button className="close-mobile-menu d-block d-lg-none">
              <i className="fas fa-times"></i>
            </button>
          </div>
          {/* navbar- */}
          <div className="contact__number d-none d-xl-flex align-items-center">
            <i className="icon-phone"></i>
            <a href="tel:5565454117">55 654 541 17</a>
          </div>
          <div className="m-4">
            <a href="request-quote.html" className="btn btn__primary">
              <span>Request A Quote</span>
              <i className="icon-arrow-right"></i>
            </a>
          </div>
          {/* navbar- */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
