import React, { useState } from "react";
import Layout from "antd/lib/layout";
import Halllayout from "@/Pages/ExamHall/HallLayout/";
import TestEditor from "@/Shared/editor";

import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

import "react-reflex/styles.css";

import Button from "antd/lib/button";
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
    const submitTest = () => {
        setLoading(true);
        const formParams = { classroom: classroom.hash, test: test.id };
        const formData = { answer: editor.getData(), id: answer && answer.id };
        Inertia.post(route("theory.answer", formParams), formData).then(() =>
            setLoading(false)
        );
    };
    return (
        <Halllayout {...props}>
            <Content style={{ margin: "15px 16px", height: "100%" }}>
                <ReflexContainer orientation="horizontal">
                    <ReflexElement minSize={10}>
                        {questions.map((question, index) => {
                            return (
                                <React.Fragment key={`question-${index}`}>
                                    <strong>Question {index + 1}</strong>
                                    {parse(question.question)}
                                </React.Fragment>
                            );
                        })}
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
                                    onClick={submitTest}
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
