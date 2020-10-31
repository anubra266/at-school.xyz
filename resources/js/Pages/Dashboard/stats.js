import React from "react";
import Statistic from "antd/lib/statistic";
import Card from "antd/lib/card";
import Col from "antd/lib/col";
import BankOutlined from "@ant-design/icons/BankOutlined";
import ApartmentOutlined from "@ant-design/icons/ApartmentOutlined";
import DeploymentUnitOutlined from "@ant-design/icons/DeploymentUnitOutlined";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import BookOutlined from "@ant-design/icons/BookOutlined";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";

const Stats = ({ user }) => {
    console.log("user", user);
    const stats = [
        {
            title: "Organizations",
            key: "organizations",
            icon: <BankOutlined />
        },
        {
            title: "Environs",
            key: "environs",
            icon: <ApartmentOutlined />
        },
        {
            title: "Classrooms Created",
            key: "classrooms",
            icon: <DeploymentUnitOutlined />
        },
        {
            title: "Classes Joined",
            key: "classes",
            icon: <TeamOutlined />
        },
        {
            title: "Theory Tests",
            key: "theory_results",
            icon: <BookOutlined />
        },
        {
            title: "Objective Tests",
            key: "objective_results",
            icon: <OrderedListOutlined />
        },
        {
            title: "Practice Tests",
            key: "practice_results",
            icon: <EditOutlined />
        }
    ];
    return (
        <React.Fragment>
            {stats.map(stat => (
                <Col key={stat.key} xs={24} md={12} lg={8}>
                    <Card>
                        <Statistic
                            title={stat.title}
                            value={user[`${stat.key}_count`]}
                            prefix={stat.icon}
                        />
                    </Card>
                </Col>
            ))}
        </React.Fragment>
    );
};

export default Stats;
