import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Drawer from "antd/lib/drawer";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Student from "./educator";
import EduTheoryForm from "./EduTheoryForm";
const { Content } = Layout;

const Theory = ({ classroom, tests }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        title: "",
        start_time: "",
        deadline: "",
    });
    const TestForm = useRef(null);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const handleChange = e => {
        const key = e.target.name;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [key]: value
        }));
    };
    const onFinish = () => {
        setLoading(true);
        Inertia.post(
            route("theory.create", { classroom: classroom.hash }),
            data
        ).then(res => {
            setLoading(false);
            TestForm.current.resetFields();
            setVisible(false);
        });
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

                <Student {...testProps} />
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
