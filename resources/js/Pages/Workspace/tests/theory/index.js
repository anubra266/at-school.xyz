import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Student from "./student";

const { Content } = Layout;

const Theory = ({ classroom, tests = [""] }) => {
    const testProps = { classroom, tests };
    return (
        <Workspacelayout title={classroom.name} classroom={classroom.hash}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader 
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Theory Assessments"
                        subTitle={classroom.name}
                        extra={[
                            <Button key="1" type="primary">
                                New Test
                            </Button>
                        ]}
                    ></PageHeader>
                </div>

                <Student {...testProps} />
            </Content>
        </Workspacelayout>
    );
};
export default Theory;
