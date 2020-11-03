import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Button from "antd/lib/button";
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const ClassroomForm = ({ loading, onFinish, CrmForm, edit }) => {
    const { errors } = usePage().props;
    return (
        <Form
            ref={CrmForm}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            initialValues={
                edit && {
                    name: edit.name,
                    id: edit.hash
                }
            }
            layout="vertical"
        >
            <Form.Item
                label="Classroom Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input Classroom Name!"
                    }
                ]}
                validateStatus={errors.name && "error"}
                help={errors.name && errors.name[0]}
            >
                <Input placeholder="Classroom Name" />
            </Form.Item>

            {edit ? (
                <Form.Item name="id" hidden={true}>
                    <Input />
                </Form.Item>
            ) : (
                <Form.Item
                    label="Environ Code"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: "Please input Environ / Department Code!"
                        }
                    ]}
                    validateStatus={errors.code && "error"}
                    help={errors.code && errors.code[0]}
                >
                    <Input placeholder="Environ / Department Code" />
                </Form.Item>
            )}

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    loading={loading}
                >
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ClassroomForm;
