import React, { Suspense, useRef, useEffect } from "react";
import FlashMessages from "@/Shared/FlashMessages";

import Loading from "@/Shared/Loading";

const Assets = React.lazy(() => import("@/Pages/Auth/Assets"));

function Layout({ children, title, header, subheader }) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    const pageLoader = useRef(null);

    return (
        <Suspense fallback={<Loading />}>
            <Assets pageLoader={pageLoader}>
                <div className="wrapper-page">
                    <div className="card overflow-hidden account-card mx-3">
                        <FlashMessages />
                        <div className="bg-primary p-4 text-white text-center position-relative">
                            <h4 className="font-20 m-b-5">{header}</h4>
                            <p className="text-white-50 mb-4">{subheader}</p>
                            <a href="index.html" className="logo logo-admin">
                                <img
                                    src={require("@/assets/general/images/at-school.png")}
                                    height="24"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        {children}
                    </div>
                    <div className="m-t-40 text-center">
                        <p>
                            at-School ©{new Date().getFullYear()}{" "}
                            <a
                                href="https://www.linkedin.com/in/anubra266"
                                target="_blank"
                            >
                                Anubra
                            </a>
                        </p>
                    </div>
                </div>
            </Assets>
        </Suspense>
    );
}

export default Layout;
