import React, { useState } from "react";
import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import BankOutlined from "@ant-design/icons/BankOutlined";
import ApartmentOutlined from "@ant-design/icons/ApartmentOutlined";
import DeploymentUnitOutlined from "@ant-design/icons/DeploymentUnitOutlined";
import TeamOutlined from "@ant-design/icons/TeamOutlined";

export default [
    {
        name: "Dashboard",
        route: "home",
        icon: <PieChartOutlined />
    },
    {
        name: "Organizations",
        route: "organization",
        icon: <BankOutlined />
    },
    {
        name: "Environs",
        route: "environ",
        icon: <ApartmentOutlined />
    },
    {
        name: "Classrooms",
        route: "classroom",
        icon: <DeploymentUnitOutlined />
    },
    {
        name: "Classes",
        route: "class",
        icon: <TeamOutlined />
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
