import React, { Suspense, useRef } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import FlashMessages from "@/Shared/FlashMessages";
import "antd/dist/antd.css";

import Loading from "@/Shared/Loading";

import "@/assets/auth/css/util.css";
import "@/assets/auth/css/main.css";
const Assets = React.lazy(() => import("@/Pages/Auth/Assets"));

function Layout({ children, title }) {
    const pageLoader = useRef(null);
    //* Start page Load on Navigator Change

    return (
        <Suspense fallback={<Loading />}>
            <Assets pageLoader={pageLoader}>
                <nav
                    className="navbar sticky-top text-light"
                    style={{
                        backgroundColor: "#bd59d4",
                        boxShadow: "1px 1px 15px black"
                    }}
                >
                    <InertiaLink href={route("landing")}>
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
                    </InertiaLink>
                </nav>
                <div
                    className="container-login100"
                    style={{
                        backgroundImage: `url(${require("@/assets/auth/images/bg-01.jpg")})`
                    }}
                >
                    <Helmet title={title} />
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                        <FlashMessages />
                        {children}
                    </div>
                </div>
            </Assets>
        </Suspense>
    );
}

export default Layout;
