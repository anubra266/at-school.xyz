import React from "react";
import SiteLayout from "@/Pages/SiteLayout";
import Routes from "./WorkspaceRoutes";
const WorkspaceLayout = ({ title, classroom, children }) => {
    return (
        <SiteLayout
            routes={Routes}
            title={title}
            layout={`/classroom/${classroom.hash}`}
            classroom={classroom}
        >
            {children}
        </SiteLayout>
    );
};

export default WorkspaceLayout;
