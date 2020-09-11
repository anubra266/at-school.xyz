import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Header from "./Header";
import Layout from "antd/lib/layout";
import Empty from "antd/lib/empty";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import ClassForm from "./ClassForm";
import ClassesList from "./ClassesList";

const DClass = ({ classes }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const ClsForm = useRef(null);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const onFinish = data => {
        setLoading(true);
        Inertia.post(route("class.join"), data).then(res => {
            setLoading(false);
            ClsForm.current.resetFields();
            setVisible(false);
        });
    };
    const formProps = { loading, onFinish, ClsForm };
    return (
        <Dashboardlayout title="Classes">
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header showDrawer={showDrawer} />
                <ClassesList classes={classes} />
                {classes.length === 0 && (
                    <Empty description={<span>No Classes found!</span>}>
                        <Button onClick={showDrawer} type="primary">
                            Join Classroom
                        </Button>
                    </Empty>
                )}
                <Drawer
                    title="Join New Classroom"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <ClassForm {...formProps} />
                </Drawer>
            </Layout.Content>
        </Dashboardlayout>
    );
};
export default DClass;
