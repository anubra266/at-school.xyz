import React, { useState } from "react";
import Layout from "antd/lib/layout";
import Card from "antd/lib/card";
import Form from "antd/lib/form";
import Select from "antd/lib/select";
import InputNumber from "antd/lib/input-number";
import Button from "antd/lib/button";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import Header from "./Header";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const Practice = ({ categories, results }) => {
    const [loading, setLoading] = useState(false);
    const practice = data => {
        setLoading(true);
        Inertia.post(route("practice.year"), data).then(() => {
            setLoading(false);
        });
    };
    const empty = list => list && list.length === 0;
    const { errors } = usePage();
    return (
        <Dashboardlayout title="Personal Practice">
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header results={results} />
                <Card>
                    <Form layout="vertical" onFinish={practice}>
                        <Form.Item name="category" label="Category">
                            <Select
                                placeholder="What are you preparing for?"
                                size="large"
                            >
                                {categories.map(category => (
                                    <Select.Option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.category !== currentValues.category
                            }
                        >
                            {({ getFieldValue, setFieldsValue }) => {
                                const category = categories.find(
                                    c => c.id === getFieldValue("category")
                                );
                                return category && !empty(category.courses) ? (
                                    <Form.Item name="course" label="Course">
                                        <Select
                                            placeholder="Select Course"
                                            size="large"
                                        >
                                            {category.courses.map(course => (
                                                <Select.Option
                                                    key={course.id}
                                                    value={course.id}
                                                >
                                                    {course.name}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                ) : (
                                    () => {
                                        setFieldsValue({ course: null });
                                        if (category && empty(category.courses))
                                            return (
                                                <span>Nothing here yet 🙁</span>
                                            );
                                    }
                                );
                            }}
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.course !== currentValues.course
                            }
                        >
                            {({ getFieldValue, setFieldsValue }) => {
                                const category = categories.find(
                                    c => c.id === getFieldValue("category")
                                );
                                const course =
                                    category &&
                                    category.courses.find(
                                        c => c.id === getFieldValue("course")
                                    );
                                return course && !empty(course.years) ? (
                                    <Form.Item name="year" label="Year">
                                        <Select
                                            placeholder="Select Year"
                                            size="large"
                                        >
                                            {course.years.map(year => (
                                                <Select.Option
                                                    key={year.id}
                                                    value={year.id}
                                                >
                                                    {year.year}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                ) : (
                                    () => {
                                        setFieldsValue({ year: null });
                                        if (course && empty(course.years))
                                            return (
                                                <span>Nothing here yet 🙁</span>
                                            );
                                    }
                                );
                            }}
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.year !== currentValues.year
                            }
                        >
                            {({ getFieldValue, setFieldsValue }) => {
                                const category = categories.find(
                                    c => c.id === getFieldValue("category")
                                );
                                const course =
                                    category &&
                                    category.courses.find(
                                        c => c.id === getFieldValue("course")
                                    );
                                const year =
                                    course &&
                                    course.years.find(
                                        c => c.id === getFieldValue("year")
                                    );
                                return year && !empty(year.questions) ? (
                                    <Form.Item
                                        name="questions"
                                        label="Number of Questions"
                                        validateStatus={
                                            errors.questions && "error"
                                        }
                                        help={
                                            errors.questions &&
                                            errors.questions[0]
                                        }
                                        required
                                    >
                                        <InputNumber
                                            style={{ width: "100%" }}
                                            placeholder={`${year.questions.length} Question(s) Available`}
                                            size="large"
                                        />
                                    </Form.Item>
                                ) : (
                                    () => {
                                        setFieldsValue({ questions: null });
                                        if (course && empty(year.questions))
                                            return (
                                                <span>Nothing here yet 🙁</span>
                                            );
                                    }
                                );
                            }}
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues.questions !== currentValues.questions
                            }
                        >
                            {({ getFieldValue, setFieldsValue }) => {
                                const questions = getFieldValue("questions");
                                return questions ? (
                                    <Form.Item
                                        name="time"
                                        label="Time in Minutes"
                                        validateStatus={errors.time && "error"}
                                        help={errors.time && errors.time[0]}
                                        required
                                    >
                                        <InputNumber
                                            style={{ width: "100%" }}
                                            placeholder="Time yourself"
                                            size="large"
                                        />
                                    </Form.Item>
                                ) : (
                                    () => {
                                        setFieldsValue({ time: null });
                                    }
                                );
                            }}
                        </Form.Item>

                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) =>
                                prevValues !== currentValues
                            }
                        >
                            {({ getFieldValue }) => {
                                const time = getFieldValue("time");
                                return time && time > 0 ? (
                                    <Form.Item>
                                        <Button
                                            loading={loading}
                                            size="large"
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            Start Test
                                        </Button>{" "}
                                    </Form.Item>
                                ) : null;
                            }}
                        </Form.Item>
                    </Form>
                </Card>
            </Layout.Content>
        </Dashboardlayout>
    );
};
export default Practice;
