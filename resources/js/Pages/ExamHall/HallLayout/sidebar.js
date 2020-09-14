import React, { useState } from "react";
import useToggle from "react-use/lib/useToggle";
import Calculator from "@/Shared/Calculator/";

import Menu from "antd/lib/menu";
import Layout from "antd/lib/layout";
import Statistic from "antd/lib/statistic";

import EditOutlined from "@ant-design/icons/EditOutlined";
import CalculatorOutlined from "@ant-design/icons/CalculatorOutlined";
import FullscreenOutlined from "@ant-design/icons/FullscreenOutlined";
import FullscreenExitOutlined from "@ant-design/icons/FullscreenExitOutlined";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";
const { Sider } = Layout;

const sidebar = ({ isFullscreen, toggle, test }) => {
    const [showCalculator, toggleCalculator] = useToggle(false);
    const [startDate, setStartDate] = useState(Date.now());
    const finish = () => {
        alert("Test Over!");
    };
    const countdown = (prefix = "", style) => {
        return (
            test.duration && (
                <Statistic.Countdown
                    value={startDate + test.duration * 60000}
                    format="HH:mm:ss"
                    prefix={prefix}
                    valueStyle={style}
                    onFinish={() => finish()}
                />
            )
        );
    };
    return (
        <Sider collapsible collapsed={true} trigger={null} theme="dark">
            <div className="greylogo" />
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                selectedKeys={["1"]}
                mode="inline"
            >
                <Menu.Item key="1" icon={<EditOutlined />}>
                    {test.title}
                </Menu.Item>

                <Menu.Item
                    key="2"
                    onClick={() => toggleCalculator()}
                    icon={<CalculatorOutlined />}
                >
                    Calculator
                </Menu.Item>
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
                <Menu.Item key="4" icon={<ClockCircleOutlined />}>
                    {countdown("Time Left:", { fontSize: 12 })}
                </Menu.Item>
            </Menu>

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
                    {countdown("", { color: "white" })}
                </div>
            )}
        </Sider>
    );
};

export default sidebar;
