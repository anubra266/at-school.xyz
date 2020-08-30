import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";
import Auth from "@/Helpers/Auth";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Educator from "./Educator";
import EduTheoryForm from "./EduTheoryForm";
const { Content } = Layout;

const Theory = ({ classroom, tests }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        title: "",
        start_time: "",
        deadline: "",
        total_score: ""
    });
    const TestForm = useRef(null);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const handleChange = e => {
        Auth.handleChange(e, setData);
    };
    const after = () => {
        TestForm.current.resetFields();
        setVisible(false);
    };
    const onFinish = () => {
        Auth.handleSubmit(
            "theory.create",
            setLoading,
            data,
            { classroom: classroom.hash },
            after
        );
    };
    const testProps = { classroom, tests, showDrawer };
    const formProps = { loading, TestForm, onFinish, handleChange };
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
