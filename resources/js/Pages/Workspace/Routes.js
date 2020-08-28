import React from "react";

import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import UserSwitchOutlined from "@ant-design/icons/UserSwitchOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import BookOutlined from "@ant-design/icons/BookOutlined";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";

export default [
    {
        name: "Dashboard",
        route: "/home",
        for: "gen",
        icon: <DoubleLeftOutlined />
    },
    {
        name: "Home",
        route: "",
        for: "gen",
        icon: <PieChartOutlined />
    },
    {
        name: "Members",
        route: `/members`,
        for: "gen",
        icon: <UserSwitchOutlined />
    },
    {
        name: "Assessments",
        route: "/assessments",
        for: ["educator", "supervisor"],
        icon: <EditOutlined />,
        items: [
            {
                name: "Theory",
                route: `/assessments/edu-theory`,
                icon: <BookOutlined />
            },
            {
                name: "Objective",
                route: `/assessments/edu-objective`,
                icon: <OrderedListOutlined />
            }
        ]
    }
];
