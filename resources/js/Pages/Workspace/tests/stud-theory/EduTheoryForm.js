import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import moment from "moment";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import InputNumber from "antd/lib/input-number";
import Tooltip from "antd/lib/tooltip";
import Button from "antd/lib/button";
import DatePicker from "antd/lib/date-picker";
import Main from "@/Helpers/Main";
const { RangePicker } = DatePicker;
const EduTheoryForm = ({ loading, onFinish, TestForm, edit, handleChange }) => {
    const { errors } = usePage();
    function onChange(value, dateString) {
        handleChange({
            target: {
                name: "start_time",
                value: Main.laradate(value[0]._d)
            }
        });
        handleChange({
            target: {
                name: "deadline",
                value: Main.laradate(value[1]._d)
            }
        });
    }
    function disabledDate(current) {
        // Can not select days before today
        return current && current < moment().startOf("day");
    }
    edit && console.log(edit);
    return (
        <div>
            <Form
                layout="vertical"
                ref={TestForm}
                onFinish={onFinish}
                initialValues={
                    edit && {
                        title: edit.title,
                        total_score: edit.total_score,
                        period: [
                            moment(new Date(edit.start_time)),
                            moment(new Date(edit.deadline))
                        ]
                    }
                }
            >
                <Form.Item
                    label="Test Title"
                    name="title"
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
                        name="period"
                        disabledDate={disabledDate}
                        onChange={onChange}
                    />
                </Form.Item>
                <Tooltip
                    trigger={["focus"]}
                    title="This is used to calculate percentage Score in test."
                    placement="topLeft"
                    overlayClassName="numeric-input"
                >
                    <Form.Item
                        label="Total Score"
                        name="total_score"
                        rules={[
                            {
                                required: true,
                                message: "Please input Possible Total Score!"
                            }
                        ]}
                        validateStatus={errors.total_score && "error"}
                        help={errors.total_score && errors.total_score[0]}
                    >
                        <InputNumber
                            style={{ width: "100%" }}
                            min={1}
                            placeholder="Input Highest Possible Score"
                            onChange={value => {
                                handleChange({
                                    target: { name: "total_score", value }
                                });
                            }}
                            name="total_score"
                        />
                    </Form.Item>
                </Tooltip>

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