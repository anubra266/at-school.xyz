import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Button from "antd/lib/button";
import { Form, Input } from "antd";

const ClassForm = ({ loading, onFinish, ClsForm }) => {
    const { errors } = usePage();
    return (
        <Form
            ref={ClsForm}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
        >
            <Form.Item
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
