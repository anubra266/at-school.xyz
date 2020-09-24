import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import Table from "antd/lib/table";
import PopOver from "antd/lib/popover";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import EditOutlined from "@ant-design/icons/EditOutlined";
import ClassroomForm from "./ClassroomForm";

const ClassroomsList = ({ classrooms }) => {
    const [loading, setLoading] = useState(false);
    const CrmForm = useRef(null);

    const onFinish = data => {
        setLoading(true);
        Inertia.patch(
            route("classroom.edit", { classroom: data.id }),
            data
        ).then(res => {
            setLoading(false);
        });
    };
    const formProps = { loading, onFinish, CrmForm };

    return (
        <React.Fragment>
            {classrooms.length !== 0 && (
                <Table
                    rowKey={record => `crm-${record.id}`}
                    scroll={{ x: 600 }}
                    style={{ marginTop: "10px" }}
                    bordered
                    dataSource={classrooms}
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
                        title="Students"
                        dataIndex="students_count"
                        key="students_count"
                        sorter={(a, b) =>
                            a.students_count === b.students_count
                                ? 0
                                : a.students_count < b.students_count
                                ? -1
                                : 1
                        }
                    />

                    {window.location.pathname === "/classroom" && (
                        <Table.Column
                            width={200}
                            fixed="right"
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <Space>
                                    <PopOver
                                        placement="leftTop"
                                        title={`Edit ${record.name}`}
                                        content={() => (
                                            <ClassroomForm
                                                edit={record}
                                                {...formProps}
                                            />
                                        )}
                                        trigger="click"
                                    >
                                        <Button>
                                            <EditOutlined />
                                        </Button>
                                    </PopOver>
                                    <PopConfirm
                                        placement="leftTop"
                                        title={`Generate new ${record.name} code?`}
                                        onConfirm={() => {
                                            setLoading(true);
                                            Inertia.patch(
                                                route("classroom.change_code", {
                                                    classroom: record.hash
                                                })
                                            ).then(() => setLoading(false));
                                        }}
                                        okText="Generate"
                                        trigger="click"
                                    >
                                        <Button loading={loading}>
                                            Change Code
                                        </Button>
                                    </PopConfirm>
                                </Space>
                            )}
                        />
                    )}
                </Table>
            )}
        </React.Fragment>
    );
};

export default ClassroomsList;
