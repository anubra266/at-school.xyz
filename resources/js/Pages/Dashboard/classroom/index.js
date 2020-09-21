import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import Header from "./Header";
import Layout from "antd/lib/layout";
import Empty from "antd/lib/empty";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import ClassroomForm from "./ClassroomForm";
import ClassroomsList from "./ClassroomsList";

const Classroom = ({ classrooms }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const CrmForm = useRef(null);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const { flash } = usePage();
    const onFinish = data => {
        setLoading(true);
        Inertia.post(route("classroom.create"), data).then(res => {
            setLoading(false);
            CrmForm.current.resetFields();
            setVisible(false);
        });
    };
    const formProps = { loading, onFinish, CrmForm };
    return (
        <Dashboardlayout title="Classrooms">
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header showDrawer={showDrawer} />
                <Card>
                    <ClassroomsList classrooms={classrooms} />
                    {classrooms.length === 0 && (
                        <Empty description={<span>No Classrooms found!</span>}>
                            <Button onClick={showDrawer} type="primary">
                                Create Classroom
                            </Button>
                        </Empty>
                    )}
                </Card>
                <Drawer
                    title="Create New Classroom"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <ClassroomForm edit={false} {...formProps} />
                </Drawer>
            </Layout.Content>
        </Dashboardlayout>
    );
};
export default Classroom;
