import React, { useRef } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import List from "antd/lib/list";
import Modal from "antd/lib/modal";
import Typography from "antd/lib/typography";
import Form from "antd/lib/form";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import { Inertia } from "@inertiajs/inertia";
import { useToggle } from "react-use";

const Security = () => {
    const { auth, errors } = usePage();
    const [reset, toggleReset] = useToggle(false)
    const [loading, toggleLoad] = useToggle(false)
    const resetForm = useRef()
    const resetPassword = data => {
        toggleLoad()
        Inertia.patch(route('settings.password'), data).then(() => {
            toggleLoad()
            resetForm.current.resetFields()
        })
    }
    //TODO Security Phone, Security Question, Backup Email
    return (
        <React.Fragment>
            <PageHeader
                title="Security Settings"
                subTitle="Customize the Appearance"
            ></PageHeader>
            <div style={{ marginLeft: 20, marginRight: 20 }}>
                <List>
                    <List.Item>
                        <List.Item.Meta
                            title="Account Password"
                            description="Set a strong password."
                        />
                        <Typography.Link onClick={toggleReset}>Modify</Typography.Link>
                        <Modal
                            centered
                            title="Reset Password"
                            visible={reset}
                            onCancel={toggleReset}
                            footer={null}
                        >
                            <Form ref={resetForm} layout="vertical" onFinish={resetPassword}>
                                <Form.Item
                                    label="Current Password"
                                    name="current_password"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Please input current password!`
                                        }
                                    ]}
                                    validateStatus={errors.current_password && "error"}
                                    help={errors.current_password && errors.current_password[0]}
                                >
                                    <Input type="password" placeholder="Current Password" />
                                </Form.Item>

                                <Form.Item
                                    label="New Password"
                                    name="new_password"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Please input new password!`
                                        }
                                    ]}
                                    validateStatus={errors.new_password && "error"}
                                    help={errors.new_password && errors.new_password[0]}
                                >
                                    <Input type="password" placeholder="New Password" />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm New Password"
                                    name="confirm_new_password"
                                    rules={[
                                        {
                                            required: true,
                                            message: `Please confirm new password!`
                                        }
                                    ]}
                                    validateStatus={errors.confirm_new_password && "error"}
                                    help={errors.confirm_new_password && errors.confirm_new_password[0]}
                                >
                                    <Input type="password" placeholder="Confirm New Password" />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        loading={loading}
                                        htmlType="submit"
                                        type="primary"
                                    >
                                        Update
                                </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </List.Item>
                </List>
            </div>
        </React.Fragment>
    );
};

export default Security;
