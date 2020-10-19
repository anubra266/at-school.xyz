import React from "react";

import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import UserSwitchOutlined from "@ant-design/icons/UserSwitchOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import BookOutlined from "@ant-design/icons/BookOutlined";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import FileTextOutlined from "@ant-design/icons/FileTextOutlined";

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
    },
    {
        name: "Assessments",
        route: "/assessments",
        for: ["student"],
        icon: <EditOutlined />,
        items: [
            {
                name: "Theory",
                route: `/assessments/stud-theory`,
                icon: <BookOutlined />
            },
            {
                name: "Objective",
                route: `/assessments/stud-objective`,
                icon: <OrderedListOutlined />
            }
        ]
    },
    {
        name: "Results",
        route: "/results",
        for: ["educator", "supervisor"],
        icon: <FileTextOutlined />,
        items: [
            {
                name: "Theory Results",
                route: `/results/edu-theory`,
                icon: <BookOutlined />
            },
            {
                name: "Objective Results",
                route: `/results/edu-objective`,
                icon: <OrderedListOutlined />
            }
        ]
    }
];
