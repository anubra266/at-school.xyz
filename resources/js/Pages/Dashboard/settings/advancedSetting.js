import React, { useState, useRef } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import Popover from "antd/lib/popover";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import List from "antd/lib/list";
import Typography from "antd/lib/typography";
import Switch from "antd/lib/switch";
import { Inertia } from "@inertiajs/inertia";

const Advanced = () => {
    const { auth, errors, settings } = usePage();
    const { user } = auth;
    const [loading, setLoading] = useState(false);
    const can_add_practice_questions =
        settings &&
        settings.preferences &&
        settings.preferences.add_practice_questions;
    const permitForm = useRef();
    const changeStatus = toEnable => {
        setLoading(true);
        Inertia.patch(
            route("settings.pquestions.status", { toEnable: toEnable })
        ).then(() => setLoading(false));
        //TODO List permitted users who have accepted permit status
    };
    const permitUser = data => {
        setLoading(true);
        Inertia.patch(route("settings.permit.pquestions"), data).then(() => {
            setLoading(false);
            permitForm.current.resetFields();
        });
    };
    return (
        <React.Fragment>
            <PageHeader
                title="Advanced Settings"
                subTitle="Customize the Appearance"
            ></PageHeader>
            <div style={{ margin: "0 20px" }}>
                <List>
                    {(user.can.all ||
                        (can_add_practice_questions &&
                            can_add_practice_questions.permitted)) && (
                        <React.Fragment>
                            <List.Item>
                                <List.Item.Meta
                                    title={
                                        <span>
                                            Practice Questions -{" "}
                                            <b>
                                                (
                                                {can_add_practice_questions.enabled
                                                    ? "Enabled"
                                                    : "Disabled"}
                                                )
                                            </b>
                                        </span>
                                    }
                                    description="Contribute questions for Students personal practice."
                                />
                                <Switch
                                    checkedChildren="Enabled"
                                    unCheckedChildren="Disabled"
                                    checked={can_add_practice_questions.enabled}
                                    loading={loading}
                                    onClick={status => changeStatus(status)}
                                />
                            </List.Item>
                            <List.Item>
                                <List.Item.Meta
                                    title={<span>Permit Questions Upload</span>}
                                    description="Permit a trusted User to contribute to Practice Questions."
                                />
                                <Popover
                                    placement="leftBottom"
                                    trigger="click"
                                    title="Permit User"
                                    content={
                                        <Form
                                            layout="vertical"
                                            onFinish={permitUser}
                                            ref={permitForm}
                                        >
                                            <Form.Item
                                                label="User Email"
                                                name="recipent"
                                                rules={[{ required: true }]}
                                                validateStatus={
                                                    errors.recipent && "error"
                                                }
                                                help={
                                                    errors.recipent &&
                                                    errors.recipent[0]
                                                }
                                                extra="You'll be responsible for User's use of this feature."
                                            >
                                                <Input
                                                    type="email"
                                                    placeholder="User to permit's email"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button
                                                    loading={loading}
                                                    htmlType="Permit"
                                                    type="primary"
                                                >
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                    }
                                >
                                    <Typography.Link>Add User</Typography.Link>
                                </Popover>
                            </List.Item>
                        </React.Fragment>
                    )}
                </List>
            </div>
        </React.Fragment>
    );
};

export default Advanced;
