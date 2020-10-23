import React, { useState, useEffect, useRef } from "react";
import Drawer from "antd/lib/drawer";
import Divider from "antd/lib/divider";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { useToggle } from "react-use";
import route from "ziggy-js";

const CoursesList = ({ courses }) => {
    return (
        <React.Fragment>
            {courses.length !== 0 && (
                <Table
                    rowKey={record => `org-${record.id}`}
                    scroll={{ x: 600 }}
                    style={{ marginTop: "10px" }}
                    bordered
                    dataSource={courses}
                    size="small"
                    pagination={{
                        hideOnSinglePage: true,
                        defaultPageSize: 3,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        showTotal: (total, range) => (
                            <a>
                                {total} Course{total !== 1 && "s"}
                            </a>
                        )
                    }}
                >
                    <Table.Column
                        title="Name"
                        dataIndex="name"
                        key="name"
                        render={(text, record) => (
                            <InertiaLink
                                href={route("practice.course", {
                                    course: record.id
                                })}
                            >
                                {text}
                            </InertiaLink>
                        )}
                        onFilter={(value, record) =>
                            record.name.indexOf(value) === 0
                        }
                        sorter={(a, b) =>
                            a.name === b.name ? 0 : a.name < b.name ? -1 : 1
                        }
                    />
                    <Table.Column
                        title="Description"
                        dataIndex="description"
                        key="description"
                    />
                </Table>
            )}
        </React.Fragment>
    );
};

export default CoursesList;
