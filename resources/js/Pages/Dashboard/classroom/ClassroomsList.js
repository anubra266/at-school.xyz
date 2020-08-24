import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Table from "antd/lib/table";
import PopOver from "antd/lib/popover";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import ClassroomForm from "./ClassroomForm";

const ClassroomsList = ({ classrooms }) => {
    const [loading, setLoading] = useState(false);
    const CrmForm = useRef(null);

    const onFinish = data => {
        setLoading(true);
        Inertia.patch(route("classroom.edit"), data).then(res => {
            setLoading(false);
        });
    };
    const formProps = { loading, onFinish, CrmForm };

    classrooms = classrooms.map((classroom, key) => {
        classroom.key = `crm-${key}`;
        return classroom;
    });
    return (
        <React.Fragment>
            {classrooms.length !== 0 && (
                <Table
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
                        render={text => <a>{text}</a>}
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
                                    <Button>Edit</Button>
                                </PopOver>
                                <PopConfirm
                                    placement="leftTop"
                                    title={`Generate new ${record.name} code?`}
                                    onConfirm={() => {
                                        setLoading(true);
                                        Inertia.patch(
                                            route("classroom.change_code", {
                                                classroom: record.id
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
                </Table>
            )}
        </React.Fragment>
    );
};

export default ClassroomsList;
