import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Intro from "./Intro";
import OurOffer from "./OurOffer";
import WhyUs from "./WhyUs";
import Footer from "./Footer";
const index = () => {
    return (
        <div className="site-wrap">
            <Helmet title="At-School Home">
                <link rel="stylesheet" href="/css/landing/style.css" />
                <link rel="stylesheet" href="/css/landing/icomoon/style.css" />
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300"></body>
            </Helmet>
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
export default index;
