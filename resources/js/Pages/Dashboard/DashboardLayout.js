import React from "react";
import Layout from "antd/lib/layout";
import SiteLayout from "@/Pages/SiteLayout";
import routes from "./routes";

const DashboardLayout = ({ title, children }) => {
    return (
        <SiteLayout routes={routes} title={title}>
            {children}
        </SiteLayout>
    );
};

export default DashboardLayout;
