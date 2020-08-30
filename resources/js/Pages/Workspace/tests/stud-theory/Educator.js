import React, { useState, useRef } from "react";
import Empty from "antd/lib/empty";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Avatar from "antd/lib/avatar";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Tooltip from "antd/lib/tooltip";
import Popover from "antd/lib/popover";
import CheckOutlined from "@ant-design/icons/CheckOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";
import EduTheoryForm from "./EduTheoryForm";
import Auth from "@/Helpers/Auth";

import Main from "@/Helpers/Main";
const { Meta } = Card;

const Educator = ({ tests, classroom, showDrawer }) => {
    const [loading, setLoading] = useState(false);
    const TestForm = useRef(null);
    const [data, setData] = useState({
        title: "",
        start_time: "",
        deadline: "",
        total_score: ""
    });
    const handleChange = e => {
        Auth.handleChange(e, setData);
    };
    const after = () => {
        TestForm.current.resetFields();
        setVisible(false);
    };
    const onFinish = () => {
        Auth.handleSubmit(
            "theory.update",
            setLoading,
            data,
            { classroom: classroom.hash },
            after
        );
    };
    const formProps = { loading, TestForm, onFinish, handleChange };
    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                {tests.map((test, key) => (
                    <Col xs={20} lg={8} key={key}>
                        <Card
                            style={{ width: "100%" }}
                            actions={[
                                <Tooltip title="Take test">
                                    <DoubleRightOutlined
                                        style={{ color: "green" }}
                                        key="take"
                                    />
                                </Tooltip>,
                                <Tooltip title="Edit Test Settings">
                                    <Popover
                                        placement="bottom"
                                        title={"Edit Test Settings"}
                                        content={
                                            <EduTheoryForm
                                                edit={test}
                                                {...formProps}
                                            />
                                        }
                                        trigger="click"
                                    >
                                        <SettingOutlined key="setting" />{" "}
                                    </Popover>
                                </Tooltip>,
                                <Tooltip title="Mark Test">
                                    <CheckOutlined
                                        style={{ color: "green" }}
                                        key="mark"
                                    />
                                </Tooltip>,
                                <Tooltip title="Edit Test Questions">
                                    <EditOutlined
                                        style={{ color: "orange" }}
                                        key="edit"
                                    />
                                </Tooltip>,
                                <Tooltip title="Delete Test">
                                    <DeleteOutlined
                                        style={{ color: "red" }}
                                        key="delete"
                                    />
                                </Tooltip>
                            ]}
                        >
                            <Meta
                                avatar={
                                    <Avatar
                                        src={`/profile/image/${classroom.user.profile_image}`}
                                    />
                                }
                                title={test.title}
                                description={
                                    <React.Fragment>
                                        <span>
                                            <strong>Start Time: </strong>
                                            {Main.human_date(test.start_time)}
                                        </span>
                                        <br></br>
                                        <span>
                                            <strong>Deadline: </strong>
                                            {Main.human_date(test.deadline)}
                                        </span>
                                    </React.Fragment>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
            {tests.length === 0 && (
                <Empty description={<span>No Tests found!</span>}>
                    <Button type="primary" onClick={showDrawer}>
                        Create new Test
                    </Button>
                </Empty>
            )}
        </React.Fragment>
    );
};
export default Educator;
