import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@diasraphael/ck-editor5-base64uploadadapter";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Pagination from "antd/lib/pagination";
import Space from "antd/lib/space";

const test = ({ test, classroom }) => {
    const testProps = { classroom: classroom.hash, test: test.id };
    const [loading, setLoading] = useState(false);
    const { questions } = test;
    const [editor, setEditor] = useState();
    // const [questions, setQuestions] = useState(() => {
    //     return test.questions.reduce((acc, nxt) => {
    //         acc.push({ question: nxt.question });
    //         return acc;
    //     }, []);
    // });
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const savequestion = () => {
        setLoading(true);
        var data = { question: editor.getData() };
        if (is_new) {
            //? if it's a new question then create
            Inertia.post(
                route("theory.question.create", testProps),
                data
            ).then(() => setLoading(false));
        } else {
            //? if not update the previous question
            data.id = questions[currentQuestion].id;
            Inertia.patch(
                route("theory.question.update", testProps),
                data
            ).then(() => setLoading(false));
        }
    };
    var is_new = currentQuestion === test.questions.length;
    return (
        <React.Fragment>
            <Row justify="end" gutter={[0, 14]}>
                <Col xs={24}>
                    <strong>
                        {currentQuestion + 1}.{" "}
                        {is_new ? "Enter New Question here" : "Edit Question"}:
                    </strong>
                </Col>
                <Col xs={24}>
                    <CKEditor
                        editor={ClassicEditor}
                        data={
                            !is_new ? questions[currentQuestion].question : ""
                        }
                        onInit={editor => {
                            setEditor(editor);
                        }}
                        onChange={(event, editor) => {
                            //is_new && setNewQuestion(editor.getData());
                        }}
                    />
                </Col>
                <Col>
                    <Space>
                        {!is_new && (
                            <Button
                                danger
                                type="primary"
                                loading={loading}
                                onClick={savequestion}
                            >
                                Delete Question
                            </Button>
                        )}
                        <Button
                            type="primary"
                            loading={loading}
                            onClick={savequestion}
                        >
                            {currentQuestion === test.questions.length
                                ? "Add Question"
                                : "Save Question"}
                        </Button>
                    </Space>
                </Col>
            </Row>

            <Pagination
                current={currentQuestion + 1}
                pageSize={1}
                total={test.questions.length + 1}
                showQuickJumper
                showTotal={total =>
                    `${test.questions.length} question${
                        test.questions.length !== 1 ? "s" : ""
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
