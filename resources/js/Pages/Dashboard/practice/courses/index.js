import React, { useRef, useState } from "react";
import { useToggle } from "react-use";
import Layout from "antd/lib/layout";
import Empty from "antd/lib/empty";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import Drawer from "antd/lib/drawer";
import Card from "antd/lib/card";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import Header from "./header";
import { Inertia } from "@inertiajs/inertia";
import { usePage, InertiaLink } from "@inertiajs/inertia-react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import route from "ziggy-js";
const { Content } = Layout;

const Course = ({ course }) => {
    const [loading, toggleLoad] = useToggle(false);
    const { errors } = usePage();
    const [visible, toggleYear] = useToggle(false);
    const { years } = course;
    const YearForm = useRef();
    const createYear = data => {
        toggleLoad();
        Inertia.post(
            route("courses.years.store", { course: course.id }),
            data
        ).then(() => {
            if (!errors) {
                YearForm.current.resetFields();
            }
            toggleLoad();
        });
    };
    return (
        <Dashboardlayout title={`${course.name} - Contribute Questions`}>
            <Content style={{ margin: "0 16px" }}>
                <Header course={course} toggleYear={toggleYear} />
                <div>
                    <Card>
                        {years.length !== 0 ? (
                            <Table
                                rowKey={record => `year-${record.id}`}
                                scroll={{ x: 600 }}
                                style={{ marginTop: "10px" }}
                                bordered
                                dataSource={years}
                                size="small"
                                pagination={{
                                    hideOnSinglePage: true,
                                    defaultPageSize: 3,
                                    showQuickJumper: true,
                                    showSizeChanger: true,
                                    showTotal: (total, range) => (
                                        <a>
                                            {total} Year
                                            {total !== 1 && "s"}
                                        </a>
                                    )
                                }}
                            >
                                <Table.Column
                                    title="Year"
                                    dataIndex="year"
                                    key="year"
                                    render={(text, year) => (
                                        <InertiaLink
                                            href={route(
                                                "practice.course.year",
                                                {
                                                    course: course.id,
                                                    year: year.id
                                                }
                                            )}
                                        >
                                            {text}
                                        </InertiaLink>
                                    )}
                                    onFilter={(value, record) =>
                                        record.year.indexOf(value) === 0
                                    }
                                    sorter={(a, b) =>
                                        a.year === b.year
                                            ? 0
                                            : a.year < b.year
                                            ? -1
                                            : 1
                                    }
                                />
                                <Table.Column
                                    title="Questions"
                                    dataIndex="year"
                                    key="questions"
                                    render={(a, b) => (
                                        <a>{b.questions_count}</a>
                                    )}
                                />
                            </Table>
                        ) : (
                            <Empty description={<span>No Years found!</span>}>
                                <Button
                                    onClick={toggleYear}
                                    type="primary"
                                    loading={loading}
                                >
                                    Add Year
                                </Button>
                            </Empty>
                        )}
                    </Card>
                </div>
                <Drawer
                    title="Add New Year"
                    placement="right"
                    closable={true}
                    onClose={toggleYear}
                    visible={visible}
                >
                    <Form
                        ref={YearForm}
                        onFinish={createYear}
                        layout="vertical"
                        initialValues={{
                            practice_course_id: course.id
                        }}
                    >
                        <Form.Item
                            label="Course Year"
                            name="year"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input Course Year!"
                                }
                            ]}
                            validateStatus={errors.year && "error"}
                            help={errors.year && errors.year[0]}
                        >
                            <Input placeholder="2000" />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                            >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Drawer>
            </Content>
        </Dashboardlayout>
    );
};
export default Course;
