import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import Table from "antd/lib/table";
import PopConfirm from "antd/lib/popconfirm";
import Space from "antd/lib/space";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Button from "antd/lib/button";
import Checkbox from "antd/lib/checkbox";

import { Input, AutoComplete } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Main from "@/Helpers/Main";

const CheckboxGroup = Checkbox.Group;

const MembersList = ({ members, classroom }) => {
    const { auth } = usePage();
    const [loading, setLoading] = useState(false);
    const filtersList = [
        "email",
        "gender",
        "telephone",
        "date_of_birth",
        "school",
        "school_town"
    ];
    var filterChecks = [
        { label: "Email", value: "email" },
        { label: "Gender", value: "gender" },
        { label: "Telephone", value: "telephone" },
        { label: "Date of birth", value: "date_of_birth" },
        { label: "School", value: "school" },
        { label: "Town", value: "school_town" }
    ];
    const defaultFilters = ["email", "school", "school_town"];
    const [showFilter, setShowFilter] = useState(defaultFilters);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(true);
    const onFilter = filtered => {
        setShowFilter(filtered);
        setIndeterminate(
            !!filtered.length && filtered.length < filtersList.length
        );
        setCheckAll(filtered.length === filtersList.length);
    };
    const onFilterAll = e => {
        setShowFilter(e.target.checked ? filtersList : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    const show = filter => {
        return showFilter.includes(filter);
    };
    const [result, setResult] = useState(members);
    const handleSearch = value => {
        let res = [];

        members.forEach(student => {
            if (Main.meetSearch(student, value)) {
                res.push(student);
            }
        });

        setResult(res);
    };
    return (
        <React.Fragment>
            {members.length !== 0 && (
                <React.Fragment>
                    {auth.user.can.Classrooms && (
                        <React.Fragment>
                            <Row>
                                <Col xs={20} md={12}>
                                    <AutoComplete
                                        onSearch={handleSearch}
                                        style={{
                                            width: "100%"
                                        }}
                                        placeholder="Search Members by Name or Email"
                                    >
                                        {result.slice(0, 3).map(member => {
                                            return (
                                                <AutoComplete.Option
                                                    key={member.email}
                                                    value={member.email}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between"
                                                        }}
                                                    >
                                                        {Main.name(member)}
                                                        <span>
                                                            <UserOutlined />
                                                        </span>
                                                    </div>
                                                </AutoComplete.Option>
                                            );
                                        })}
                                    </AutoComplete>
                                </Col>
                            </Row>
                            <br />
                            <Space>
                                <div className="site-checkbox-all-wrapper">
                                    <Checkbox
                                        indeterminate={indeterminate}
                                        onChange={onFilterAll}
                                        checked={checkAll}
                                    >
                                        Check all
                                    </Checkbox>
                                </div>
                                <CheckboxGroup
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
                                    <a>{Main.name(record)}</a>
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
                                                    title={`Leave ${record.name} Class?`}
                                                    onConfirm={() => {
                                                        setLoading(true);
                                                        Inertia.patch(
                                                            route(
                                                                "class.leave",
                                                                {
                                                                    classroom:
                                                                        record.id
                                                                }
                                                            )
                                                        ).then(() =>
                                                            setLoading(false)
                                                        );
                                                    }}
                                                    okText="Leave"
                                                    okType="danger"
                                                    trigger="click"
                                                >
                                                    <Button
                                                        disabled={true}
                                                        loading={loading}
                                                    >
                                                        Block
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
