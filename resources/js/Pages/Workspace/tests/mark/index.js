import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
const { Content } = Layout;
import Submissions from "./submissions";

const Mark = props => {
    return (
        <Workspacelayout
            title={`Mark Test - ${props.classroom.name}`}
            classroom={props.classroom}
        >
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title={props.test.title}
                        subTitle="Student Submissions"
                    ></PageHeader>
                </div>
                <Submissions {...props} />
            </Content>
        </Workspacelayout>
    );
};
export default Mark;
