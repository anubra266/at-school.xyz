import React, { useState, useRef } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import List from "./List";
import EduObjForm from "./EduObjForm";
const { Content } = Layout;

const Objective = ({ classroom, tests }) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    const testProps = { classroom, tests, showDrawer };
    return (
        <Workspacelayout
            title={`Objective Assessments - ${classroom.name}`}
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
                        title="Objective Assessments"
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
                    title="Create New Objective Assessment"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <EduObjForm edit={false} classroom={classroom} />
                </Drawer>
            </Content>
        </Workspacelayout>
    );
};
export default Objective;
