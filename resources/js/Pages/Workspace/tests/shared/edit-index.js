import React from "react";
import Layout from "antd/lib/layout";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Header from "./edit-header";
const Edit = ({ classroom, test, Test }) => {
    return (
        <Workspacelayout
            title={`Edit ${test.title} - ${classroom.name}`}
            classroom={classroom}
        >
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header {...{ test, classroom }} />
                <Test {...{ test, classroom }} />
            </Layout.Content>
        </Workspacelayout>
    );
};
export default Edit;
