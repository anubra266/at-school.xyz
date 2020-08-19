import React from "react";
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

const Landing = () => {
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
