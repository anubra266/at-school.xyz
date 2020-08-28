import React from "react";
import Empty from "antd/lib/empty";
import Button from "antd/lib/button";
import Main from "@/Helpers/Main";
import { Card, Avatar, Col, Row, Tooltip } from "antd";
import {
    CheckOutlined,
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
    DoubleRightOutlined
} from "@ant-design/icons";

const { Meta } = Card;

const Student = ({ tests, classroom }) => {
    return (
        <React.Fragment>
            <Row>
                <Col xs={20} md={8}>
                    <Card
                        style={{ width: 300 }}
                        actions={[
                            <Tooltip title="Take test">
                                <DoubleRightOutlined
                                    style={{ color: "green" }}
                                    key="take"
                                />{" "}
                            </Tooltip>,
                            <Tooltip title="Edit Test Settings">
                                <SettingOutlined key="setting" />
                            </Tooltip>,
                            <Tooltip title="Mark Test">
                                <CheckOutlined
                                    style={{ color: "green" }}
                                    key="mark"
                                />{" "}
                            </Tooltip>,
                            <Tooltip title="Edit Test Questions">
                                <EditOutlined
                                    style={{ color: "orange" }}
                                    key="edit"
                                />{" "}
                            </Tooltip>,
                            <Tooltip title="Delete Test">
                                <DeleteOutlined
                                    style={{ color: "red" }}
                                    key="delete"
                                />{" "}
                            </Tooltip>
                        ]}
                    >
                        <Meta
                            avatar={
                                <Avatar
                                    src={`/profile/image/${classroom.user.profile_image}`}
                                />
                            }
                            title="Biology Test"
                            description={
                                <React.Fragment>
                                    <span>Start Time: 2020-12-08</span>
                                    <br></br>
                                    <span>Deadline: 2020-12-08</span>
                                </React.Fragment>
                            }
                        />
                    </Card>
                </Col>
            </Row>
            {tests.length === 0 && (
                <Empty description={<span>No Tests found!</span>}>
                    <Button type="primary">Create new Test</Button>
                </Empty>
            )}
        </React.Fragment>
    );
};
export default Student;
