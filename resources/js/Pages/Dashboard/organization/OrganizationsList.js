import React, { useState, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import Table from "antd/lib/table";
import PopOver from "antd/lib/popover";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Alert from "antd/lib/alert";
import Button from "antd/lib/button";
import Empty from "antd/lib/empty";
import OrganizationForm from "./OrganizationForm";

const OrganizationsList = ({ organizations, showDrawer }) => {
    const { flash } = usePage();
    const [loading, setLoading] = useState(false);
    const OrgForm = useRef(null);

    const onFinish = data => {
        setLoading(true);
        Inertia.patch(route("organization.edit"), data).then(res => {
            setLoading(false);
        });
    };
    const formProps = { loading, onFinish, OrgForm };
    return (
        <React.Fragment>
            {flash.success && (
                <React.Fragment>
                    <Alert
                        message={flash.success}
                        type="success"
                        closable
                        showIcon
                    />
                </React.Fragment>
            )}
            <Table
                scroll={{ x: 600 }}
                style={{ marginTop: "10px" }}
                bordered
                dataSource={organizations}
                size="small"
                pagination={{
                    hideOnSinglePage: true,
                    defaultPageSize: 3,
                    showQuickJumper: true,
                    showSizeChanger: true,
                    showTotal: (total, range) => (
                        <a>
                            {total} Organization{total !== 1 && "s"}
                        </a>
                    )
                }}
            >
                <Table.Column
                    title="Name"
                    dataIndex="name"
                    key="name"
                    render={text => <a>{text}</a>}
                    onFilter={(value, record) =>
                        record.name.indexOf(value) === 0
                    }
                    sorter={(a, b) =>
                        a.name === b.name ? 0 : a.name < b.name ? -1 : 1
                    }
                />
                <Table.Column
                    title="Address"
                    dataIndex="address"
                    key="address"
                    onFilter={(value, record) =>
                        record.name.indexOf(value) === 0
                    }
                    sorter={(a, b) =>
                        a.address === b.address
                            ? 0
                            : a.address < b.address
                            ? -1
                            : 1
                    }
                />
                <Table.Column title="Code" dataIndex="code" key="code" />
                <Table.Column
                    width={200}
                    fixed="right"
                    title="Action"
                    key="action"
                    render={(text, record) =>
                        organizations.length >= 1 ? (
                            <Space>
                                <PopOver
                                    placement="leftTop"
                                    title={`Edit ${record.name}`}
                                    content={() => (
                                        <OrganizationForm
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
                                            route("organization.change_code", {
                                                organization: record.id
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
                        ) : null
                    }
                />
            </Table>

            {organizations.length === 0 && (
                <Empty description={<span>No Organizations found!</span>}>
                    <Button onClick={showDrawer} type="primary">
                        Create Organization
                    </Button>
                </Empty>
            )}
        </React.Fragment>
    );
};

export default OrganizationsList;
