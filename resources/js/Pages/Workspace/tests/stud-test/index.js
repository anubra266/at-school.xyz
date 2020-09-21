import React, { useEffect } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Page from "./Page";
import Main from "@/Helpers/Main";
const { Content } = Layout;
import { useSmoothRefresh } from "@/Helpers/useRefresh";

const Index = props => {
    const { classroom, type } = props;
    useSmoothRefresh(5000);

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
