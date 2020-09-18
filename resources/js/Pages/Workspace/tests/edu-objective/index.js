import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import List from "./List";
import EduObjForm from "./EduObjForm";
const { Content } = Layout;
import Main from "@/Helpers/Main";

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
        <Workspacelayout title={classroom.name} classroom={classroom}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
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