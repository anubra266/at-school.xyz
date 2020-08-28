import React from "react";
import SiteLayout from "@/Pages/SiteLayout";
import routes from "./routes";

const DashboardLayout = ({ title, children }) => {
    return (
        <SiteLayout routes={routes} title={title} layout="">
            {children}
        </SiteLayout>
    );
};

export default DashboardLayout;
