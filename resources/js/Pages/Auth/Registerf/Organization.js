import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { Form, Input, Button } from "antd";
import { Card } from "antd";
import { Row, Col } from "antd";
const Organization = () => {
    const [loading, setLoading] = useState(false);
    const { errors } = usePage();

    const createOrganization = data => {
        setLoading(true);
        Inertia.post(route("organization.create"), data).then(res => {
            setLoading(false);
            console.log(res);
        });
    };
    return (
        <Row className="justify-content-center">
            <Col sm={24} md={20} lg={10}>
                <Card
                    title="Register Organization"
                    bordered={false}
                    style={{ width: "100%" }}
                >
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={createOrganization}
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
                                rows={3}
                                placeholder="Organization Address"
                            />
                        </Form.Item>

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
                </Card>
            </Col>
        </Row>
    );
};

export default Organization;
