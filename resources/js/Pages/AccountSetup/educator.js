import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Card from "antd/lib/card";
import Divider from "antd/lib/divider";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import EnvironForm from "@/Pages/Dashboard/environ/EnvironForm";
import ClassroomForm from "@/Pages/Dashboard/classroom/ClassroomForm";

import SetRoleLayout from "@/Pages/AccountSetup/SetRoleLayout";
const { Content } = Layout;

const Educator = () => {
    const [loading, setLoading] = useState(false);

    const onFinishEnv = data => {
        setLoading(true);
        Inertia.post(route("account.env"), data).then(() => setLoading(false));
    };
    const onFinishCrm = data => {
        setLoading(true);
        Inertia.post(route("account.crm"), data).then(() => setLoading(false));
    };
    return (
        <SetRoleLayout title="Educator - Setup Account">
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title="Finish Setup"
                        subTitle="Join Organization"
                    ></PageHeader>
                </div>

                <Row gutter={[0, { xs: 16 }]} justify="space-around">
                    <Col xs={20} md={10} lg={7}>
                        <Card>
                            <Divider orientation="left">
                                <strong>Create Classroom</strong>
                            </Divider>
                            <ClassroomForm
                                loading={loading}
                                onFinish={onFinishCrm}
                            />
                        </Card>
                    </Col>
                    <Col xs={20} md={10} lg={7}>
                        <Card>
                            <Divider orientation="right">
                                <strong>Create Environ</strong>
                            </Divider>
                            <EnvironForm
                                loading={loading}
                                onFinish={onFinishEnv}
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>
        </SetRoleLayout>
    );
};
export default Educator;
