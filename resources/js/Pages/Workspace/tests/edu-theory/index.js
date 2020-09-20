import React, { useState, useRef } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import List from "./List";
import EduTheoryForm from "./EduTheoryForm";
const { Content } = Layout;

const Theory = ({ classroom, tests }) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const testProps = { classroom, tests, showDrawer };
    return (
        <Workspacelayout title={classroom.name} classroom={classroom}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Theory Assessments"
                        subTitle={classroom.name}
                        extra={[
                            <Button key="1" type="primary" onClick={showDrawer}>
                                New Test
                            </Button>
                        ]}
                    ></PageHeader>
                </div>

                <List {...testProps} />
                <Drawer
                    title="Create New Theory Assessment"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <EduTheoryForm edit={false} classroom={classroom} />
                </Drawer>
            </Content>
        </Workspacelayout>
    );
};
export default Theory;
