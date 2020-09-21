import React, { useRef } from "react";
import useFullscreen from "react-use/lib/useFullscreen";
import useToggle from "react-use/lib/useToggle";

import useFlashMessage from "@/Helpers/FlashMessages";
import useAssets from "@/Helpers/Assets";
import SiteFooter from "@/Pages/SiteLayout/SiteFooter";
import PageHeader from "antd/lib/page-header";
import Layout from "antd/lib/layout";
import SideBar from "./sidebar";

const { Header, Content } = Layout;

const index = ({
    classroom,
    test,
    submitTest,
    drawerSwitch,
    confirm_submit,
    children
}) => {
    document.title = `${test.title} - ${classroom.name}`;
    useFlashMessage();
    useAssets();
    const ref = useRef(null);
    const [show, toggle] = useToggle(false);
    const isFullscreen = useFullscreen(ref, show, {
        onClose: () => toggle(false)
    });

    const sidebarProps = {
        isFullscreen,
        toggle,
        test,
        submitTest,
        drawerSwitch,
        confirm_submit,
        classroom
    };
    return (
        <div ref={ref}>
            <Layout style={{ minHeight: "100vh" }}>
                <SideBar {...sidebarProps} />
                <Layout className="site-layout" style={{ marginLeft: 100 }}>
                    <Header style={{ padding: 0 }}>
                        <PageHeader
                            title="at-School"
                            subTitle={test.title}
                            className="site-page-header"
                            ghost={false}
                            avatar={{
                                src: require("@/assets/general/images/at-school.png")
                            }}
                        ></PageHeader>
                    </Header>
                    <Content
                        style={{
                            margin: "0 6px",
                            overflow: "initial",
                            height: "100%"
                        }}
                    >
                        {children}
                    </Content>
                    <SiteFooter />
                </Layout>
            </Layout>
        </div>
    );
};

export default index;
