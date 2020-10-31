import React, { useState } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Stats from "./stats";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
const { Content } = Layout;

const Home = ({ user }) => {
    const [recent, setRecent] = useState(false);
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

                <Row gutter={[16, 16]}>
                    {recent && (
                        <Col xs={24}>
                            <Card>
                                <h3>Welcome to at-School!</h3>
                                <p>
                                    If you are seeing this, then you recently
                                    setup your at-School account.
                                </p>
                                <p>
                                    As you progress, all your activities will be
                                    summarised here, so you can always have a
                                    quick look at your stats
                                    <span aria-label="welcome smile" role="img">
                                        😁
                                    </span>
                                </p>
                            </Card>
                        </Col>
                    )}
                    <Stats user={user} recent={setRecent} />
                </Row>
            </Content>
        </Dashboardlayout>
    );
};
export default Home;
