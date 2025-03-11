import React from 'react'

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-primary">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-contact">
                            <h6 class="footer-widget-title">Quick Contact</h6>
                            <div class="footer-widget-content">
                                <p class="mb-20">If you have any questions or need help, feel free to contact with our team.</p>
                                <div class="contact__number d-flex align-items-center mb-30">
                                    <i class="icon-phone"></i>
                                    <a href="tel:5565454117" class="color-primary">55 654 541 17</a>
                                </div>
                                <p class="mb-20">2307 Beverley Rd Brooklyn, New York 11226 United States.</p>
                                <a href="#" class="btn__location">
                                    <i class="icon-location"></i>
                                    <span>Get Directions</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                            <h6 class="footer-widget-title">Company</h6>
                            <div class="footer-widget-content">
                                <nav>
                                    <ul class="list-unstyled">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="leadership-team.html">Leadership Team</a></li>
                                        <li><a href="blog.html">News & Media</a></li>
                                        <li><a href="projects-grid.html">Case Studies</a></li>
                                        <li><a href="projects-grid.html">Our Projects</a></li>
                                        <li><a href="contacs.html">Contacts</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                            <h6 class="footer-widget-title">Services</h6>
                            <div class="footer-widget-content">
                                <nav>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Wind Generators</a></li>
                                        <li><a href="#">Solar PV Materials</a></li>
                                        <li><a href="#">Battery Materials</a></li>
                                        <li><a href="#">Refined Products</a></li>
                                        <li><a href="#">Solar Modules</a></li>
                                        <li><a href="#">Biodiesel Fuel</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-2 footer-widget footer-widget-nav">
                            <h6 class="footer-widget-title">Support</h6>
                            <div class="footer-widget-content">
                                <nav>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Shipping Policy</a></li>
                                        <li><a href="#">Delivery Tips</a></li>
                                        <li><a href="#">Returns</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 footer-widget footer-widget-align-right">
                            <h6 class="footer-widget-title">Products Catalogue</h6>
                            <div class="footer-widget-content">
                                <a href="request-quote.html" class="btn btn__primary btn__primary-style2 btn__download mb-60">
                                    <i class="icon-download"></i>
                                    <span>Download PDF</span>
                                </a>
                                <ul class="social-icons list-unstyled">
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyrights">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between">
                            <nav>
                                <ul class="copyright__nav d-flex flex-wrap list-unstyled mb-0">
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                </ul>
                            </nav>
                            <p class="mb-0">
                                <span class="color-gray">&copy; 2022 Solatec, All Rights Reserved. With Love by</span>
                                <a href="http://themeforest.net/user/7oroof">7oroof.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}

export default Footer