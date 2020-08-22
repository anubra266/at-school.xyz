import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;
function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    const handleClick = e => {
        console.log("click ", e.key,e.keyPath);
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
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        </React.Fragment>
    );
}

export default Sidebar;
