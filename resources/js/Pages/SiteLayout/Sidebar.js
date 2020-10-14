import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { returnRoute } from "@/Helpers/PresentRoute";

import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import Space from "antd/lib/space";
import message from "antd/lib/message";
import PoweroffOutlined from "@ant-design/icons/PoweroffOutlined";

const { Sider } = Layout;
const { SubMenu } = Menu;
function Sidebar({ mode, routes, layout, classroom }) {
    const getRoute = () => {
        return returnRoute(layout, routes);
    };

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };
    const { auth } = usePage();
    const genroute = item => {
        return (
            <InertiaLink
                href={
                    item.route === "/home"
                        ? "/home"
                        : `menu-${item.name}` == getRoute()[0][0]
                            ? "#"
                            : `${layout}${item.route}`
                }
            >
                {item.name}
            </InertiaLink>
        );
    };
    return (
        <React.Fragment>
            <Sider
                collapsible
                collapsed={collapsed}
                breakpoint="md"
                onCollapse={onCollapse}
                theme="dark"
            >
                <Space style={{ paddingLeft: 10, paddingTop: 10 }}>
                    <img
                        height={30}
                        src={require("@/assets/general/images/at-school.png")}
                    />
                </Space>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={getRoute()[0]}
                    defaultOpenKeys={getRoute()[1]}
                    mode="inline"
                >
                    {routes.map(menu => {
                        return (
                            (auth.user.can[menu.name] ||
                                (classroom &&
                                    (menu.for.includes(classroom.role) ||
                                        menu.for == "gen"))) &&
                            (menu.items ? (
                                <SubMenu
                                    key={`menu-${menu.name}`}
                                    icon={menu.icon}
                                    title={menu.name}
                                >
                                    {menu.items
                                        .filter(item => !item.ignore)
                                        .map(item => {
                                            return (
                                                <Menu.Item
                                                    key={`menu-${item.name}`}
                                                    icon={item.icon}
                                                >
                                                    {genroute(item)}
                                                </Menu.Item>
                                            );
                                        })}
                                </SubMenu>
                            ) : (
                                    <Menu.Item
                                        key={`menu-${menu.name}`}
                                        icon={menu.icon}
                                    >
                                        {genroute(menu)}
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
                        <a href={route("logout")}>
                            <span>Logout</span>
                        </a>
                    </Menu.Item>
                </Menu>
            </Sider>
        </React.Fragment>
    );
}

export default Sidebar;
