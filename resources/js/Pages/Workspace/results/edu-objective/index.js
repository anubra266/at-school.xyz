import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
const { Content } = Layout;
import Results from "../list";

const Index = props => {
    const { classroom, tests } = props;
    return (
        <Workspacelayout
            title={`Objective Results - ${classroom.name}`}
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
                        title="Objective Results"
                        subTitle={classroom.name}
                    ></PageHeader>
                </div>
                <Results {...props} />
            </Content>
        </Workspacelayout>
    );
};
export default Index;
