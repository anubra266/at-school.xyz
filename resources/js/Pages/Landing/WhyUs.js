import React from "react";

function WhyUs() {
    return (
        <div className="site-section pb-0">
            <div className="future-blobs">
                <div className="blob_2">
                    <img
                        src={require("@/assets/landing/images/blob_2.svg")}
                        alt="at-School"
                    />
                </div>
                <div className="blob_1">
                    <img
                        src={require("@/assets/landing/images/blob_1.svg")}
                        alt="at-School"
                    />
                </div>
            </div>
            <div className="container">
                <div
                    className="row mb-5 justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay=""
                >
                    <div className="col-lg-7 text-center">
                        <h2 className="section-title">Why Choose Us</h2>
                    </div>
                </div>
                <div className="row">
                    <div
                        className="col-lg-4 ml-auto align-self-start"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="p-4 rounded bg-white why-choose-us-box">
                            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                <div className="mr-3">
                                    <span className="custom-icon-inner">
                                        <span className="icon icon-share-square-o"></span>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="m-0">
                                        Pass across anything to your Students
                                    </h3>
                                </div>
                            </div>

                            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                <div className="mr-3">
                                    <span className="custom-icon-inner">
                                        <span className="icon icon-import_export"></span>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="m-0">
                                        Import assessments unto the Platform
                                    </h3>
                                </div>
                            </div>

                            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                <div className="mr-3">
                                    <span className="custom-icon-inner">
                                        <span className="icon icon-receipt"></span>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="m-0">
                                        Answer Reviews after Tests
                                    </h3>
                                </div>
                            </div>

                            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
                                <div className="mr-3">
                                    <span className="custom-icon-inner">
                                        <span className="icon icon-bar-chart-o"></span>
                                    </span>
                                </div>
                                <div>
                                    <h3 className="m-0">
                                        Generate reports for your Classes
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-7 align-self-end"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <img
                            src={require("@/assets/landing/images/person_transparent.png")}
                            alt="at-School reports"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
