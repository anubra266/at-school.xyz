import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { returnRoute } from "@/Helpers/PresentRoute";

import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import message from "antd/lib/message";
import PoweroffOutlined from "@ant-design/icons/PoweroffOutlined";
import DesktopOutlined from "@ant-design/icons/DesktopOutlined";
import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";

//  TODO Dynamic JSON Routing
const { Sider } = Layout;
const { SubMenu } = Menu;
function Sidebar({ mode, routes }) {
    const getRoute = () => {
        return returnRoute(routes);
    };

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    const { auth } = usePage();

    return (
        <React.Fragment>
            <Sider
                collapsible
                collapsed={collapsed}
                breakpoint="md"
                collapsedWidth="0"
                onCollapse={onCollapse}
                theme={mode === "compact" ? "light" : mode}
            >
                <div className="logo" />
                <Menu
                    theme="light"
                    defaultSelectedKeys={getRoute()[0]}
                    defaultOpenKeys={getRoute()[1]}
                    mode="inline"
                >
                    {routes.map(menu => {
                        return (
                            (auth.user.can[menu.route] ||
                                auth.user.can[menu.action]) &&
                            (menu.items ? (
                                <SubMenu
                                    key={`menu-${menu.name}`}
                                    icon={menu.icon}
                                    title={menu.name}
                                >
                                    {menu.items.map(item => {
                                        return (
                                            <Menu.Item
                                                key={`menu-${item.name}`}
                                                icon={item.icon}
                                            >
                                                <InertiaLink
                                                    href={
                                                        `menu-${item.name}` ==
                                                        getRoute()[0][0]
                                                            ? "#"
                                                            : menu.route
                                                    }
                                                >
                                                    {item.name}
                                                </InertiaLink>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            ) : (
                                <Menu.Item
                                    key={`menu-${menu.name}`}
                                    icon={menu.icon}
                                >
                                    <InertiaLink
                                        href={
                                            `menu-${menu.name}` ==
                                            getRoute()[0][0]
                                                ? "#"
                                                : menu.route
                                        }
                                    >
                                        {menu.name}
                                    </InertiaLink>
                                </Menu.Item>
                            ))
                        );
                    })}

                    <Menu.Item
                        key="logout"
                        icon={<PoweroffOutlined />}
                        onClick={() => {
                            message.loading("Logging you out...");
                        }}
                    >
                        <InertiaLink href={route("logout")} method="POST">
                            <span>Logout</span>
                        </InertiaLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        </React.Fragment>
    );
}

export default Sidebar;
