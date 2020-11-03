import React, { useState, useEffect, useRef } from "react";
import Drawer from "antd/lib/drawer";
import Divider from "antd/lib/divider";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useToggle } from "react-use";
import CourseForm from "./CourseForm";
import CoursesList from "./CoursesList";

const CategoriesList = ({ categories }) => {
    const { errors } = usePage().props;
    const [visible, toggleCourse] = useToggle(false);
    const [loading, toggleLoad] = useToggle(false);
    const courseRef = useRef();
    const createCourse = data => {
        toggleLoad();
        Inertia.post(
            route("categories.courses.store", { category: data.category }),
            data
        ).then(() => {
            if (!errors || Object.keys(errors).length === 0) {
                courseRef.current.resetFields();
            }
            toggleLoad();
        });
    };
    return (
        <React.Fragment>
            {categories.length !== 0 && (
                <Table
                    rowKey={record => `org-${record.id}`}
                    scroll={{ x: 600 }}
                    style={{ marginTop: "10px" }}
                    bordered
                    dataSource={categories}
                    size="small"
                    pagination={{
                        hideOnSinglePage: true,
                        defaultPageSize: 3,
                        showQuickJumper: true,
                        showSizeChanger: true,
                        showTotal: (total, range) => (
                            <a>
                                {total} Categor{total !== 1 ? "ies" : "y"}
                            </a>
                        )
                    }}
                    expandable={{
                        expandedRowRender: record => (
                            <React.Fragment>
                                <Divider orientation="left">
                                    {record.courses.length} Course
                                    {record.courses.length !== 1 && "s"}{" "}
                                    <Button
                                        onClick={toggleCourse}
                                        type="dashed"
                                    >
                                        Add Course
                                    </Button>
                                </Divider>
                                <CoursesList courses={record.courses} />
                                <Drawer
                                    title="Add New Course"
                                    placement="right"
                                    closable={true}
                                    onClose={toggleCourse}
                                    visible={visible}
                                >
                                    <CourseForm
                                        {...{
                                            loading,
                                            createCourse,
                                            courseRef,
                                            category: record.id
                                        }}
                                    />
                                </Drawer>
                            </React.Fragment>
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
                        title="Description"
                        dataIndex="description"
                        key="description"
                    />
                    <Table.Column
                        title="Courses"
                        dataIndex="name"
                        key="courses"
                        render={(a, b) => <a>{b.courses.length}</a>}
                        sorter={(a, b) =>
                            a.courses.length === b.courses.length
                                ? 0
                                : a.courses.length < b.courses.length
                                ? -1
                                : 1
                        }
                    />
                </Table>
            )}
        </React.Fragment>
    );
};

export default CategoriesList;
