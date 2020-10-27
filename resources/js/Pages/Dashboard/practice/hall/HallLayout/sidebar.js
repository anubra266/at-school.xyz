import React, { useState } from "react";
import useToggle from "react-use/lib/useToggle";
import Calculator from "@/Shared/Calculator/";

import Menu from "antd/lib/menu";
import Layout from "antd/lib/layout";
import Typography from "antd/lib/typography";
import Space from "antd/lib/space";
import Statistic from "antd/lib/statistic";

import EditOutlined from "@ant-design/icons/EditOutlined";
import CalculatorOutlined from "@ant-design/icons/CalculatorOutlined";
import FullscreenOutlined from "@ant-design/icons/FullscreenOutlined";
import FullscreenExitOutlined from "@ant-design/icons/FullscreenExitOutlined";
import RiseOutlined from "@ant-design/icons/RiseOutlined";
import LogoutOutlined from "@ant-design/icons/LogoutOutlined";
import { Inertia } from "@inertiajs/inertia";
const { Sider } = Layout;

const sidebar = ({
    isFullscreen,
    toggle,
    submitTest,
    drawerSwitch,
    confirm_submit,
    year,
    time
}) => {
    const [showCalculator, toggleCalculator] = useToggle(false);
    const [collapsed, toggleCollapse] = useToggle(true);
    const [startDate, setStartDate] = useState(Date.now());
    const countdown = (prefix = "", style, main) => {
        return (
            <Statistic.Countdown
                value={startDate + time * 60000}
                format="HH:mm:ss"
                prefix={prefix}
                valueStyle={style}
                onFinish={() => main && submitTest()}
            />
        );
    };
    const leave = () => {
        Inertia.visit(route("home"));
    };
    return (
        <React.Fragment>
            <Sider
                collapsible
                collapsed={collapsed}
                theme="dark"
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0
                    // zIndex: 9000
                }}
            >
                <Space style={{ paddingLeft: 10, paddingTop: 10 }}>
                    <img
                        height={30}
                        src={require("@/assets/general/images/at-school.png")}
                    />
                    {!collapsed && (
                        <Typography.Title level={3} style={{ color: "white" }}>
                            at-School
                        </Typography.Title>
                    )}
                </Space>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    selectedKeys={["1"]}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<EditOutlined />}>
                        {`${year.course.name}, ${year.year}`}
                    </Menu.Item>

                    <Menu.Item
                        key="2"
                        onClick={() => toggleCalculator()}
                        icon={<CalculatorOutlined />}
                    >
                        Calculator
                    </Menu.Item>
                    {drawerSwitch && (
                        <Menu.Item
                            key="4"
                            onClick={drawerSwitch}
                            icon={<RiseOutlined />}
                        >
                            Test Progress
                        </Menu.Item>
                    )}
                    <Menu.Item
                        key="3"
                        icon={
                            isFullscreen ? (
                                <FullscreenExitOutlined />
                            ) : (
                                <FullscreenOutlined />
                            )
                        }
                        onClick={() => toggle()}
                    >
                        Full Screen
                    </Menu.Item>
                    <Menu.Item
                        onClick={confirm_submit ? confirm_submit : leave}
                        key="5"
                        icon={<LogoutOutlined />}
                    >
                        {confirm_submit ? "Submit Test" : "Leave"}
                    </Menu.Item>
                </Menu>
            </Sider>
            {showCalculator && (
                <div className="calcspace">
                    <Calculator
                        countdown={countdown}
                        close={toggleCalculator}
                    />
                </div>
            )}

            {!showCalculator && (
                <div className="fixedCountdown">
                    {countdown("", { color: "white" }, "main")}
                </div>
            )}
        </React.Fragment>
    );
};

export default sidebar;
