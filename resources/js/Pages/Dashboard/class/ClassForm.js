import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const ClassForm = ({ loading, onFinish, ClsForm }) => {
    const { errors } = usePage().props;
    return (
        <Form
            ref={ClsForm}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            layout="vertical"
        >
            <Form.Item
                label="Classroom Code"
                name="code"
                rules={[
                    {
                        required: true,
                        message: "Please input Classroom Code!"
                    }
                ]}
                validateStatus={errors.code && "error"}
                help={errors.code && errors.code[0]}
            >
                <Input placeholder="Classroom Code" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                >
                    Join
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ClassForm;
