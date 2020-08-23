import React, { useState } from "react";

import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";

import PoweroffOutlined from "@ant-design/icons/PoweroffOutlined";
import DesktopOutlined from "@ant-design/icons/DesktopOutlined";
import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";

import { InertiaLink } from "@inertiajs/inertia-react";
//  TODO Dynamic JSON Routing
const { Sider } = Layout;
const { SubMenu } = Menu;
function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    const handleClick = e => {
        console.log("click ", e.key, e.keyPath);
    };
    return (
        <React.Fragment>
            <Sider
                collapsible
                collapsed={collapsed}
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={onCollapse}
            >
                <div className="logo" />
                <Menu
                    onClick={handleClick}
                    theme="dark"
                    defaultSelectedKeys={["3"]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="7">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="8" icon={<PoweroffOutlined />}>
                        <InertiaLink href={route("logout")} method="POST">
                            Logout
                        </InertiaLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        </React.Fragment>
    );
}

export default Sidebar;
