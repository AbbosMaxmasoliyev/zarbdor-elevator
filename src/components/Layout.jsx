import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// import $ from 'jquery';
// import 'slick-carousel';
// import 'magnific-popup';
// import 'jquery-ui/ui/widgets/slider';
// import 'jquery.counterup';
// import 'jquery-nice-select';
// import 'waypoints/lib/jquery.waypoints.min.js';
// import 'jquery.counterup';
// import "../../plugin.js";
// import "../../main.js";
const Layout = () => {

//   useEffect(() => {
//     /*========== Pre Loading ==========*/
//     setTimeout(() => {
//       $(".preloader").remove();
//     }, 2000);

//     /*========== Mobile Menu & Sticky Navbar ==========*/
//     $('.sticky-navbar').toggleClass('is-sticky', $(window).scrollTop() > 200);

//     $(window).on('scroll', function () {
//       const $navbar = $('.sticky-navbar');
//       if ($(window).width() >= 992) {
//         if ($(window).scrollTop() > 200) {
//           $navbar.addClass('is-sticky');
//         } else {
//           $navbar.removeClass('is-sticky');
//         }
//       }
//     });

//     /*========== Popup handlers ==========*/
//     $('.popup-video').magnificPopup({
//       type: 'iframe',
//       mainClass: 'mfp-fade',
//       removalDelay: 0,
//       preloader: false,
//     });

//     $('.popup-gallery-item').magnificPopup({
//       type: 'image',
//       tLoading: 'Loading image #%curr%...',
//       mainClass: 'mfp-fade',
//       gallery: {
//         enabled: true,
//         navigateByImgClick: true,
//       },
//     });

    /*========== counterUp Plugin ==========*/
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 4000
    //   });

    /*========== NiceSelect Plugin ==========*/
    // $('select').niceSelect();

    /*========== Range Slider ==========*/
    // $("#rangeSlider").slider({
    //   range: true,
    //   min: 0,
    //   max: 300,
    //   values: [50, 200],
    //   slide: function (event, ui) {
    //     $("#rangeSliderResult").html(ui.values[0] + " - " + ui.values[1]);
    //   }
    // });

    // $("#rangeSliderResult").html($("#rangeSlider").slider("values", 0) + " - " + $("#rangeSlider").slider("values", 1));

//   }, []);
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>

        </div>
    );
};

export default Layout;