import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { useToggle } from "react-use";
import Layout from "antd/lib/layout";
import Halllayout from "@/Pages/ExamHall/HallLayout/";

import SideDrawer from "./drawer";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Radio from "antd/lib/radio";
import Badge from "antd/lib/badge";

const { Content } = Layout;
import { change, radioStyle, useDynamicRefs, useShuffle } from "./handler";
const parse = require("html-react-parser");
const Index = props => {
    const [revisit, setRevisit] = useState({});

    const { classroom, test } = props;
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        setQuestions(() => {
            test.questions.forEach(question => useShuffle(question.options));
            return useShuffle(test.questions);
        });
    }, []);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [drawer, drawerSwitch] = useToggle(false);

    const submitTest = () => {
        setLoading(true);
        const formParams = { classroom: classroom.hash, test: test.id };
        Inertia.post(route("objective.answer", formParams), {
            answers: data
        }).then(() => setLoading(false));
    };

    const handleChange = e => {
        let ind = change(e, test, setData);
        revisit[ind] && toggleVisit(ind, false);
    };
    const toggleVisit = (i, status = true) => {
        setRevisit(visits => ({
            ...visits,
            [i]: status
        }));
    };
    const questionRefs = useDynamicRefs(questions);
    const layoutProps = { ...props, submitTest, drawerSwitch };
    const drawerProps = {
        drawer,
        drawerSwitch,
        questions,
        data,
        questionRefs,
        revisit,
        toggleVisit
    };

    return (
        <Halllayout {...layoutProps}>
            <Content style={{ margin: "15px 16px", height: "100%" }}>
                <Row gutter={[0, 16]}>
                    {questions.map((question, index) => {
                        return (
                            <Col xs={24} key={index} ref={questionRefs[index]}>
                                <Card>
                                    <strong>
                                        Question {index + 1} {"  "}
                                        <Badge
                                            count={
                                                revisit[index]
                                                    ? "To-Visit"
                                                    : "Revisit"
                                            }
                                            style={{
                                                background: revisit[index]
                                                    ? "grey"
                                                    : "green",
                                                cursor: "pointer"
                                            }}
                                            onClick={() =>
                                                toggleVisit(
                                                    index,
                                                    revisit[index]
                                                        ? false
                                                        : true
                                                )
                                            }
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

                <SideDrawer {...drawerProps} />
            </Content>
        </Halllayout>
    );
};
export default Index;
