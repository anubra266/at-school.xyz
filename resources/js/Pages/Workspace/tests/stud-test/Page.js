import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Empty from "antd/lib/empty";
import Card from "antd/lib/card";
import Avatar from "antd/lib/avatar";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import Tooltip from "antd/lib/tooltip";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";

import Main from "@/Helpers/Main";

const Page = ({ tests, classroom, type }) => {
    return (
        <React.Fragment>
            <Row gutter={[16, 16]}>
                {tests.map((test, key) => (
                    <Col xs={20} lg={8} key={key}>
                        <Card
                            style={{ width: "100%" }}
                            actions={[
                                <Tooltip title="Take test">
                                    <InertiaLink
                                        href={route(`${type}.take`, {
                                            test: test.id,
                                            classroom: classroom.hash
                                        })}
                                    >
                                        <DoubleRightOutlined
                                            style={{ color: "green" }}
                                            key="take"
                                        />
                                    </InertiaLink>
                                </Tooltip>
                            ]}
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
                    No Pending Tests! They'll be here when Available.
                </Empty>
            )}
        </React.Fragment>
    );
};
export default Page;
