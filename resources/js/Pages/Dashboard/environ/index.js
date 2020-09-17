import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import Header from "./Header";
import Layout from "antd/lib/layout";
import Empty from "antd/lib/empty";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Drawer from "antd/lib/drawer";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import EnvironForm from "./EnvironForm";
import EnvironsList from "./EnvironsList";

const Environ = ({ environs }) => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const { flash } = usePage();
    const EnvForm = useRef(null);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const onFinish = data => {
        setLoading(true);
        Inertia.post(route("environ.create"), data).then(res => {
            setLoading(false);
            EnvForm.current.resetFields();
            setVisible(false);
        });
    };
    const formProps = { loading, onFinish, EnvForm };
    return (
        <Dashboardlayout title="Environs">
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header showDrawer={showDrawer} />
                <Card>
                    <EnvironsList environs={environs} />
                    {environs.length === 0 && (
                        <Empty description={<span>No Environs found!</span>}>
                            <Button onClick={showDrawer} type="primary">
                                Create Environ
                            </Button>
                        </Empty>
                    )}
                </Card>
                <Drawer
                    title="Create New Environ"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <EnvironForm edit={false} {...formProps} />
                </Drawer>
            </Layout.Content>
        </Dashboardlayout>
    );
};
export default Environ;
