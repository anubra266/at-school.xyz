import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Card from "antd/lib/card";
import Divider from "antd/lib/divider";
import Row from "antd/lib/row";
import Button from "antd/lib/button";
import Col from "antd/lib/col";
import ClassForm from "@/Pages/Dashboard/class/ClassForm";

import SetRoleLayout from "@/Pages/AccountSetup/SetRoleLayout";
const { Content } = Layout;

const Student = () => {
    const [loading, setLoading] = useState(false);

    const onFinish = data => {
        setLoading(true);
        Inertia.post(route("account.cls"), data).then(() => setLoading(false));
    };
    return (
        <SetRoleLayout title="Student - Setup Account">
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title="Finish Setup"
                        subTitle="Join Classroom or Practice Questions"
                    ></PageHeader>
                </div>

                <Row gutter={[0, { xs: 16 }]} justify="space-around">
                    <Col xs={20} md={10} lg={7}>
                        <Card>
                            <Divider orientation="left">
                                <strong>Join Classroom</strong>
                            </Divider>
                            <ClassForm loading={loading} onFinish={onFinish} />
                        </Card>
                    </Col>
                    <Col xs={20} md={10} lg={7}>
                        <Card>
                            <Divider orientation="right">
                                <strong>Practice Questions</strong>
                            </Divider>
                            <InertiaLink
                                href={route("account.prc")}
                                method="post"
                            >
                                <Button
                                    type="primary"
                                    size="large"
                                    shape="round"
                                >
                                    Continue
                                </Button>
                            </InertiaLink>
                        </Card>
                    </Col>
                </Row>
            </Content>
        </SetRoleLayout>
    );
};
export default Student;
