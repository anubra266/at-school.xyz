import React, { useState, useRef } from "react";
import Card from "antd/lib/card";
import Space from "antd/lib/space";
import Tooltip from "antd/lib/tooltip";

import List from "antd/lib/list";
import Avatar from "antd/lib/avatar";
import FileTextOutlined from "@ant-design/icons/FileTextOutlined";

import { usePlural } from "@/Helpers/usePlural";

import Results from "@/Pages/Workspace/tests/shared/results";

const list = ({ classroom, tests }) => {
    const [currentTest, setCurrentTest] = useState({});
    const resultsRef = useRef(null);
    return (
        <div>
            <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    pageSize: 3,
                    hideOnSinglePage: true
                }}
                dataSource={tests}
                renderItem={item => (
                    <Card>
                        <List.Item
                            key={item.title}
                            actions={[
                                <Tooltip title="View Results">
                                    <span
                                        onClick={() => {
                                            setCurrentTest(item);
                                            resultsRef.current.showResults();
                                        }}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <IconText
                                            icon={FileTextOutlined}
                                            text={usePlural(
                                                item.results,
                                                "Result",
                                                "s"
                                            )}
                                            key="result"
                                        />
                                    </span>
                                </Tooltip>
                            ]}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={`/profile/image/${classroom.user.profile_image}`}
                                    />
                                }
                                title={item.title}
                                description={item.title}
                            />
                            {item.content}
                        </List.Item>
                    </Card>
                )}
            />
            <Results
                ref={resultsRef}
                {...{
                    test: currentTest,
                    classroom
                }}
            />
        </div>
    );
};

export default list;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
