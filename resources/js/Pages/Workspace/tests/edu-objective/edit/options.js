import React, { useRef } from "react";
import Radio from "antd/lib/radio";
import Tooltip from "antd/lib/tooltip";
import PopConfirm from "antd/lib/popconfirm";
import Popover from "antd/lib/popover";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Space from "antd/lib/space";
import Form from "antd/lib/form";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";

const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
};
const options = ({ currentQuestion, question, PTesti, loading }) => {
    const { options } = question;
    const option_form = useRef(null);
    const correct_option = () => {
        return PTesti.correctoption(options);
    };
    const add_option = data => {
        PTesti.add_option(data);
        option_form.current.resetFields();
    };
    const setCorrectOption = e => {
        PTesti.setCorrectOption(e.target.value);
    };
    const delete_option = option => {
        PTesti.delete_option(option);
    };
    return (
        <div>
            <Row gutter={[0, 14]}>
                <Col xs={24}>
                    <strong>
                        Question {currentQuestion + 1} options - (
                        {options.length}){" "}
                    </strong>
                    <br />
                    <small>Select radio to indicate correct option.</small>
                </Col>
                <Col xs={20}>
                    <Form onFinish={add_option} ref={option_form}>
                        <Form.Item
                            name="option"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input Option!"
                                }
                            ]}
                        >
                            <Input
                                addonAfter={
                                    <Button
                                        style={{ border: "none" }}
                                        htmlType="submit"
                                        loading={loading}
                                    >
                                        Add
                                    </Button>
                                }
                                style={{
                                    width: 300
                                }}
                                placeholder="Enter new option..."
                            />
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={24}>
                    <Radio.Group
                        value={correct_option()}
                        onChange={setCorrectOption}
                    >
                        {options.map((option, index) => {
                            return (
                                <React.Fragment key={`option-${index}`}>
                                    <Row gutter={[0, 14]}>
                                        <Col>
                                            <Radio
                                                name={`question-${currentQuestion}`}
                                                key={`option-${index}`}
                                                style={radioStyle}
                                                value={option.id}
                                            >
                                                <Space>
                                                    <span>{option.option}</span>

                                                    <PopConfirm
                                                        placement="bottom"
                                                        title={`Delete Option?`}
                                                        onConfirm={() =>
                                                            delete_option(
                                                                option.id
                                                            )
                                                        }
                                                        trigger="click"
                                                        okText="Delete"
                                                        okType="danger"
                                                    >
                                                        <Tooltip title="Delete option">
                                                            <DeleteOutlined
                                                                style={{
                                                                    color: "red"
                                                                }}
                                                            />
                                                        </Tooltip>
                                                    </PopConfirm>
                                                </Space>
                                            </Radio>
                                        </Col>
                                    </Row>
                                </React.Fragment>
                            );
                        })}
                    </Radio.Group>
                    {options.length < 1 && (
                        <strong>No Options for this question.</strong>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default options;
