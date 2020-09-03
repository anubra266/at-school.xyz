import React from "react";
import Layout from "antd/lib/layout";
import Button from "antd/lib/button";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@diasraphael/ck-editor5-base64uploadadapter";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Header from "./header";
const Edit = ({ classroom, test }) => {
    return (
        <Workspacelayout
            title={`Edit ${test.title} - ${classroom.name}`}
            classroom={classroom}
        >
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header {...{ test }} />

                <Row justify="end" gutter={[0, 14]}>
                    <Col xs={24}>
                        <strong>Insert Questions here:</strong>
                    </Col>
                    <Col xs={24}>
                        <CKEditor editor={ClassicEditor} />
                    </Col>
                    <Col>
                        <Button type="primary">Save</Button>
                    </Col>
                </Row>
            </Layout.Content>
        </Workspacelayout>
    );
};
export default Edit;
