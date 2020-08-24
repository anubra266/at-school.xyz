import React, { useState, useEffect, useRef } from "react";
import { Inertia } from "@inertiajs/inertia";
import Table from "antd/lib/table";
import PopOver from "antd/lib/popover";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Button from "antd/lib/button";
import Divider from "antd/lib/divider";
import Typography from "antd/lib/typography";
import OrganizationForm from "./OrganizationForm";
import EnvironsList from "@/Pages/Dashboard/environ/EnvironsList";
const OrganizationsList = ({ organizations }) => {
    const [loading, setLoading] = useState(false);
    const OrgForm = useRef(null);
    console.log(organizations);
    const onFinish = data => {
        setLoading(true);
        Inertia.patch(route("organization.edit"), data).then(res => {
            setLoading(false);
        });
    };
    const formProps = { loading, onFinish, OrgForm };

    organizations = organizations.map((organization, key) => {
        organization.key = `org-${key}`;
        return organization;
    });

    const townfilters = [
        //TODO Display Environs in collapse menu under Table
        //! in production, get towns entered by students and reduce duplicates to use here.
        { text: "Ogun", value: "Ogun" },
        { text: "Lagos", value: "Lagos" }
    ];

    return (
        <React.Fragment>
            {organizations.length !== 0 && (
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
                    expandable={{
                        expandedRowRender: record => (
                            <React.Fragment>
                                <Divider orientation="left">
                                    {record.environs.length} Environ
                                    {record.environs.length !== 1 && "s"}
                                </Divider>
                                <EnvironsList environs={record.environs} />
                            </React.Fragment>
                        ),
                        rowExpandable: record =>
                            record.environs && record.environs.length !== 0
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
                        onFilter={(value, record) =>
                            record.address
                                .toLowerCase()
                                .includes(value.toLocaleLowerCase())
                        }
                        filterMultiple={false}
                        filters={townfilters}
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
                        )}
                    />
                </Table>
            )}
        </React.Fragment>
    );
};

export default OrganizationsList;
