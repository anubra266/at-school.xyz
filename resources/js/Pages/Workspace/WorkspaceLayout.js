import React from "react";
import Layout from "antd/lib/layout";
import SiteLayout from "@/Pages/SiteLayout";
import Routes from "./Routes";

const DashboardLayout = ({ title, classroom, children }) => {
    return (
        <SiteLayout routes={Routes.routes(classroom)} title={title}>
            {children}
        </SiteLayout>
    );
};

export default DashboardLayout;
