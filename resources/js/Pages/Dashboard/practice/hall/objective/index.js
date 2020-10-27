import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useToggle } from "react-use";
import Layout from "antd/lib/layout";

import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Badge from "antd/lib/badge";
import Modal from "antd/lib/modal";
import ExclamationCircleOutlined from "@ant-design/icons/ExclamationCircleOutlined";

import Halllayout from "@/Pages/Dashboard/practice/hall/HallLayout";
import ViewResult from "./result";
import SideDrawer from "./drawer";
import { Option } from "./option.jsx";

const { Content } = Layout;
import { change, useDynamicRefs } from "./handler";
const parse = require("html-react-parser");
const Index = props => {
    const { response } = usePage();
    const [revisit, setRevisit] = useState({});

    const { year } = props;
    const { course, questions } = year;
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [drawer, drawerSwitch] = useToggle(false);

    const confirm_submit = () => {
        const ua = questions.filter((q, i) => !data[i]).length;
        const ud = Object.keys(revisit).length;
        Modal.confirm({
            title: "Are you sure, you want to Submit?",
            content: `There are ${ua} unattempted question${
                ua !== 1 ? "s" : ""
            } and ${ud} question${ud !== 1 ? "s" : ""} marked for revisit.`,
            icon: <ExclamationCircleOutlined />,
            centered: true,
            okText: "Submit",
            onOk() {
                return new Promise((resolve, reject) => {
                    submitTest(resolve);
                });
            }
        });
    };
    const submitTest = resolve => {
        // setLoading(true);
        // const formParams = { classroom: classroom.hash, test: test.id };
        // const formData = { answers: data };
        // Inertia.post(route("objective.answer", formParams), formData).then(
        //     () => {
        //         setLoading(false);
        //         resolve && resolve();
        //     }
        // );
    };
    const handleChange = e => {
        let ind = change(e, setData);
        revisit[ind] && toggleVisit(ind, false);
    };
    const toggleVisit = (i, status = true) => {
        setRevisit(visits => ({
            ...visits,
            [i]: status
        }));
    };
    const questionRefs = useDynamicRefs(questions);
    const layoutProps = { ...props, submitTest, confirm_submit, drawerSwitch };
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
                                    <Option
                                        {...{ question, index, handleChange }}
                                    />
                                </Card>
                            </Col>
                        );
                    })}
                    <Col>
                        <Button
                            type="primary"
                            onClick={confirm_submit}
                            loading={loading}
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>

                <ViewResult response={response} props={props} />

                <SideDrawer {...drawerProps} />
            </Content>
        </Halllayout>
    );
};
export default Index;
