import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Statistic from "antd/lib/statistic";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
const { Content } = Layout;

const Home = () => {
    return (
        <Dashboardlayout title="Dashboard">
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title="Dashboard"
                        subTitle="Site Stats"
                    ></PageHeader>
                </div>

                <Row gutter={[16,16]}>
                    <Col xs={24} md={12} lg={8}>
                        <Card>
                            <Statistic title="Organizations" value={11} />
                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Card>
                            <Statistic title="Environs" value={9} />
                        </Card>
                    </Col>
                    <Col xs={24} md={12} lg={8}>
                        <Card>
                            <Statistic title="Classrooms" value={9} />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </Dashboardlayout>
    );
};
export default Home;
