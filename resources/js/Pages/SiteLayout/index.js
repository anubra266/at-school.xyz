import React, { useRef } from "react";
import { Layout } from "antd";
import { Helmet } from "react-helmet";
import "antd/dist/antd.css";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SiteFooter from "./SiteFooter";
function index({ title, children }) {
    const pageLoader = useRef(null);
    const darkmode = false;
    if (darkmode) {
        require("antd/dist/antd.dark.css");
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
