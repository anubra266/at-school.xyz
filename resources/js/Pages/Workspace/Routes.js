import React from "react";

import PieChartOutlined from "@ant-design/icons/PieChartOutlined";
import BankOutlined from "@ant-design/icons/BankOutlined";
import ApartmentOutlined from "@ant-design/icons/ApartmentOutlined";
import DeploymentUnitOutlined from "@ant-design/icons/DeploymentUnitOutlined";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import UserOutlined from "@ant-design/icons/UserOutlined";
import HighlightOutlined from "@ant-design/icons/HighlightOutlined";

class Routes {
    routes(classroom) {
        return [
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
