import React from "react";
import Space from "antd/lib/space";
import Badge from "antd/lib/badge";
import Drawer from "antd/lib/drawer";

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
            <React.Fragment>
                <p>
                    <strong>Unattempted Questions</strong>
                </p>
                <Space>
                    {props.questions.map((q, i) => {
                        return (
                            !props.data[i] && (
                                <Badge
                                    key={`unattempted-${i}`}
                                    onClick={() => toQuestion(i)}
                                    count={i + 1}
                                    style={{
                                        background: "green",
                                        cursor: "pointer"
                                    }}
                                />
                            )
                        );
                    })}
                </Space>
            </React.Fragment>
            <React.Fragment>
                <p>
                    <strong>Marked to Revisit</strong>
                </p>
            </React.Fragment>
        </Drawer>
    );
};

export default drawer;
