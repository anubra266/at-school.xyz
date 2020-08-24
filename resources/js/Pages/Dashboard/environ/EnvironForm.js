import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import { useEffectOnce } from "react-use";
import Button from "antd/lib/button";
import { Form, Input } from "antd";

const EnvironForm = ({ loading, onFinish, EnvForm, edit }) => {
    const { errors } = usePage();
    const [form] = Form.useForm();
    useEffectOnce(() => {
        edit &&
            form.setFieldsValue({
                name: edit.name,
                id: edit.id
            });
    });
    return (
        <Form
            ref={EnvForm}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            form={form}
        >
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input Environ / Department Name!"
                    }
                ]}
                validateStatus={errors.name && "error"}
                help={errors.name && errors.name[0]}
            >
                <Input placeholder="Environ / Department Name" />
            </Form.Item>

            {edit ? (
                <Form.Item name="id" hidden={true}>
                    <Input />
                </Form.Item>
            ) : (
                <Form.Item
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: "Please input Organization Code!"
                        }
                    ]}
                    validateStatus={errors.code && "error"}
                    help={errors.code && errors.code[0]}
                >
                    <Input placeholder="Organization Code" />
                </Form.Item>
            )}

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                >
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EnvironForm;
