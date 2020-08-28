import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Table from "antd/lib/table";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Button from "antd/lib/button";
import Typography from "antd/lib/typography";

const ClassroomsList = ({ classes }) => {
    const [loading, setLoading] = useState(false);

    return (
        <React.Fragment>
            {classes.length !== 0 && (
                <Table
                    rowKey={record => `crm-${record.id}`}
                    scroll={{ x: 600 }}
                    style={{ marginTop: "10px" }}
                    bordered
                    dataSource={classes}
                    size="small"
                    pagination={{
                        hideOnSinglePage: true,
                        defaultPageSize: 3,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        showTotal: (total, range) => (
                            <a>
                                {total} Classroom{total !== 1 && "s"}
                            </a>
                        )
                    }}
                >
                    <Table.Column
                        title="Name"
                        dataIndex="name"
                        key="name"
                        render={(text, record) => (
                            <InertiaLink href={record.url}>{text}</InertiaLink>
                        )}
                        sorter={(a, b) =>
                            a.name === b.name ? 0 : a.name < b.name ? -1 : 1
                        }
                    />

                    <Table.Column
                        title="Code"
                        dataIndex="code"
                        key="code"
                        render={(text, record) => (
                            <Typography.Paragraph copyable>
                                {text}
                            </Typography.Paragraph>
                        )}
                    />
                    <Table.Column
                        width={200}
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <Space>
                                <PopConfirm
                                    placement="leftTop"
                                    title={`Leave ${record.name} Class?`}
                                    onConfirm={() => {
                                        setLoading(true);
                                        Inertia.patch(
                                            route("class.leave", {
                                                classroom: record.id
                                            })
                                        ).then(() => setLoading(false));
                                    }}
                                    okText="Leave"
                                    okType="danger"
                                    trigger="click"
                                >
                                    <Button loading={loading}>
                                        Leave Classroom
                                    </Button>
                                </PopConfirm>
                            </Space>
                        )}
                    />
                </Table>
            )}
        </React.Fragment>
    );
};

export default ClassroomsList;
