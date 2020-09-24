import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import Table from "antd/lib/table";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Checkbox from "antd/lib/checkbox";
import Input from "antd/lib/input";
import Typography from "antd/lib/typography";

import Main from "@/Helpers/Main";
import { filterChecks, initial_filter, filtersList } from "@/Helpers/Filter";

const MembersList = ({ members, classroom }) => {
    const { auth } = usePage();
    const [loading, setLoading] = useState(false);
    //? Handle Checkbox filters

    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(true);
    const onFilterAll = e => {
        setShowFilter(e.target.checked ? filtersList : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const [showFilter, setShowFilter] = useState(initial_filter);

    const onFilter = filtered => {
        setShowFilter(filtered);
        setIndeterminate(
            !!filtered.length && filtered.length < filtersList.length
        );
        setCheckAll(filtered.length === filtersList.length);
    };

    const show = filter => {
        return showFilter.includes(filter);
    };

    //? Handle Search
    const [result, setResult] = useState(members);
    useEffect(() => {
        setResult(members);
    }, [members]);
    const handleSearch = e => {
        const { value } = e.target;
        let res = [];

        members.forEach(student => {
            if (Main.meetSearch(student, value)) {
                res.push(student);
            }
        });

        setResult(res);
    };
    const block_student = id => {
        setLoading(true);
        Inertia.post(
            route("classroom.block", { classroom: classroom.hash, student: id })
        ).then(() => setLoading(false));
    };
    return (
        <React.Fragment>
            {members.length !== 0 && (
                <React.Fragment>
                    {auth.user.can.Classrooms && (
                        <React.Fragment>
                            <Row>
                                <Col xs={20} md={12}>
                                    <Input.Search
                                        onChange={handleSearch}
                                        style={{
                                            width: "100%"
                                        }}
                                        placeholder="Search Members by Name or Email"
                                    ></Input.Search>
                                </Col>
                            </Row>
                            <br />

                            <Space>
                                <Checkbox
                                    indeterminate={indeterminate}
                                    onChange={onFilterAll}
                                    checked={checkAll}
                                >
                                    Check all
                                </Checkbox>
                                <Checkbox.Group
                                    options={filterChecks}
                                    value={showFilter}
                                    onChange={onFilter}
                                />
                            </Space>
                        </React.Fragment>
                    )}

                    <Table
                        scroll={{ x: auth.user.can.Classrooms ? 600 : 0 }}
                        rowKey={record => `mem-${record.id}`}
                        style={{ marginTop: "10px" }}
                        bordered
                        dataSource={result}
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
                            width={60}
                            title="S/N"
                            render={(text, record) => (
                                <a>{result.indexOf(record) + 1}</a>
                            )}
                        />
                        <Table.Column
                            title="Name"
                            key="name"
                            render={(text, record) =>
                                record.email == auth.user.email ? (
                                    <a href="#">{Main.name(record)}</a>
                                ) : (
                                    <Typography.Text
                                        type={!record.status.active && "danger"}
                                    >
                                        {Main.name(record)}
                                    </Typography.Text>
                                )
                            }
                            sorter={(a, b) => Main.sort(a, b, "first_name")}
                        />
                        {show("gender") && (
                            <Table.Column
                                title="Gender"
                                key="gender"
                                dataIndex="gender"
                                render={text => <a>{Main.fCap(text)}</a>}
                                onFilter={(value, record) =>
                                    record.gender
                                        .toLowerCase()
                                        .includes(value.toLowerCase())
                                }
                                filterMultiple={false}
                                filters={[
                                    { text: "Male", value: "Male" },
                                    { text: "Female", value: "Female" }
                                ]}
                            />
                        )}
                        {auth.user.can.Classrooms && (
                            <React.Fragment>
                                {show("email") && (
                                    <Table.Column
                                        title="Email"
                                        key="email"
                                        dataIndex="email"
                                        render={text => (
                                            <a>{Main.fCap(text)}</a>
                                        )}
                                    />
                                )}
                                {show("telephone") && (
                                    <Table.Column
                                        title="Telephone"
                                        key="telephone"
                                        dataIndex="telephone"
                                        render={text => (
                                            <a>{Main.fCap(text)}</a>
                                        )}
                                    />
                                )}
                                {show("date_of_birth") && (
                                    <Table.Column
                                        title="Date Of Birth"
                                        key="date_of_birth"
                                        dataIndex="date_of_birth"
                                        render={text => (
                                            <a>{Main.fCap(text)}</a>
                                        )}
                                    />
                                )}
                                {show("school") && (
                                    <Table.Column
                                        title="School"
                                        key="school"
                                        dataIndex="school"
                                        render={text => (
                                            <a>{Main.fCap(text)}</a>
                                        )}
                                        sorter={(a, b) =>
                                            Main.sort(a, b, "school")
                                        }
                                    />
                                )}
                                {show("school_town") && (
                                    <Table.Column
                                        title="Town"
                                        key="school_town"
                                        dataIndex="school_town"
                                        render={text => (
                                            <a>{Main.fCap(text)}</a>
                                        )}
                                        sorter={(a, b) =>
                                            Main.sort(a, b, "school_town")
                                        }
                                    />
                                )}
                                {classroom.role === "educator" && (
                                    <Table.Column
                                        // width={200}
                                        fixed="right"
                                        title="Action"
                                        key="action"
                                        render={(text, record) => (
                                            <Space>
                                                <PopConfirm
                                                    placement="leftTop"
                                                    title={`${
                                                        record.status.active
                                                            ? "Block"
                                                            : "Unblock"
                                                    } ${Main.name(record)}?`}
                                                    onConfirm={() => {
                                                        block_student(
                                                            record.id
                                                        );
                                                    }}
                                                    okText={
                                                        record.status.active
                                                            ? "Block"
                                                            : "Unblock"
                                                    }
                                                    okType={
                                                        record.status.active
                                                            ? "danger"
                                                            : "primary"
                                                    }
                                                    trigger="click"
                                                >
                                                    <Button
                                                        type="primary"
                                                        danger={
                                                            record.status.active
                                                        }
                                                        loading={loading}
                                                    >
                                                        {record.status.active
                                                            ? "Block"
                                                            : "Unblock"}
                                                    </Button>
                                                </PopConfirm>
                                            </Space>
                                        )}
                                    />
                                )}
                            </React.Fragment>
                        )}
                    </Table>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default MembersList;
