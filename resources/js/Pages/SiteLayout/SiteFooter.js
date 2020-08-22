import React from "react";
import { Layout, Menu } from "antd";
import { HeartOutlined } from "@ant-design/icons";
const { Footer } = Layout;
function SiteFooter() {
    return (
        <React.Fragment>
            <Footer style={{ textAlign: "center" }}>
                at-School ©{new Date().getFullYear()}{" "}
                <a href="https://www.linkedin.com/in/anubra266" target="_blank">
                    Anubra
                </a>
            </Footer>
        </React.Fragment>
    );
}

export default SiteFooter;
