import React from "react";

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
                                        <a
                                            href="#"
                                            className="btn prpbut py-3 px-5 btn-pill"
                                        >
                                            Sign Up
                                        </a>
                                    </p>
                                </div>

                                <div
                                    className="col-lg-5 ml-auto"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >
                                    <form
                                        action=""
                                        method="post"
                                        className="form-box"
                                    >
                                        <h3 className="h4 text-black mb-4">
                                            Login
                                        </h3>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Email Addresss"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                className="btn prpbut btn-pill"
                                                value="Login"
                                            />
                                        </div>
                                    </form>
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
