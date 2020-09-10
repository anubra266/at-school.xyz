import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
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
import EduObjForm from "./EduObjForm";
import PopConfirm from "antd/lib/popconfirm";

import Main from "@/Helpers/Main";

const Educator = ({ tests, classroom, showDrawer }) => {
    const { role } = classroom;

    return (
        <React.Fragment>
            <Row gutter={[24, 24]}>
                {tests.map((test, key) => (
                    <Col xs={20} lg={8} key={key}>
                        <Card
                            style={{ width: "100%" }}
                            actions={
                                role === "educator" && [
                                    <Tooltip title="Mark Test">
                                        <CheckOutlined
                                            style={{ color: "green" }}
                                            key="mark"
                                        />
                                    </Tooltip>,

                                    <Popover
                                        placement="bottom"
                                        title={"Edit Test Settings"}
                                        trigger="click"
                                        content={
                                            <EduObjForm
                                                edit={test}
                                                classroom={classroom}
                                            />
                                        }
                                    >
                                        <Tooltip title="Edit Test Settings">
                                            <SettingOutlined key="setting" />
                                        </Tooltip>
                                    </Popover>,
                                    <Tooltip title="Edit Test Questions">
                                        <InertiaLink
                                            href={`edu-objective/${test.id}/edit`}
                                        >
                                            <EditOutlined
                                                style={{ color: "orange" }}
                                                key="edit"
                                            />
                                        </InertiaLink>
                                    </Tooltip>,
                                    <PopConfirm
                                        placement="top"
                                        title={`Delete ${test.title} Test ?`}
                                        onConfirm={() => {
                                            Inertia.delete(
                                                route("objective.delete", {
                                                    classroom: classroom.hash,
                                                    test: test.id
                                                })
                                            );
                                        }}
                                        trigger="click"
                                        okText="Delete"
                                        okType="danger" 
                                    >
                                        <Tooltip title="Delete Test">
                                            <DeleteOutlined
                                                style={{ color: "red" }}
                                                key="delete"
                                            />
                                        </Tooltip>
                                    </PopConfirm>
                                ]
                            }
                        >
                            <Card.Meta
                                avatar={
                                    <Avatar
                                        src={`/profile/image/${classroom.user.profile_image}`}
                                    />
                                }
                                title={`${test.title} - ${test.duration} minutes`}
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
