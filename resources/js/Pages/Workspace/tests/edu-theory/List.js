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
import BookOutlined from "@ant-design/icons/BookOutlined";
import SettingOutlined from "@ant-design/icons/SettingOutlined";
import EduTheoryForm from "./EduTheoryForm";
import PopConfirm from "antd/lib/popconfirm";
import Switch from "antd/lib/switch";

import Results from "@/Pages/Workspace/tests/shared/results";

import Main from "@/Helpers/Main";

const Educator = ({ tests, classroom, showDrawer }) => {
    const { role } = classroom;
    const resultsRef = useRef();
    const [loading, setLoading] = useState(false);
    const [currentTest, setCurrentTest] = useState({});
    const updateStatus = (checked, id) => {
        setLoading(true);
        const status = checked ? "open" : "closed";
        Inertia.patch(route("theory.status", { classroom: classroom.hash }), {
            status: status,
            id
        }).then(() => {
            setLoading(false);
        });
    };
    return (
        <React.Fragment>
            <Row gutter={[24, 24]}>
                {tests.map((test, key) => (
                    <Col xs={20} lg={8} key={key}>
                        <Card
                            style={{ width: "100%" }}
                            actions={
                                role === "educator" && [
                                    <Tooltip
                                        title="Test Results"
                                        key={`results-${key}`}
                                    >
                                        <BookOutlined
                                            onClick={() => {
                                                setCurrentTest(test);
                                                resultsRef.current.showResults();
                                            }}
                                            style={{ color: "purple" }}
                                        />
                                    </Tooltip>,
                                    <Tooltip title="Mark Test" key="mark">
                                        <InertiaLink href={`mark/${test.id}`}>
                                            <CheckOutlined
                                                style={{ color: "green" }}
                                            />
                                        </InertiaLink>
                                    </Tooltip>,

                                    <Popover
                                        placement="bottom"
                                        title={"Edit Test Settings"}
                                        trigger="click"
                                        key="setting"
                                        content={
                                            <EduTheoryForm
                                                edit={test}
                                                classroom={classroom}
                                            />
                                        }
                                    >
                                        <Tooltip title="Edit Test Settings">
                                            <SettingOutlined />
                                        </Tooltip>
                                    </Popover>,
                                    <Tooltip
                                        title="Edit Test Questions"
                                        key="edit"
                                    >
                                        <InertiaLink
                                            href={`edu-theory/${test.id}/edit`}
                                        >
                                            <EditOutlined
                                                style={{ color: "orange" }}
                                            />
                                        </InertiaLink>
                                    </Tooltip>,
                                    <PopConfirm
                                        key="delete"
                                        placement="top"
                                        title={`Delete ${test.title} Test ?`}
                                        onConfirm={() => {
                                            Inertia.delete(
                                                route("theory.delete", {
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
                                title={`${test.title} ${
                                    test.duration
                                        ? `- Timed ${test.duration} minutes`
                                        : ""
                                }`}
                                description={
                                    <React.Fragment>
                                        <span>
                                            <strong>Status: </strong>
                                            <Switch
                                                checkedChildren="Open"
                                                unCheckedChildren="Closed"
                                                checked={test.status === "open"}
                                                size="small"
                                                loading={loading}
                                                onClick={checked =>
                                                    updateStatus(
                                                        checked,
                                                        test.id
                                                    )
                                                }
                                            />
                                        </span>
                                        <br></br>
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
                <Card>
                    <Empty description={<span>No Tests found!</span>}>
                        <Button type="primary" onClick={showDrawer}>
                            Create new Test
                        </Button>
                    </Empty>
                </Card>
            )}
            <Results
                ref={resultsRef}
                {...{
                    test: currentTest,
                    classroom
                }}
            />
        </React.Fragment>
    );
};
export default Educator;
