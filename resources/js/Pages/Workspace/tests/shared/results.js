import React, { forwardRef, useState } from "react";
import Drawer from "antd/lib/drawer";
import Empty from "antd/lib/empty";
import Table from "antd/lib/table";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import PageHeader from "antd/lib/page-header";
import Checkbox from "antd/lib/checkbox";
import Card from "antd/lib/card";

import { useToggle } from "react-use";
import { useExpose } from "@/Helpers/useExpose";
import Export from "@/Shared/export";

import Main from "@/Helpers/Main";

const Results = ({ test, classroom }, ref) => {
    const [visible, showResults] = useToggle(false);
    const { results } = test;
    useExpose(ref, { showResults });
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
                            <Export key="export" />
                        )
                    ]}
                ></PageHeader>
                <Row gutter={[0, 14]}>
                    <Col xs={24}>
                        <Card>
                            {results && results.length !== 0 ? (
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
                                            <a>{results.indexOf(record) + 1}</a>
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
                                            Main.sort(a, b, "first_name")
                                        }
                                    />
                                    <Table.Column
                                        title="Score"
                                        dataIndex="score"
                                        key="score"
                                        render={(text, record) =>
                                            `${text}/${record.total} -${(text /
                                                record.total) *
                                                100}%`
                                        }
                                        sorter={(a, b) =>
                                            Main.sort(a, b, "score")
                                        }
                                    />
                                </Table>
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
