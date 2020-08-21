import React from "react";
import { useEffectOnce } from "react-use";

import Head from "./Head";
import Header from "./Header";
import Intro from "./Intro";
import OurOffer from "./OurOffer";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
import "@/assets/landing/fonts/icomoon/style.css";
import "@/assets/landing/css/bootstrap.min.css";
import "@/assets/landing/css/owl.theme.default.min.css";
import "@/assets/landing/css/owl.theme.default.min.css";

import "@/assets/landing/css/jquery.fancybox.min.css";

import "@/assets/landing/css/bootstrap-datepicker.css";

import "@/assets/landing/fonts/flaticon/font/flaticon.css";

import "@/assets/landing/css/aos.css";

import "@/assets/landing/css/style.css";
const scripts = [
    "js/landing/jquery-migrate-3.0.1.min.js",
    "js/landing/jquery-ui.js",
    "js/landing/popper.min.js",
    "js/landing/bootstrap.min.js",
    "js/landing/owl.carousel.min.js",
    "js/landing/jquery.stellar.min.js",
    "js/landing/jquery.countdown.min.js",
    "js/landing/bootstrap-datepicker.min.js",
    "js/landing/jquery.easing.1.3.js",
    "js/landing/aos.js",
    "js/landing/jquery.fancybox.min.js",
    "js/landing/jquery.sticky.js",
    "js/landing/main.js"
];
const Landing = () => {
    //* load page scripts
    useEffectOnce(() => {
        scripts.forEach(url => {
            const script = document.createElement("script");
            script.async = true;
            script.src = url;
            document.body.appendChild(script);
        });
    });
    return (
        <div className="site-wrap">
            <Head />
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <Header />
            <Intro />
            <OurOffer />
            <WhyUs />
            <Footer />
        </div>
    );
};
export default Landing;
