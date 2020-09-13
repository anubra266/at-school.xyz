import React, { useEffect, Suspense } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Helmet } from "react-helmet";
import Layout from "antd/lib/layout";
import message from "antd/lib/message";
import BackTop from "antd/lib/back-top";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SiteFooter from "./SiteFooter";
import Assets from "@/Helpers/Assets";
function index({ title, noSidebar, children, routes, layout, classroom }) {
    const { flash, errors, theme } = usePage();
    const mode = theme;
    message.config({
        duration: 5,
        maxCount: 1
    });
    useEffect(() => {
        flash.success && message.success(flash.success);
        flash.error && message.error(flash.error);
        flash.info && message.info(flash.info);
        flash.warning && message.warning(flash.warning);
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
    const sidebarprops = { mode, routes, layout, classroom };
    return (
        <React.Fragment>
            <Assets />
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
