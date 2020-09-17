import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import Layout from "antd/lib/layout";
import Halllayout from "@/Pages/ExamHall/HallLayout/";

import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Radio from "antd/lib/radio";
import Badge from "antd/lib/badge";

const { Content } = Layout;
import { change, radioStyle } from "./handler";
const parse = require("html-react-parser");
const Index = props => {
    const { classroom, test } = props;
    const { questions } = test;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const submitTest = () => {
        setLoading(true);
        const formParams = { classroom: classroom.hash, test: test.id };
        Inertia.post(route("objective.answer", formParams), {
            answers: data
        }).then(() => setLoading(false));
    };

    const handleChange = e => {
        change(e, test, setData);
    };
    return (
        <Halllayout submitTest={submitTest} {...props}>
            <Content style={{ margin: "15px 16px", height: "100%" }}>
                <Row gutter={[0, 16]}>
                    {questions.map((question, index) => {
                        return (
                            <Col xs={24} key={index}>
                                <Card>
                                    <strong>
                                        Question {index + 1} {"  "}
                                        <Badge
                                            count={"Revisit"}
                                            style={{
                                                background: "green",
                                                cursor: "pointer"
                                            }}
                                        />
                                    </strong>
                                    {parse(question.question)}
                                    <Radio.Group
                                        onChange={handleChange}
                                        name={[index, question.id]}
                                    >
                                        {question.options.map(
                                            (option, index) => {
                                                return (
                                                    <Radio
                                                        key={`opt${index}`}
                                                        style={radioStyle}
                                                        value={option.id}
                                                    >
                                                        {option.option}
                                                    </Radio>
                                                );
                                            }
                                        )}
                                    </Radio.Group>
                                </Card>
                            </Col>
                        );
                    })}
                    <Col>
                        <Button type="primary" onClick={submitTest}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Content>
        </Halllayout>
    );
};
export default Index;
