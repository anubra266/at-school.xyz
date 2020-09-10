import React, { useEffect, Suspense } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import Layout from "antd/lib/layout";
import message from "antd/lib/message";
import BackTop from "antd/lib/back-top";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SiteFooter from "./SiteFooter";

function index({ title, noSidebar, children, routes, layout, classroom }) {
    const { flash, errors } = usePage();
    useEffect(() => {
        flash.success && message.success(flash.success, 5);
        flash.error && message.error(flash.error, 5);
        flash.info && message.info(flash.info, 5);
        flash.warning && message.warning(flash.warning, 5);
    }, [flash]);
    useEffect(() => {
        errors &&
            Object.keys(errors).forEach(err => {
                message.error(errors[err][0], 3);
            });
    }, [errors]);
    useEffect(() => {
        document.title = `${title} - at-School`;
    }, [title]);

    const mode = "light";

    switch (mode) {
        case "light":
            require("antd/dist/antd.css");
            break;
        case "dark":
            require("antd/dist/antd.dark.css");
            require("@/assets/general/css/ckeditor-dark.css")
            break;
        case "compact":
            require("antd/dist/antd.compact.css");
            break;

        default:
            require("antd/dist/antd.dark.css");
            break;
    }
    const sidebarprops = { mode, routes, layout, classroom };
    return (
        <React.Fragment>
            <Helmet>
                <meta name="theme-color" content="red" />
            </Helmet>
            <BackTop />
            <Layout style={{ minHeight: "100vh" }}>
                <Navbar />
                <Layout>
                    {noSidebar !== true && <Sidebar {...sidebarprops} />}
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
