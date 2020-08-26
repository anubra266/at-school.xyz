import React, { useState } from "react";
import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import BankOutlined from "@ant-design/icons/BankOutlined";
import ApartmentOutlined from "@ant-design/icons/ApartmentOutlined";
import DeploymentUnitOutlined from "@ant-design/icons/DeploymentUnitOutlined";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import HighlightOutlined from "@ant-design/icons/HighlightOutlined";

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
        name: "Practice",
        route: "practice",
        icon: <TeamOutlined />
    },
    {
        name: "Settings",
        route: "settings",
        icon: <SettingOutlined />,
        items: [
            {
                name: "Profile Settings",
                route: "settings/profile",
                icon: <UserOutlined />
            },
            {
                name: "Theme Settings",
                route: "settings/theme",
                icon: <HighlightOutlined />
            }
        ]
    }
];
