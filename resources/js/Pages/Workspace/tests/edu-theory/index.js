import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Educator from "./Educator";
import EduTheoryForm from "./EduTheoryForm";
const { Content } = Layout;
import Main from "@/Helpers/Main";

const Theory = ({ classroom, tests }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const TestForm = useRef(null);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const after = () => {
        TestForm.current.resetFields();
        setVisible(false);
    };
    const onFinish = data => {
        data.start_time = Main.laradate(data.period[0]._d);
        data.deadline = Main.laradate(data.period[1]._d);
        setLoading(true);
        Inertia.post(
            route("theory.create", { classroom: classroom.hash }),
            data
        ).then(() => {
            setLoading(false);
            after();
        });
    };
    const testProps = { classroom, tests, showDrawer };
    const formProps = { loading, TestForm, onFinish };
    return (
        <Workspacelayout title={classroom.name} classroom={classroom}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Theory Assessments"
                        subTitle={classroom.name}
                        extra={[
                            <Button key="1" type="primary" onClick={showDrawer}>
                                New Test
                            </Button>
                        ]}
                    ></PageHeader>
                </div>

                <Educator {...testProps} />
                <Drawer
                    title="Create New Theory Assessment"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <EduTheoryForm edit={false} {...formProps} />
                </Drawer>
            </Content>
        </Workspacelayout>
    );
};
export default Theory;
