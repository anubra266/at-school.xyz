import React, { forwardRef, useState } from "react";
import Drawer from "antd/lib/drawer";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import InputNumber from "antd/lib/input-number";
import Input from "antd/lib/input";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import { useToggle } from "react-use";
import { useExpose } from "@/Helpers/useExpose";
import Main from "@/Helpers/Main";
import Form from "antd/lib/form";
import { Inertia } from "@inertiajs/inertia";
const parse = require("html-react-parser");
const Answer = ({ test, classroom, answer }, ref) => {
    const user = answer && answer.user;
    const prev_result = user && user.theory_results[0];
    const [visible, toggleAnswer] = useToggle(false);
    const [loading, setLoading] = useState(false);

    const mark_test = data => {
        setLoading(true);
        Inertia.post(
            route("theory.score", { test: test.id, classroom: classroom.hash }),
            data
        ).then(() => {
            setLoading(false);
            toggleAnswer();
        });
    };
    useExpose(ref, { toggleAnswer });
    return (
        answer &&
        user && (
            <div>
                <Drawer
                    title={`Submission for ${Main.name(user)}`}
                    placement="top"
                    closable={true}
                    onClose={toggleAnswer}
                    visible={visible}
                    width="100%"
                    height="100%"
                >
                    <Row gutter={[0, 14]}>
                        <Col xs={24}>
                            <Card>
                                {test.questions.map((question, index, arr) => {
                                    return (
                                        <React.Fragment
                                            key={`question-${index}`}
                                        >
                                            <strong>
                                                Question{" "}
                                                {arr.length > 1 && index + 1}
                                            </strong>
                                            {parse(question.question)}
                                        </React.Fragment>
                                    );
                                })}
                            </Card>
                        </Col>
                        <Col xs={24}>
                            <Card>
                                <Row gutter={[0, 14]}>
                                    <Col>
                                        <strong> Solution</strong>
                                    </Col>
                                    <Col xs={24}>{parse(answer.answer)}</Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={24}>
                            <Card>
                                <Form
                                    onFinish={mark_test}
                                    layout="vertical"
                                    initialValues={{
                                        score: prev_result
                                            ? prev_result.score
                                            : "",
                                        user_id: user.id,
                                        id: prev_result && prev_result.id
                                    }}
                                >
                                    <Form.Item
                                        label={`Test Score (max-score:${test.total_score})`}
                                        name="score"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Please input Score!"
                                            }
                                        ]}
                                    >
                                        <InputNumber
                                            style={{ width: "100%" }}
                                            min={0}
                                            max={test.total_score}
                                            placeholder="Input Test Score"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            loading={loading}
                                        >
                                            Save
                                        </Button>
                                    </Form.Item>
                                    <Form.Item name="user_id">
                                        <Input name="user_id" type="hidden" />
                                    </Form.Item>
                                    <Form.Item name="id">
                                        <Input name="id" type="hidden" />
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Drawer>
            </div>
        )
    );
};

export default forwardRef(Answer);
