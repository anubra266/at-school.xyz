import React, { useState } from "react";
import Space from "antd/lib/space";
import Badge from "antd/lib/badge";
import Drawer from "antd/lib/drawer";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

const drawer = props => {
    const toQuestion = i => {
        const { questionRefs } = props;

        questionRefs[i].current.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        props.drawerSwitch();
    };
    return (
        <Drawer
            title="Test Progress"
            placement="right"
            closable={true}
            onClose={props.drawerSwitch}
            visible={props.drawer}
        >
            <Row>
                <React.Fragment>
                    <Col>
                        <strong>Unattempted Questions</strong>
                        <br />
                        <Space>
                            {props.questions.map((q, i) => {
                                return (
                                    !props.data[i] && (
                                        <Badge
                                            key={`unattempted-${i}`}
                                            onClick={() => toQuestion(i)}
                                            count={i + 1}
                                            style={{
                                                background: "red",
                                                cursor: "pointer"
                                            }}
                                        />
                                    )
                                );
                            })}
                            {props.questions.filter((q, i) => !props.data[i])
                                .length < 1 && "No unattempted questions."}
                        </Space>
                    </Col>
                </React.Fragment>
                <React.Fragment>
                    <Col>
                        <strong>Marked for Revisit</strong>
                        <br />
                        <Space>
                            {props.questions.map((q, i) => {
                                return (
                                    props.revisit[i] && (
                                        <Badge
                                            key={`revisit-${i}`}
                                            onClick={() =>
                                                toQuestion(i) &&
                                                props.toggleVisit(i, false)
                                            }
                                            count={i + 1}
                                            style={{
                                                background: "green",
                                                cursor: "pointer"
                                            }}
                                        />
                                    )
                                );
                            })}
                            {Object.keys(props.revisit).length < 1 &&
                                "No questions marked for revisit."}
                        </Space>
                    </Col>
                </React.Fragment>
            </Row>
        </Drawer>
    );
};

export default drawer;
