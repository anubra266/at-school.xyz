import React, { useState } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Card from "antd/lib/card";
import Menu from "antd/lib/menu";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";

const { Content } = Layout;

const Settings = props => {
    const [page, setPage] = useState("basic");

    const handleMenu = ({ item, key }) => {
        setPage(key);
    };
    return (
        <Dashboardlayout title="Account Settings">
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title="Settings"
                        subTitle="Set your Preferences"
                    ></PageHeader>
                </div>
                <Card>
                    <Row>
                        <Col>
                            <Menu
                                onClick={handleMenu}
                                style={{ width: 256 }}
                                selectedKeys={[page]}
                                mode="inline"
                            >
                                <Menu.Item key="basic">
                                    Basic Settings
                                </Menu.Item>
                                <Menu.Item key="theme">
                                    Theme Settings
                                </Menu.Item>
                                <Menu.Item key="security">
                                    Security Settings
                                </Menu.Item>
                                <Menu.Item key="advanced">
                                    Advanced Settings
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col flex="auto">
                            <div scroll-region="true">
                                <SettingsPage page={page} {...props} />
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Content>
        </Dashboardlayout>
    );
};
export default Settings;

const SettingsPage = props => {
    const { page } = props;
    var Component = require(`./${page}Setting`).default;
    return <Component {...props} />;
};
