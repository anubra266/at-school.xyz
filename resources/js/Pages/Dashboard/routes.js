import React, { useState } from "react";
import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import BankOutlined from "@ant-design/icons/BankOutlined";

export default [
    {
        name: "Dashboard",
        route: "home",
        icon: <PieChartOutlined />
    },
    {
        name: "Organizations",
        route: "organization.index",
        icon: <BankOutlined />
    },
    {
        name: "has Keys",
        icon: <BankOutlined />,
        items: [
            { name: "Key1", route: "home", icon: <BankOutlined /> },
            { name: "Key2", route: "home", icon: <BankOutlined /> }
        ]
    }
];
