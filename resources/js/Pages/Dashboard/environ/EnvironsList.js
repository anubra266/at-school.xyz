import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Table from "antd/lib/table";
import PopOver from "antd/lib/popover";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Divider from "antd/lib/divider";
import Button from "antd/lib/button";
import Typography from "antd/lib/typography";
import EditOutlined from "@ant-design/icons/EditOutlined";
import EnvironForm from "./EnvironForm";
import ClassroomsList from "@/Pages/Dashboard/classroom/ClassroomsList";

const EnvironsList = ({ environs }) => {
    const [loading, setLoading] = useState(false);
    const EnvForm = useRef(null);
    const onFinish = data => {
        setLoading(true);
        Inertia.patch(route("environ.edit", { environ: data.id }), data).then(
            res => {
                setLoading(false);
            }
        );
    };
    const formProps = { loading, onFinish, EnvForm };
    return (
        <React.Fragment>
            {environs.length !== 0 && (
                <Table
                    rowKey={record => `env-${record.id}`}
                    scroll={{ x: 600 }}
                    style={{ marginTop: "10px" }}
                    bordered
                    dataSource={environs}
                    size="small"
                    pagination={{
                        hideOnSinglePage: true,
                        defaultPageSize: 3,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        showTotal: (total, range) => (
                            <a>
                                {total} Environ{total !== 1 && "s"}
                            </a>
                        )
                    }}
                    expandable={{
                        expandedRowRender: record => (
                            <React.Fragment>
                                <Divider orientation="left">
                                    {record.classrooms.length} Classroom
                                    {record.classrooms.length !== 1 && "s"}
                                </Divider>
                                <ClassroomsList
                                    classrooms={record.classrooms}
                                />
                            </React.Fragment>
                        ),
                        rowExpandable: record =>
                            record.classrooms && record.classrooms.length !== 0
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
                    {window.location.pathname === "/environ" && (
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
                                            <EnvironForm
                                                edit={record}
                                                {...formProps}
                                            />
                                        )}
                                        trigger="click"
                                    >
                                        <Button>
                                            <EditOutlined />{" "}
                                        </Button>
                                    </PopOver>
                                    <PopConfirm
                                        placement="leftTop"
                                        title={`Generate new ${record.name} code?`}
                                        onConfirm={() => {
                                            setLoading(true);
                                            Inertia.patch(
                                                route("environ.change_code", {
                                                    environ: record.id
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

export default EnvironsList;
