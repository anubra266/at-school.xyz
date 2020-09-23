import React from "react";
import SiteLayout from "@/Pages/SiteLayout";

const DashboardLayout = ({ title, children }) => {
    return (
        <SiteLayout noSidebar={true} title={title} layout="">
            {children}
        </SiteLayout>
    );
};

export default DashboardLayout;
