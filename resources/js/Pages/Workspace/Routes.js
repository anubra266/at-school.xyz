import React from "react";

import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";

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
                route: `classroom/${classroom}`,
                action: "classroom_home",
                icon: <PieChartOutlined />
            }
        ];
    }
}
export default new Routes();
