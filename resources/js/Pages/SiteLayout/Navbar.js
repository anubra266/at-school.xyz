import React, { useState } from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Menu from "antd/lib/menu";
import PageHeader from "antd/lib/page-header";
import Dropdown from "antd/lib/dropdown";
import Button from "antd/lib/button";
import Tag from "antd/lib/tag";
import Drawer from "antd/lib/drawer";

import Bell from "@ant-design/icons/BellOutlined";
import LogoutIcon from "@ant-design/icons/PoweroffOutlined";

import MenuOutlined from "@ant-design/icons/MenuOutlined";
import { usePage } from "@inertiajs/inertia-react";
import { trans_roles } from "@/Helpers/Translate.js";

const { Header } = Layout;

function Navbar(props) {
    const { auth } = usePage();
    const trans_role = trans_roles(auth.user.initial_role);
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <React.Fragment>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <PageHeader
                    title={props.classroom && props.classroom.name}
                    className="site-page-header"
                    ghost={false}
                    subTitle={
                        <Row>
                            <Col
                                xs={0}
                                md={12}
                            >{`${auth.user.first_name} ${auth.user.last_name}`}</Col>
                        </Row>
                    }
                    tags={
                        <Row>
                            <Col xs={0} md={12}>
                                <Tag color="purple">
                                    {trans_roles(auth.user.initial_role)[0]}
                                </Tag>
                            </Col>
                        </Row>
                    }
                    extra={[
                        <React.Fragment key={1}>
                            <button
                                onClick={showDrawer}
                                className="navbar-toggler"
                                type="button"
                            >
                                <MenuOutlined />
                            </button>
                            <Drawer
                                title="Activity"
                                placement="right"
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                            >
                                <p>
                                    <Notifications />
                                </p>
                                <p>
                                    <Logout />
                                </p>
                            </Drawer>
                        </React.Fragment>
                    ]}
                ></PageHeader>
            </Header>
        </React.Fragment>
    );
}

export default Navbar;

const menu = (
    <Menu>
        <Menu.Item>
            <a>1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a>2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a>3rd menu item</a>
        </Menu.Item>
    </Menu>
);

const Notifications = () => {
    return (
        <Dropdown key="more" overlay={menu}>
            <Button
                style={{
                    border: "none",
                    padding: 0
                }}
            >
                <Bell
                    style={{
                        fontSize: 20,
                        verticalAlign: "top"
                    }}
                />
                Notifications
            </Button>
        </Dropdown>
    );
};

const Logout = () => {
    return (
        <Button
            style={{
                border: "none",
                padding: 0
            }}
            onClick={() => {
                message.loading("Logging you out...");
            }}
        >
            <LogoutIcon /> Logout
        </Button>
    );
};
