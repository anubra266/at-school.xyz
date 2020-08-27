import React, { Suspense, useRef, useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import FlashMessages from "@/Shared/FlashMessages";

import Loading from "@/Shared/Loading";

const Assets = React.lazy(() => import("@/Pages/Auth/Assets"));

function Layout({ children, title }) {
    useEffect(() => {
        document.title = title;
    },[title]);
    const pageLoader = useRef(null);
    //* Start page Load on Navigator Change

    return (
        <Suspense fallback={<Loading />}>
            <Assets pageLoader={pageLoader}>
                <nav
                    className="navbar sticky-top text-light"
                    style={{
                        backgroundColor: "#7971ea",
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

                    }}
                >
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
