import React from "react";

import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import UserSwitchOutlined from "@ant-design/icons/UserSwitchOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import BookOutlined from "@ant-design/icons/BookOutlined";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";

class Routes {
    routes(classroom) {
        return [
            {
                name: "Dashboard",
                route: "/home",
                action: "home",
                icon: <DoubleLeftOutlined />
            },
            {
                name: "Home",
                route: `/classroom/${classroom}`,
                action: "classroom_home",
                icon: <PieChartOutlined />
            },
            {
                name: "Members",
                route: `/classroom/${classroom}/members`,
                action: "view_classroom_members",
                icon: <UserSwitchOutlined />
            },
            {
                name: "Assessments",
                action: "view_tests",
                icon: <EditOutlined />,
                items: [
                    {
                        name: "Theory",
                        route: "/settings/profile",
                        icon: <BookOutlined />
                    },
                    {
                        name: "Objective",
                        route: "/settings/theme",
                        icon: <OrderedListOutlined />
                    }
                ]
            }
        ];
    }
}
export default new Routes();
