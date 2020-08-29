import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import moment from "moment";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import DatePicker from "antd/lib/date-picker";
const { RangePicker } = DatePicker;
const EduTheoryForm = ({ loading, onFinish, TestForm, edit, handleChange }) => {
    const { errors } = usePage();
    function onChange(value, dateString) {
        handleChange({
            target: {
                name: "start_time",
                value: value[0]._d
            }
        });
        handleChange({
            target: {
                name: "deadline",
                value: value[1]._d
            }
        });
    }
    function disabledDate(current) {
        // Can not select days before today
        return current && current < moment().startOf("day");
    }

    return (
        <div>
            <Form
                layout="vertical"
                ref={TestForm}
                onFinish={onFinish}
                initialValues={
                    edit && {
                        title: edit.title
                    }
                }
            >
                <Form.Item
                    label="Test Title"
                    name="test_title"
                    rules={[
                        {
                            required: true,
                            message: "Please input Test title!"
                        }
                    ]}
                    validateStatus={errors.title && "error"}
                    help={errors.title && errors.title[0]}
                >
                    <Input
                        placeholder="Test Title"
                        onChange={handleChange}
                        name="title"
                    />
                </Form.Item>
                <Form.Item
                    label="Test Period"
                    name="period"
                    rules={[
                        {
                            required: true,
                            message: "Please Finish Test Period!"
                        }
                    ]}
                    validateStatus={
                        (errors.start_time || errors.deadline) && "error"
                    }
                    help={
                        (errors.start_time && errors.start_time[0]) ||
                        (errors.deadline && errors.deadline[0])
                    }
                >
                    <RangePicker
                        showTime={{
                            format: "H:mm:AM"
                        }}
                        format="YYYY-MM-DD"
                        disabledDate={disabledDate}
                        onChange={onChange}
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
        </div>
    );
};

export default EduTheoryForm;
