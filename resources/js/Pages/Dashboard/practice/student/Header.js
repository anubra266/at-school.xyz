import React from "react";
import { useToggle } from "react-use";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";
import Empty from "antd/lib/empty";
import Table from "antd/lib/table";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";
import Main from "@/Helpers/Main";

const Header = ({ results }) => {
    const [visible, showResults] = useToggle(false);
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={
                    window.history.length > 1 && (() => window.history.back())
                }
                title="Practice"
                subTitle="Personal Practice"
                extra={[
                    <Button key="results" onClick={showResults} type="primary">
                        View Results
                    </Button>
                ]}
            ></PageHeader>
            <Results
                showResults={showResults}
                results={results}
                visible={visible}
            />
        </div>
    );
};

export default Header;

const Results = ({ showResults, results, visible }) => {
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
                    subTitle={"Practice questions"}
                ></PageHeader>
                <Row gutter={[0, 14]}>
                    <Col xs={24}>
                        <Card>
                            {results && results.length !== 0 ? (
                                <React.Fragment>
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
                                            title="Category"
                                            dataIndex="id"
                                            key="category"
                                            render={(text, record) =>
                                                Main.fCap(
                                                    record.test.year.course
                                                        .category.name
                                                )
                                            }
                                            sorter={(a, b) =>
                                                Main.sort(
                                                    a.test.year.course.category,
                                                    b.test.year.course.category,
                                                    "name"
                                                )
                                            }
                                        />
                                        <Table.Column
                                            title="Course"
                                            dataIndex="id"
                                            key="course"
                                            render={(text, record) =>
                                                Main.fCap(
                                                    record.test.year.course.name
                                                )
                                            }
                                            sorter={(a, b) =>
                                                Main.sort(
                                                    a.test.year.course,
                                                    b.test.year.course,
                                                    "name"
                                                )
                                            }
                                        />
                                        <Table.Column
                                            title="Year"
                                            dataIndex="id"
                                            key="year"
                                            render={(text, record) =>
                                                record.test.year.year
                                            }
                                            sorter={(a, b) =>
                                                Main.sort(
                                                    a.test.year,
                                                    b.test.year,
                                                    "year"
                                                )
                                            }
                                        />

                                        <Table.Column
                                            title="Score"
                                            dataIndex="score"
                                            key="score"
                                            render={(text, record) =>
                                                `${text}/${
                                                    record.total
                                                } -${(text / record.total) *
                                                    100}%`
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
