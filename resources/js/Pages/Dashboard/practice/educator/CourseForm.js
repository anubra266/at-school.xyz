import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const CourseForm = ({ loading, createCourse, courseRef, category }) => {
    const { errors } = usePage();
    return (
        <Form
            ref={courseRef}
            onFinish={createCourse}
            layout="vertical"
            initialValues={{ category }}
        >
            <Form.Item
                label="Course Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input Course Name!"
                    }
                ]}
                validateStatus={errors.name && "error"}
                help={errors.name && errors.name[0]}
            >
                <Input placeholder="Biology" />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Please input Course Description!"
                    }
                ]}
                validateStatus={errors.description && "error"}
                help={errors.description && errors.description[0]}
            >
                <Input.TextArea
                    allowClear
                    rows={2}
                    placeholder="Study of Living things"
                />
            </Form.Item>
            <Form.Item name="category">
                <Input type="hidden" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CourseForm;
