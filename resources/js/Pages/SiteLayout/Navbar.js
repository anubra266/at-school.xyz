import React from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Menu from "antd/lib/menu";
import Dropdown from "antd/lib/dropdown";
import Button from "antd/lib/button";
import Badge from "antd/lib/badge";
import Avatar from "antd/lib/avatar";
import List from "antd/lib/list";
import Popover from "antd/lib/popover";

import Bell from "@ant-design/icons/BellOutlined";
import LogoutIcon from "@ant-design/icons/PoweroffOutlined";

import SettingOutlined from "@ant-design/icons/SettingOutlined";

import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Main from "@/Helpers/Main.js";

const { Header } = Layout;

function Navbar(props) {
    const { auth, settings } = usePage();
    const theme =
        settings && settings.preferences && settings.preferences.theme;
    return (
        <React.Fragment>
            <Header
                className={theme !== "dark" && `site-layout-background`}
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

const Notifications = () => {
    const nots = [
        { data: "You have a test coming up by 3PM" },
        { data: "You missed mathematics test at 4" }
    ];
    const NotificationMenu = (
        <List>
            {nots.map((item, key) => {
                return (
                    <List.Item key={key}>
                        <List.Item.Meta title={null} description={item.data} />
                    </List.Item>
                );
            })}
        </List>
    );

    return (
        <Popover
            placement="bottomRight"
            content={NotificationMenu}
            title={<span>Notifications</span>}
            trigger="click"
        >
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
        </Popover>
    );
};

const UserDropDown = (
    <Menu>
        <Menu.Item>
            <InertiaLink href={route("settings.general")}>
                <SettingOutlined /> Settings
            </InertiaLink>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <InertiaLink method="post" href={route("logout")}>
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
