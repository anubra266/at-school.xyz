import React, { useState, useEffect } from "react";
import Layout from "antd/lib/layout";

import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Halllayout from "@/Pages/ExamHall/HallLayout/";
import { ROption } from "./roption.jsx";

const { Content } = Layout;
import { useShuffle } from "./handler";
const parse = require("html-react-parser");
const Review = props => {
    const { test } = props;
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        setQuestions(() => {
            test.questions.forEach(question => useShuffle(question.options));
            return useShuffle(test.questions);
        });
    }, []);
    const layoutProps = { ...props };
    return (
        <Halllayout {...layoutProps}>
            <Content style={{ margin: "15px 16px", height: "100%" }}>
                <Row gutter={[0, 16]}>
                    {questions.map((question, index) => {
                        return (
                            <Col xs={24} key={index}>
                                <Card>
                                    <strong>
                                        Question {index + 1} {"  "}
                                    </strong>
                                    {parse(question.question)}
                                    <ROption {...{ question, index }} />
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Content>
        </Halllayout>
    );
};
export default Review;
