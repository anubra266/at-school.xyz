import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import { usePage } from "@inertiajs/inertia-react";

import SiteLayout from "@/Pages/SiteLayout";
import { trans_roles } from "@/Helpers/Translate.js";

import Organization from "./Organization";

const { Content } = Layout;
const RegisterF = () => {
    const { auth } = usePage();
    const role = auth.user.initial_role;
    const trans_role = trans_roles(role);
    return (
        <SiteLayout title={trans_role[1]} noSidebar={true}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Finish Registration"
                        subTitle={trans_role[1]}
                    ></PageHeader>
                </div>
                {role === "organization_admin" && <Organization />}
            </Content>
        </SiteLayout>
    );
};

export default RegisterF;
