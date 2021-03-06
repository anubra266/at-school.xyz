import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Header from "./Header";
import Layout from "antd/lib/layout";
import Drawer from "antd/lib/drawer";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Empty from "antd/lib/empty";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import OrganizationForm from "./OrganizationForm";
import OrganizationsList from "./OrganizationsList";

const Organization = ({ organizations }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const OrgForm = useRef(null);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const onFinish = data => {
        setLoading(true);
        Inertia.post(route("organization.create"), data).then(res => {
            setLoading(false);
            OrgForm.current.resetFields();
            setVisible(false);
        });
    };
    const formProps = { loading, onFinish, OrgForm };
    return (
        <Dashboardlayout title="Organizations">
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header showDrawer={showDrawer} />
                <Card>
                    <OrganizationsList organizations={organizations} />
                    {organizations.length === 0 && (
                        <Empty
                            description={<span>No Organizations found!</span>}
                        >
                            <Button onClick={showDrawer} type="primary">
                                Create Organization
                            </Button>
                        </Empty>
                    )}
                </Card>

                <Drawer
                    title="Create New Organization"
                    placement="right"
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                >
                    <OrganizationForm {...formProps} />
                </Drawer>
            </Layout.Content>
        </Dashboardlayout>
    );
};
export default Organization;
