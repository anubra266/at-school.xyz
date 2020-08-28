import React from "react";

import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import UserSwitchOutlined from "@ant-design/icons/UserSwitchOutlined";

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
            }
        ];
    }
}
export default new Routes();
