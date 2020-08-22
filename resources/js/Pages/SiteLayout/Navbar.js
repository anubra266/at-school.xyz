import React, { useState } from "react";
import useEffectOnce from "react-use/lib/useEffectOnce";
import LoadingBar from "react-top-loading-bar";
import Layout from "antd/lib/layout";
import Menu from "antd/lib/menu";
import PageHeader from "antd/lib/page-header";
import Dropdown from "antd/lib/dropdown";
import Button from "antd/lib/button";
import Tag from "antd/lib/tag";
import Drawer from "antd/lib/drawer";

import EllipsisOutlined from "@ant-design/icons/EllipsisOutlined";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import { loadPage } from "@/Helpers/PageLoad";

const { Header } = Layout;
function Navbar({ pageLoader }) {
    // TODO Notification Drawer
    // TODO Logout
    // TODO Share auth data from backend

    loadPage(pageLoader);
    useEffectOnce(() => {
        //*complete pageLoader loading
        pageLoader && pageLoader.current.complete();
    });
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <React.Fragment>
            <LoadingBar
                color="rgba(100,100,200,0.4)"
                ref={pageLoader}
                waitingTime={1000}
            />
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <PageHeader
                    title="at-School"
                    className="site-page-header"
                    subTitle="This is a subtitle"
                    tags={<Tag color="blue">Running</Tag>}
                    extra={[
                        <React.Fragment key={1}>
                            <button
                                onClick={showDrawer}
                                className="navbar-toggler"
                                style={{
                                    color: "white"
                                }}
                                type="button"
                            >
                                <MenuOutlined />
                            </button>
                            <Drawer
                                title="Basic Drawer"
                                placement="right"
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                            >
                                <p>
                                    {" "}
                                    <Button key="3">Operation</Button>
                                </p>
                                <p>
                                    {" "}
                                    <Button key="2">Operation</Button>
                                </p>
                                <p>
                                    {" "}
                                    <Button key="1" type="primary">
                                        Primary
                                    </Button>
                                </p>
                                <p>
                                    {" "}
                                    <DropdownMenu key="more" />
                                </p>
                            </Drawer>
                        </React.Fragment>
                    ]}
                    avatar={{
                        src: require("@/assets/general/images/at-school.png")
                    }}
                ></PageHeader>
            </Header>
        </React.Fragment>
    );
}

export default Navbar;

const menu = (
    <Menu>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.alipay.com/"
            >
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.taobao.com/"
            >
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
            >
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

const DropdownMenu = () => {
    return (
        <Dropdown key="more" overlay={menu}>
            <Button
                style={{
                    border: "none",
                    padding: 0
                }}
            >
                <EllipsisOutlined
                    style={{
                        fontSize: 20,
                        verticalAlign: "top"
                    }}
                />
            </Button>
        </Dropdown>
    );
};
