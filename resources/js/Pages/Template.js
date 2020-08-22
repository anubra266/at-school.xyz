import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import SiteLayout from "@/Pages/SiteLayout";

const { Content } = Layout;

export default () => {
    return (
        <SiteLayout title="Home">
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
        </SiteLayout>
    );
};
