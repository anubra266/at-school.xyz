import React, { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Pagination from "antd/lib/pagination";
import Space from "antd/lib/space";
import PopConfirm from "antd/lib/popconfirm";

import TestEditor from "@/Shared/editor";

import Options from "./options";

const test = ({
    test,
    PTesti,
    loading,
    currentQuestion,
    setCurrentQuestion,
    questions,
    deletequestion
}) => {
    const [editor, setEditor] = useState(null);

    var question = questions[currentQuestion];
    var is_new = currentQuestion === questions.length;

    const savequestion = () => {
        PTesti.savequestion(editor, is_new, test);
    };

    var data = is_new ? "" : question && question.question;
    const editorProps = {
        data,
        setEditor
    };

    const optionProps = { currentQuestion, question, PTesti, loading };
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
