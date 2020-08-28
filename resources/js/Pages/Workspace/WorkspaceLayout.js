import React from "react";
import SiteLayout from "@/Pages/SiteLayout";
import Routes from "./Routes";

const DashboardLayout = ({ title, classroom, children }) => {
    return (
        <SiteLayout
            routes={Routes}
            title={title}
            layout={`/classroom/${classroom}`}
        >
            {children}
        </SiteLayout>
    );
};

export default DashboardLayout;
