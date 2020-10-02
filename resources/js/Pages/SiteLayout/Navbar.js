import React from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Menu from "antd/lib/menu";
import Dropdown from "antd/lib/dropdown";
import Button from "antd/lib/button";
import Badge from "antd/lib/badge";
import Avatar from "antd/lib/avatar";

import Bell from "@ant-design/icons/BellOutlined";
import LogoutIcon from "@ant-design/icons/PoweroffOutlined";

import SettingOutlined from "@ant-design/icons/SettingOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";

import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Main from "@/Helpers/Main.js";

const { Header } = Layout;

function Navbar(props) {
    const { auth } = usePage();

    return (
        <React.Fragment>
            <Header
                className="site-layout-background"
                style={{
                    padding: 0,
                    paddingRight: 20
                }}
            >
                <Row
                    justify="end"
                    gutter={[30, 0]}
                    style={{ height: "100%" }}
                    align="middle"
                >
                    <Col>
                        <Badge count={5} overflowCount={10}>
                            <Notifications />
                        </Badge>
                    </Col>
                    <Col>
                        <UserMenu user={auth.user} />
                    </Col>
                </Row>
            </Header>
        </React.Fragment>
    );
}

export default Navbar;

const NotificationMenu = (
    <Menu>
        <Menu.Item>
            <a>1st menu item</a>
        </Menu.Item>
    </Menu>
);

const Notifications = () => {
    return (
        <Dropdown key="more" overlay={NotificationMenu}>
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
            </Button>
        </Dropdown>
    );
};

const UserDropDown = (
    <Menu>
        <Menu.Item>
            <InertiaLink href={route("logout")}>
                <UserOutlined /> Profile
            </InertiaLink>
        </Menu.Item>
        <Menu.Item>
            <InertiaLink href={route("settings.general")}>
                <SettingOutlined /> Settings
            </InertiaLink>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <InertiaLink href={route("logout")}>
                <span
                    onClick={() => {
                        message.loading("Logging you out...");
                    }}
                >
                    <LogoutIcon /> Logout
                </span>
            </InertiaLink>
        </Menu.Item>
    </Menu>
);

const UserMenu = ({ user }) => {
    return (
        <Dropdown key="user" overlay={UserDropDown}>
            <span
                style={{
                    cursor: "pointer"
                }}
            >
                <Avatar
                    size="small"
                    src={`/profile/image/${user.profile_image}`}
                />{" "}
                {Main.name(user)}
            </span>
        </Dropdown>
    );
};
