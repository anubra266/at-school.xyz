import React, { useEffect } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Page from "./Page";
import Main from "@/Helpers/Main";
import { Inertia } from "@inertiajs/inertia";
const { Content } = Layout;

const Index = props => {
    const { classroom, type } = props;
    const refresh = () => {
        Inertia.reload();
    };
    const refreshTime = 5000;
    useEffect(() => {
        const refresher = setInterval(refresh, refreshTime);
        return () => {
            clearInterval(refresher);
        };
    }, []);

    return (
        <Workspacelayout
            title={`Assessments - ${classroom.name}`}
            classroom={classroom}
        >
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title={`${Main.fCap(type)} Assessments`}
                        subTitle={classroom.name}
                    ></PageHeader>
                </div>

                <Page {...props} />
            </Content>
        </Workspacelayout>
    );
};
export default Index;
