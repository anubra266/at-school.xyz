import React, { useState, useEffect } from "react";
import Layout from "antd/lib/layout";

import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import Halllayout from "@/Pages/Dashboard/practice/hall/HallLayout";
import { ROption } from "./roption.jsx";

const { Content } = Layout;
const parse = require("html-react-parser");
const Review = props => {
    const { test, year } = props;
    const { questions } = year;
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
