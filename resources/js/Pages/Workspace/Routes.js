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
        action: "home",
        icon: <DoubleLeftOutlined />
    },
    {
        name: "Home",
        route: "",
        action: "classroom_home",
        icon: <PieChartOutlined />
    },
    {
        name: "Members",
        route: `/members`,
        action: "view_classroom_members",
        icon: <UserSwitchOutlined />
    },
    {
        name: "Assessments",
        action: "view_tests",
        route: "/assessments",
        icon: <EditOutlined />,
        items: [
            {
                name: "Theory",
                route: `/assessments/theory`,
                icon: <BookOutlined />
            },
            {
                name: "Objective",
                route: `/assessments/objective`,
                icon: <OrderedListOutlined />
            }
        ]
    }
];
