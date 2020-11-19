import React, { forwardRef, useState, useEffect } from "react";
import Drawer from "antd/lib/drawer";
import Empty from "antd/lib/empty";
import Table from "antd/lib/table";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import PageHeader from "antd/lib/page-header";
import Card from "antd/lib/card";
import Input from "antd/lib/input";
import Space from "antd/lib/space";
import Checkbox from "antd/lib/checkbox";

import { useToggle } from "react-use";
import { useExpose } from "@/Helpers/useExpose";
import Export from "@/Shared/export";
import Main from "@/Helpers/Main";
import { filterChecks, initial_filter, filtersList } from "@/Helpers/Filter";

const Results = ({ test, classroom }, ref) => {
    const [visible, showResults] = useToggle(false);
    useExpose(ref, { showResults });
    const [results, setResults] = useState();
    useEffect(() => {
        setResults(test.results);
    }, [test.results]);

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
    const handleSearch = e => {
        const { value } = e.target;
        let res = [];

        test.results.forEach(result => {
            if (Main.meetSearch(result.user, value)) {
                res.push(result);
            }
        });

        setResults(res);
    };
    const exportModelDef = filterChecks.filter(item =>
        showFilter.includes(item.value)
    );
    const extraModel = [
        {
            label: "Score",
            value: "score"
        },
        {
            label: "Total",
            value: "total"
        }
    ];
    const exportModel = [{ label: "Name", value: "name" }].concat(
        exportModelDef.concat(extraModel)
    );
    const res_users =
        results &&
        results.reduce((acc, nxt) => {
            nxt.user.score = nxt.score;
            nxt.user.total = nxt.total;
            nxt.user.name = Main.name(nxt.user);
            acc.push(nxt.user);
            return acc;
        }, []);
    return (
        <div>
            <Drawer
                title={null}
                placement="top"
                closable={false}
                onClose={showResults}
                visible={visible}
                width="100%"
                height="100%"
            >
                <PageHeader
                    ghost={false}
                    onBack={showResults}
                    title="Results"
                    subTitle={test.title}
                    extra={[
                        results && results.length !== 0 && (
                            <Export
                                key="export"
                                name={`${test.title}-results`}
                                model={exportModel}
                                list={res_users}
                            />
                        )
                    ]}
                ></PageHeader>
                <Row gutter={[0, 14]}>
                    <Col xs={24}>
                        <Card>
                            {test.results && test.results.length !== 0 ? (
                                <React.Fragment>
                                    <Row>
                                        <Col xs={20} md={12}>
                                            <Input.Search
                                                onChange={handleSearch}
                                                style={{
                                                    width: "100%"
                                                }}
                                                placeholder="Search Results by Students' Name or Email"
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
                                    <Table
                                        rowKey={record => `result-${record.id}`}
                                        scroll={{ x: 600 }}
                                        style={{ marginTop: "10px" }}
                                        bordered
                                        dataSource={results}
                                        size="small"
                                        pagination={{
                                            hideOnSinglePage: true,
                                            defaultPageSize: 10,
                                            showQuickJumper: true,
                                            showSizeChanger: true,
                                            showTotal: (total, range) => (
                                                <a>
                                                    {total} Result
                                                    {total !== 1 && "s"}
                                                </a>
                                            )
                                        }}
                                    >
                                        <Table.Column
                                            width={60}
                                            title="S/N"
                                            key="sn"
                                            render={(text, record) => (
                                                <a>
                                                    {results.indexOf(record) +
                                                        1}
                                                </a>
                                            )}
                                        />
                                        <Table.Column
                                            title="Name"
                                            dataIndex="name"
                                            key="name"
                                            render={(text, record) =>
                                                Main.name(record.user)
                                            }
                                            sorter={(a, b) =>
                                                Main.sort(
                                                    a.user,
                                                    b.user,
                                                    "last_name"
                                                )
                                            }
                                        />
                                        {show("gender") && (
                                            <Table.Column
                                                title="Gender"
                                                key="gender"
                                                dataIndex="gender"
                                                render={(text, record) => (
                                                    <a>
                                                        {Main.fCap(
                                                            record.user.gender
                                                        )}
                                                    </a>
                                                )}
                                                onFilter={(value, record) =>
                                                    record.user.gender
                                                        .toLowerCase()
                                                        .includes(
                                                            value.toLowerCase()
                                                        )
                                                }
                                                filterMultiple={false}
                                                filters={[
                                                    {
                                                        text: "Male",
                                                        value: "Male"
                                                    },
                                                    {
                                                        text: "Female",
                                                        value: "Female"
                                                    }
                                                ]}
                                            />
                                        )}
                                        {show("email") && (
                                            <Table.Column
                                                title="Email"
                                                key="email"
                                                dataIndex="email"
                                                render={(text, record) => (
                                                    <a>{record.user.email}</a>
                                                )}
                                            />
                                        )}
                                        {show("telephone") && (
                                            <Table.Column
                                                title="Telephone"
                                                key="telephone"
                                                dataIndex="telephone"
                                                render={(text, record) => (
                                                    <a>
                                                        {Main.fCap(
                                                            record.user
                                                                .telephone
                                                        )}
                                                    </a>
                                                )}
                                            />
                                        )}
                                        {show("date_of_birth") && (
                                            <Table.Column
                                                title="Date Of Birth"
                                                key="date_of_birth"
                                                dataIndex="date_of_birth"
                                                render={(text, record) => (
                                                    <a>
                                                        {Main.fCap(
                                                            record.user
                                                                .date_of_birth
                                                        )}
                                                    </a>
                                                )}
                                            />
                                        )}
                                        {show("school") && (
                                            <Table.Column
                                                title="School"
                                                key="school"
                                                dataIndex="school"
                                                render={(text, record) => (
                                                    <a>
                                                        {Main.fCap(
                                                            record.user.school
                                                        )}
                                                    </a>
                                                )}
                                                sorter={(a, b) =>
                                                    Main.sort(
                                                        a.user,
                                                        b.user,
                                                        "school"
                                                    )
                                                }
                                            />
                                        )}
                                        {show("school_town") && (
                                            <Table.Column
                                                title="Town"
                                                key="school_town"
                                                dataIndex="school_town"
                                                render={(text, record) => (
                                                    <a>
                                                        {Main.fCap(
                                                            record.user
                                                                .school_town
                                                        )}
                                                    </a>
                                                )}
                                                sorter={(a, b) =>
                                                    Main.sort(
                                                        a.user,
                                                        b.user,
                                                        "school_town"
                                                    )
                                                }
                                            />
                                        )}

                                        <Table.Column
                                            title="Score"
                                            dataIndex="score"
                                            key="score"
                                            render={(text, record) =>
                                                `${text}/${record.total} -${(
                                                    (text / record.total) *
                                                    100
                                                ).toFixed(2)}%`
                                            }
                                            sorter={(a, b) =>
                                                Main.sort(a, b, "score")
                                            }
                                        />
                                    </Table>
                                </React.Fragment>
                            ) : (
                                <Empty
                                    description={<span>No Results yet!</span>}
                                ></Empty>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Drawer>
        </div>
    );
};

export default forwardRef(Results);
