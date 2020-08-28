import React from "react";
import Empty from "antd/lib/empty";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Avatar from "antd/lib/avatar";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Tooltip from "antd/lib/tooltip";
import CheckOutlined from "@ant-design/icons/CheckOutlined";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";

import Main from "@/Helpers/Main";
const { Meta } = Card;

const Student = ({ tests, classroom, showDrawer }) => {
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
                                />
                            </Tooltip>,
                            <Tooltip title="Edit Test Settings">
                                <SettingOutlined key="setting" />
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
                    <Button type="primary" onClick={showDrawer}>Create new Test</Button>
                </Empty>
            )}
        </React.Fragment>
    );
};
export default Student;
