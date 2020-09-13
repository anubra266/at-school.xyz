import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Statistic from "antd/lib/statistic";
import Halllayout from "@/Pages/ExamHall/HallLayout/";
const { Content } = Layout;

const Index = ({ classroom, test }) => {
    return (
        <Halllayout title={classroom.name} classroom={classroom}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title={test.title}
                        subTitle={classroom.name}
                        extra={[
                            <Button disabled key="2">
                                <Statistic.Countdown
                                    prefix="Time-Left:"
                                    valueStyle={{ fontSize: 14 }}
                                    value={test.deadline}
                                />
                            </Button>,
                            <Button key="1" type="primary">
                                Primary
                            </Button>
                        ]}
                    ></PageHeader>
                </div>
            </Content>
        </Halllayout>
    );
};
export default Index;
