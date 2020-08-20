import React, { Suspense, useRef } from "react";
import { Helmet } from "react-helmet";

import Loading from "@/Shared/Loading";

import "@/assets/auth/css/util.css";
import "@/assets/auth/css/main.css";

const Assets = React.lazy(() => import("./Assets"));

function Layout({ children, title }) {
    const pageLoader = useRef(null);
    //* Start page Load on Navigator Change

    return (
        <Suspense fallback={<Loading />}>
            <Assets pageLoader={pageLoader}>
                <div
                    className="container-login100"
                    style={{
                        backgroundImage: `url(${require("@/assets/auth/images/bg-01.jpg")})`
                    }}
                >
                    <Helmet title={title} />
                    <nav
                        className="navbar fixed-top text-light"
                        style={{ backgroundColor: "#9e0a9e31" }}
                    >
                        <span className="navbar-brand mb-0 login100-form-title text-white">
                            <img
                                src={require("@/assets/general/images/at-school.png")}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                                loading="lazy"
                            />
                            at-school
                        </span>
                    </nav>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                        {children}
                    </div>
                </div>
            </Assets>
        </Suspense>
    );
}

export default Layout;
