import React, { useState, useRef } from "react";

import Table from "antd/lib/table";
import Button from "antd/lib/button";
import Empty from "antd/lib/empty";
import Card from "antd/lib/card";
import Space from "antd/lib/space";
import Typography from "antd/lib/typography";
import Tooltip from "antd/lib/tooltip";
import CheckOutlined from "@ant-design/icons/CheckOutlined";

import Main from "@/Helpers/Main";
import Answer from "./answer";

const submissions = ({ classroom, test }) => {
    const { answers } = test;
    const [answer, setAnswer] = useState({});
    const answerBar = useRef();
    const open_answer = ans => {
        setAnswer(ans);
        answerBar.current.toggleAnswer();
    };
    return (
        <div>
            <Card>
                {answers.length !== 0 ? (
                    <Table
                        rowKey={record => `submission-${record.id}`}
                        scroll={{ x: 600 }}
                        style={{ marginTop: "10px" }}
                        bordered
                        dataSource={answers}
                        size="small"
                        pagination={{
                            hideOnSinglePage: true,
                            defaultPageSize: 5,
                            showQuickJumper: true,
                            showSizeChanger: true,
                            showTotal: (total, range) => (
                                <a>
                                    {total} Submission{total !== 1 && "s"}
                                </a>
                            )
                        }}
                    >
                        <Table.Column
                            width={60}
                            title="S/N"
                            render={(text, record) => (
                                <a>{answers.indexOf(record) + 1}</a>
                            )}
                        />
                        <Table.Column
                            title="Name"
                            dataIndex="name"
                            key="name"
                            render={(text, record) => Main.name(record.user)}
                            sorter={(a, b) => Main.sort(a, b, "first_name")}
                        />
                        <Table.Column
                            title="Submitted"
                            dataIndex="created_at"
                            key="created"
                            render={text => Main.human_date(text)}
                            sorter={(a, b) => Main.sort(a, b, "created_at")}
                        />
                        <Table.Column
                            title="Edited"
                            dataIndex="updated_at"
                            key="created"
                            render={(text, record) =>
                                record.updated_at === record.created_at
                                    ? "Never"
                                    : Main.human_date(text)
                            }
                            sorter={(a, b) => Main.sort(a, b, "updated_at")}
                        />
                        <Table.Column
                            title="Marked"
                            key="created"
                            render={(text, record) => {
                                var prev = record.user.theory_results[0];
                                return prev ? (
                                    Main.human_date(prev.updated_at)
                                ) : (
                                    <Typography.Text type="danger">
                                        Unmarked
                                    </Typography.Text>
                                );
                            }}
                            sorter={(a, b) =>
                                Main.sort(
                                    a.user.theory_results[0],
                                    b.user.theory_results[0],
                                    "updated_at"
                                )
                            }
                        />
                        <Table.Column
                            width={70}
                            fixed="right"
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <Space>
                                    <Tooltip title="Mark Submission">
                                        <Button
                                            onClick={() => open_answer(record)}
                                        >
                                            <CheckOutlined
                                                style={{ color: "green" }}
                                                key="mark"
                                            />
                                        </Button>
                                    </Tooltip>
                                </Space>
                            )}
                        />
                    </Table>
                ) : (
                    <Empty
                        description={<span>No Submissions yet!</span>}
                    ></Empty>
                )}
                <Answer
                    ref={answerBar}
                    test={test}
                    answer={answer}
                    classroom={classroom}
                />
            </Card>
        </div>
    );
};

export default submissions;
