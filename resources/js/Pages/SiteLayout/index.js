import React, { useRef, useEffect } from "react";
import Layout from "antd/lib/layout";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SiteFooter from "./SiteFooter";
function index({ title, noSidebar, children, routes }) {
    useEffect(() => {
        document.title = `${title} - at-School`;
    }, [title]);
    const pageLoader = useRef(null);

    const mode = "dark";

    switch (mode) {
        case "light":
            require("antd/dist/antd.css");
            break;
        case "dark":
            require("antd/dist/antd.dark.css");
            break;
        case "compact":
            require("antd/dist/antd.compact.css");
            break;

        default:
            require("antd/dist/antd.dark.css");
            break;
    }
    return (
        <React.Fragment>
            <Layout style={{ minHeight: "100vh" }}>
                <Navbar pageLoader={pageLoader} />
                <Layout>
                    {noSidebar !== true && <Sidebar mode={mode} routes={routes} />}
                    <Layout className="site-layout">
                        {children}
                        <SiteFooter />
                    </Layout>
                </Layout>
            </Layout>
        </React.Fragment>
    );
}

export default index;
