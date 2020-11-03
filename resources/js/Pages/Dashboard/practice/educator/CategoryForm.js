import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const CategoryForm = ({ loading, createCat, CatForm }) => {
    const { errors } = usePage().props;
    return (
        <Form ref={CatForm} onFinish={createCat} layout="vertical">
            <Form.Item
                label="Category Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input Category Name!"
                    }
                ]}
                validateStatus={errors.name && "error"}
                help={errors.name && errors.name[0]}
            >
                <Input placeholder="NECO" />
            </Form.Item>
            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Please input Category Description!"
                    }
                ]}
                validateStatus={errors.description && "error"}
                help={errors.description && errors.description[0]}
            >
                <Input.TextArea
                    allowClear
                    rows={2}
                    placeholder="National Examination Council"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CategoryForm;
