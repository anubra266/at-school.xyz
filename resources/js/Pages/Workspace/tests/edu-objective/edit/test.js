import React, { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Pagination from "antd/lib/pagination";
import Space from "antd/lib/space";
import PopConfirm from "antd/lib/popconfirm";

import TestEditor from "@/Pages/Workspace/tests/editor";

import Options from "./options";
import PTest from "@/Helpers/PostTest";

const test = ({ test, classroom }) => {
    const [editor, setEditor] = useState(null);
    const [loading, setLoading] = useState(false);

    const { questions } = test;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    var question = questions[currentQuestion];
    var is_new = currentQuestion === questions.length;

    const PTesti = new PTest(setLoading, classroom, question, "objective");

    const savequestion = () => {
        PTesti.savequestion(editor, is_new, test);
    };

    const deletequestion = () => {
        PTesti.deletequestion();
    };

    const optionProps = { currentQuestion, question, PTesti, loading };
    const editorProps = {
        is_new,
        question,
        setEditor
    };

    return (
        <React.Fragment>
            <Row gutter={[30, 0]}>
                <Col md={is_new ? 24 : 12}>
                    <Row justify="end" gutter={[0, 14]}>
                        <Col xs={24}>
                            <strong>
                                {currentQuestion + 1}.{" "}
                                {is_new
                                    ? "Enter New Question here"
                                    : "Edit Question"}
                                :
                            </strong>
                        </Col>
                        <Col xs={24}>
                            <TestEditor {...editorProps} />
                        </Col>
                        <Col>
                            <Space>
                                {!is_new && (
                                    <PopConfirm
                                        placement="top"
                                        title={`Delete Question ${currentQuestion +
                                            1}?`}
                                        onConfirm={deletequestion}
                                        trigger="click"
                                        okText="Delete"
                                        okType="danger"
                                    >
                                        <Button
                                            danger
                                            type="primary"
                                            loading={loading}
                                        >
                                            Delete Question
                                        </Button>
                                    </PopConfirm>
                                )}
                                <Button
                                    type="primary"
                                    loading={loading}
                                    onClick={savequestion}
                                >
                                    {is_new ? "Add Question" : "Save Question"}
                                </Button>
                            </Space>
                        </Col>
                    </Row>
                </Col>
                {question && (
                    <Col md={12}>
                        <Options {...optionProps} />
                    </Col>
                )}
            </Row>

            <Pagination
                current={currentQuestion + 1}
                pageSize={1}
                total={questions.length + 1}
                showQuickJumper
                showTotal={total =>
                    `${questions.length} question${
                        questions.length !== 1 ? "s" : ""
                    }`
                }
                onChange={page => {
                    setCurrentQuestion(page - 1);
                }}
            />
        </React.Fragment>
    );
};

export default test;
