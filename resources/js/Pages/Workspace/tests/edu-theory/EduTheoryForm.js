import React from "react";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
const EduTheoryForm = () => {
    const [form] = Form.useForm();
    return (
        <div>
            <Form layout="vertical" form={form} initialValues={{ name: "" }}>
                <Form.Item label="Field A">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Field B">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EduTheoryForm;
