import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import InputNumber from "antd/lib/input-number";
import Select from "antd/lib/select";
import DatePicker from "antd/lib/date-picker";
import Button from "antd/lib/button";
import Upload from "antd/lib/upload";
import ImgCrop from "antd-img-crop";
import message from "antd/lib/message";
import Modal from "antd/lib/modal";

import moment from "moment";
import Main from "@/Helpers/Main";
import { Inertia } from "@inertiajs/inertia";

const basic = () => {
    const { auth, errors } = usePage();
    const { user } = auth;
    const names = {
        first_name: "First Name",
        middle_name: "Middle Name",
        last_name: "Last Name"
    };
    const name_fields = () => {
        return Object.keys(names).reduce((acc, nxt) => {
            acc[nxt] = user[nxt];
            return acc;
        }, {});
    };
    const [loading, setLoading] = useState(false);
    const saveInfo = data => {
        setLoading(true);
        data.date_of_birth = Main.dbdate(data.date_of_birth._d);
        Inertia.patch(route("settings.basic"), data).then(() =>
            setLoading(false)
        );
    };
    const [fileList, setFileList] = useState([]);
    useEffect(() => {
        setFileList([
            {
                uid: "-1",
                name: user.profile_image,
                status: "done",
                url: `/profile/image/${user.profile_image}`
            }
        ]);
    }, [user.profile_image]);
    const upload = src => {
        setLoading(true);
        Inertia.patch(route("settings.dp"), { profile_image: src }).then(() =>
            setLoading(false)
        );
    };
    const beforeUpload = file => {
        const isJpgOrPng =
            file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 5;
        if (!isLt2M) {
            message.error("Upload image smaller than 5MB!");
        }
        return isJpgOrPng && isLt2M;
    };
    const onChange = async ({ file }) => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        upload(src);
        setFileList([{ ...file, status: "done" }]);
    };

    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(readeImager.result);
            });
        }
        Modal.info({
            title: `Profile Image`,
            content: <img style={{ width: "100%", margin: 16 }} src={src} />,
            icon: null,
            okText: "Close"
        });
    };
    const onRemove = file => {
        message.info("Update Instead!");
        return false;
    };
    return (
        <React.Fragment>
            <PageHeader
                title="Basic Settings"
                subTitle="Edit your Info"
            ></PageHeader>

            <Row style={{ width: "100%", margin: 10 }} gutter={16}>
                <Col xs={{ span: 24, order: 1 }} lg={{ span: 12, order: 0 }}>
                    <Form
                        layout="vertical"
                        onFinish={saveInfo}
                        initialValues={{
                            ...name_fields(),
                            gender: user.gender,
                            email: user.email,
                            date_of_birth: moment(new Date(user.date_of_birth)),
                            telephone: user.telephone,
                            school: user.school,
                            school_town: user.school_town
                        }}
                    >
                        {Object.keys(names).map((name, key) => {
                            return (
                                <Form.Item
                                    key={`set${key}`}
                                    label={names[name]}
                                    name={name}
                                    rules={[
                                        {
                                            required: true,
                                            message: `Please input ${names[name]}!`
                                        }
                                    ]}
                                    validateStatus={errors[name] && "error"}
                                    help={errors[name] && errors[name][0]}
                                >
                                    <Input placeholder={names[name]} />
                                </Form.Item>
                            );
                        })}

                        <Form.Item
                            name="gender"
                            label="Gender"
                            rules={[{ required: true }]}
                            validateStatus={errors.gender && "error"}
                            help={errors.gender && errors.gender[0]}
                        >
                            <Select placeholder="Select gender" allowClear>
                                <Select.Option value="male">male</Select.Option>
                                <Select.Option value="female">
                                    female
                                </Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Date of Birth"
                            name="date_of_birth"
                            rules={[
                                {
                                    required: true,
                                    message: `Please input Date of Birth!`
                                }
                            ]}
                            validateStatus={errors.date_of_birth && "error"}
                            help={
                                errors.date_of_birth && errors.date_of_birth[0]
                            }
                        >
                            <DatePicker style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: `Please input email!`
                                }
                            ]}
                            validateStatus={errors.email && "error"}
                            help={errors.email && errors.email[0]}
                        >
                            <Input type="email" placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            label="Telephone"
                            name="telephone"
                            rules={[
                                {
                                    required: true,
                                    message: `Please input Telephone Number!`
                                }
                            ]}
                            validateStatus={errors.telephone && "error"}
                            help={errors.telephone && errors.telephone[0]}
                        >
                            <InputNumber
                                placeholder="Telephone"
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="School"
                            name="school"
                            rules={[
                                {
                                    required: true,
                                    message: `Please input School!`
                                }
                            ]}
                            validateStatus={errors.school && "error"}
                            help={errors.school && errors.school[0]}
                        >
                            <Input placeholder="School" />
                        </Form.Item>
                        <Form.Item
                            label="School Town"
                            name="school_town"
                            rules={[
                                {
                                    required: true,
                                    message: `Please input School's Town!`
                                }
                            ]}
                            validateStatus={errors.school_town && "error"}
                            help={errors.school_town && errors.school_town[0]}
                        >
                            <Input placeholder="School Town" />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                loading={loading}
                                htmlType="submit"
                                type="primary"
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col>
                    <ImgCrop rotate shape="round" minZoom={-2}>
                        <Upload
                            action="/fakeupload"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                            onRemove={onRemove}
                            beforeUpload={beforeUpload}
                        >
                            {fileList.length < 2 && "Update"}
                        </Upload>
                    </ImgCrop>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default basic;
