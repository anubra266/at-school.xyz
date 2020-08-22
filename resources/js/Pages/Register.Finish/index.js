import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import SiteLayout from "@/Pages/SiteLayout";
import { usePage } from "@inertiajs/inertia-react";
import { trans_roles } from "@/Helpers/Translate.js";

const { Content } = Layout;
const Register = () => {
    const { auth } = usePage();
    const trans_role = trans_roles(auth.user.initial_role);
    return (
        <SiteLayout title={trans_role[1]} noSidebar={true}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Finish Registration"
                        subTitle={trans_role[0]}
                    ></PageHeader>  
                </div>
            </Content>
        </SiteLayout>
    );
};

export default Register;
