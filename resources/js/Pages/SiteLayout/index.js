import React, { useRef } from "react";
import { Layout } from "antd";
import { Helmet } from "react-helmet";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SiteFooter from "./SiteFooter";
function index({ title, children }) {
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
            break;
    }
    return (
        <React.Fragment>
            <Helmet title={`${title} at-School`} />
            <Layout style={{ minHeight: "100vh" }}>
                <Sidebar />
                <Layout className="site-layout">
                    <Navbar pageLoader={pageLoader} />
                    {children}
                    <SiteFooter />
                </Layout>
            </Layout>
        </React.Fragment>
    );
}

export default index;
