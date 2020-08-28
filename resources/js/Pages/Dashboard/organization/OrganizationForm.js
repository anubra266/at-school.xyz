import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Button from "antd/lib/button";
import { Form, Input } from "antd";

const OrganizationForm = ({ loading, onFinish, OrgForm, edit }) => {
    const { errors } = usePage();
    return (
        <Form
            ref={OrgForm}
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
            initialValues={{
                name: edit.name,
                address: edit.address,
                id: edit.id
            }}
        >
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input Organization Name!"
                    }
                ]}
                validateStatus={errors.name && "error"}
                help={errors.name && errors.name[0]}
            >
                <Input placeholder="Organization Name" />
            </Form.Item>
            <Form.Item
                name="address"
                rules={[
                    {
                        required: true,
                        message: "Please input Address!"
                    }
                ]}
                validateStatus={errors.address && "error"}
                help={errors.address && errors.address[0]}
            >
                <Input.TextArea
                    allowClear
                    rows={3}
                    placeholder="Organization Address"
                />
            </Form.Item>
            {edit && (
                <Form.Item name="id" hidden={true}>
                    <Input />
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

export default OrganizationForm;
