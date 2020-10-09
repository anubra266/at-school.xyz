import React, { useState } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Card from "antd/lib/card";
import SetRoleLayout from "@/Pages/AccountSetup/SetRoleLayout";
const { Content } = Layout;
import OrganizationForm from "@/Pages/Dashboard/organization/OrganizationForm";
import { Inertia } from "@inertiajs/inertia";

const OrganizationAdmin = () => {
    const [loading, setLoading] = useState(false);
    const onFinish = data => {
        setLoading(true);
        Inertia.post(route("account.org"), data).then(() => setLoading(false));
    };

    return (
        <SetRoleLayout title="Organization Admin - Setup Account">
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title="Finish Setup"
                        subTitle="Create Organization"
                    ></PageHeader>
                    <Card>
                        <OrganizationForm
                            loading={loading}
                            onFinish={onFinish}
                        />
                    </Card>
                </div>
            </Content>
        </SetRoleLayout>
    );
};
export default OrganizationAdmin;
