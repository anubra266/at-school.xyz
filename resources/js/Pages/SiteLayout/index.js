import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "antd/lib/layout";
import BackTop from "antd/lib/back-top";
import useFlashMessage from "@/Helpers/FlashMessages";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SiteFooter from "./SiteFooter";
import useAssets from "@/Helpers/Assets";
function index({ title, noSidebar, children, routes, layout, classroom }) {
    const mode = useAssets();
    useFlashMessage();
    useEffect(() => {
        document.title = `${title} - at-School`;
    }, [title]);
    const sidebarprops = { mode, routes, layout, classroom };
    const style = {
        height: 40,
        width: 40,
        lineHeight: "40px",
        borderRadius: 4,
        backgroundColor: "#1088e9",
        color: "#fff",
        textAlign: "center",
        fontSize: 14
    };
    return (
        <React.Fragment>
            <Helmet>
                <meta name="theme-color" content="red" />
            </Helmet>
            <Layout style={{ minHeight: "100vh" }}>
                <Layout>
                    {noSidebar !== true && <Sidebar {...sidebarprops} />}
                    <Layout className="site-layout">
                        <Navbar classroom={classroom} />
                        {children} 
                        <SiteFooter />
                    </Layout>
                </Layout>
                <BackTop>
                    <div style={style}>UP</div>
                </BackTop>
            </Layout>
        </React.Fragment>
    );
}

export default index;
