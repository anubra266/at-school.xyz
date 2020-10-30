import React from "react";
import Statistic from "antd/lib/statistic";
import Card from "antd/lib/card";
import Col from "antd/lib/col";
import BankOutlined from "@ant-design/icons/BankOutlined";
import ApartmentOutlined from "@ant-design/icons/ApartmentOutlined";
import DeploymentUnitOutlined from "@ant-design/icons/DeploymentUnitOutlined";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";

const Stats = () => {
    return (
        <React.Fragment>
            <Col xs={24} md={12} lg={8}>
                <Card>
                    <Statistic
                        title="Organizations"
                        value={11}
                        prefix={<BankOutlined />}
                    />
                </Card>
            </Col>
            <Col xs={24} md={12} lg={8}>
                <Card>
                    <Statistic
                        title="Environs"
                        value={9}
                        prefix={<ApartmentOutlined />}
                    />
                </Card>
            </Col>
            <Col xs={24} md={12} lg={8}>
                <Card>
                    <Statistic
                        title="Classrooms"
                        value={9}
                        prefix={<DeploymentUnitOutlined />}
                    />
                </Card>
            </Col>{" "}
            <Col xs={24} md={12} lg={8}>
                <Card>
                    <Statistic
                        title="Classes"
                        value={9}
                        prefix={<TeamOutlined />}
                    />
                </Card>
            </Col>
        </React.Fragment>
    );
};

export default Stats;
