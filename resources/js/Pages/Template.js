import React from "react";
import LoginLayout from "@/Pages/LoginLayout";
import { Layout, PageHeader, Button, Descriptions } from "antd";
const { Content } = Layout;

export default () => {
    return (
        <LoginLayout title="Home">
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Title"
                        subTitle="This is a subtitle"
                        extra={[
                            <Button key="3">Operation</Button>,
                            <Button key="2">Operation</Button>,
                            <Button key="1" type="primary">
                                Primary
                            </Button>
                        ]}
                    ></PageHeader>
                </div>
            </Content>
        </LoginLayout>
    );
};
