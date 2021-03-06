import React, { useState } from "react";
import Layout from "antd/lib/layout";
import Halllayout from "@/Pages/ExamHall/HallLayout/";
import TestEditor from "@/Shared/editor";
import Modal from "antd/lib/modal";
import ExclamationCircleOutlined from "@ant-design/icons/ExclamationCircleOutlined";

import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

import "react-reflex/styles.css";

import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Inertia } from "@inertiajs/inertia";
const { Content } = Layout;
const parse = require("html-react-parser");
const Index = props => {
    const { classroom, test } = props;
    const { questions } = test;
    const { answers } = test;
    const answer = answers[0];
    const data = answer && answer.answer;
    const [editor, setEditor] = useState(null);
    const [loading, setLoading] = useState(false);
    const editorProps = {
        data,
        setEditor
    };
    const confirm_submit = () => {
        Modal.confirm({
            title: "Are you sure, you want to Submit?",
            content: `This test is ${test.total_score} marks`,
            icon: <ExclamationCircleOutlined />,
            centered: true,
            okText: "Submit",
            onOk() {
                submitTest();
            }
        });
    };
    const submitTest = () => {
        setLoading(true);
        const formParams = { classroom: classroom.hash, test: test.id };
        const formData = {
            answer: editor.getData() || " ",
            id: answer && answer.id
        };
        Inertia.post(route("theory.answer", formParams), formData).then(() => {
            setLoading(false);
            test.duration && Inertia.visit(`/classroom/${classroom.hash}`);
        });
    };
    const layoutProps = { submitTest, confirm_submit };
    return (
        <Halllayout {...layoutProps} {...props}>
            <Content style={{ margin: "15px 16px", height: "100%" }}>
                <ReflexContainer orientation="horizontal">
                    <ReflexElement minSize={10}>
                        <Card>
                            {questions.map((question, index, arr) => {
                                return (
                                    <React.Fragment key={`question-${index}`}>
                                        <strong>
                                            Question{" "}
                                            {arr.length > 1 && index + 1}
                                        </strong>
                                        {parse(question.question)}
                                    </React.Fragment>
                                );
                            })}
                        </Card>
                    </ReflexElement>

                    <ReflexSplitter />

                    <ReflexElement minSize={10}>
                        <Row gutter={[0, 14]}>
                            <Col>
                                <strong>Enter Solution here</strong>
                            </Col>
                            <Col xs={24}>
                                <TestEditor {...editorProps} />
                            </Col>
                            <Col>
                                <Button
                                    loading={loading}
                                    onClick={confirm_submit}
                                    type="primary"
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </ReflexElement>
                </ReflexContainer>
            </Content>
        </Halllayout>
    );
};
export default Index;
