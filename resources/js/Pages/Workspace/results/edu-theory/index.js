import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
const { Content } = Layout;

const Results = ({ classroom, tests }) => {
    return (
        <Workspacelayout
            title={`Theory Results - ${classroom.name}`}
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
                        title="Theory Results"
                        subTitle={classroom.name}
                    ></PageHeader>
                </div>
            </Content>
        </Workspacelayout>
    );
};
export default Results;
