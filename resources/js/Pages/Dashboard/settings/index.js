import React, { useState } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Card from "antd/lib/card";
import Menu from "antd/lib/menu";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import Main from "@/Helpers/Main";

import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined
} from "@ant-design/icons";
const { Content } = Layout;
const { SubMenu } = Menu;

const Template = props => {
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
                                <Menu.Item key="notification">
                                    Notification Settings
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col>
                            <SettingsPage page={page} {...props} />
                        </Col>
                    </Row>
                </Card>
            </Content>
        </Dashboardlayout>
    );
};
export default Template;

const SettingsPage = props => {
    const { page } = props;
    const Page = React.createFactory(require(`./${page}Setting`).default);
    return <Page />;
};
