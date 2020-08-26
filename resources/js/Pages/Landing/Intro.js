import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Login from "./Login";

function Intro() {
    return (
        <div className="intro-section" id="home-section">
            <div
                className="slide-1"
                style={{
                    backgroundImage: `url(${require("@/assets/landing/images/hero_1.jpg")})`
                }}
                data-stellar-background-ratio="0.5"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="row align-items-center">
                                <div className="col-lg-6 mb-4">
                                    <h1 data-aos="fade-up" data-aos-delay="100">
                                        Let the learning flow
                                    </h1>
                                    <p
                                        className="mb-4"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        We help you keep up with the flow of
                                        knowledge. Anywhere and anytime.
                                    </p>
                                    <p data-aos="fade-up" data-aos-delay="300">
                                        <InertiaLink
                                            className="btn prpbut py-3 px-5 btn-pill"
                                            href={route("register")}
                                        >
                                            Sign Up
                                        </InertiaLink>
                                    </p>
                                </div>

                                <div
                                    className="col-lg-5 ml-auto"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >
                                    <Login />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Intro;
