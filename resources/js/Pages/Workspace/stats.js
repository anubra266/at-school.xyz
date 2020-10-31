import React from "react";
import Statistic from "antd/lib/statistic";
import Card from "antd/lib/card";
import Col from "antd/lib/col";
import TeamOutlined from "@ant-design/icons/TeamOutlined";
import BookOutlined from "@ant-design/icons/BookOutlined";
import OrderedListOutlined from "@ant-design/icons/OrderedListOutlined";

const Stats = ({ classroom }) => {
    const stats = [
        {
            title: "Students",
            key: "students",
            icon: <TeamOutlined />
        },
        {
            title: "Theory Tests",
            key: "theory_tests",
            icon: <BookOutlined />
        },
        {
            title: "Objective Tests",
            key: "objective_tests",
            icon: <OrderedListOutlined />
        }
    ];
    return (
        <React.Fragment>
            {stats.map(stat => (
                <Col key={stat.key} xs={24} md={12} lg={8}>
                    <Card>
                        <Statistic
                            title={stat.title}
                            value={classroom[`${stat.key}`].length}
                            prefix={stat.icon}
                        />
                    </Card>
                </Col>
            ))}
        </React.Fragment>
    );
};

export default Stats;
