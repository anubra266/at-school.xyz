import React, { useRef, useState, useEffect } from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Empty from "antd/lib/empty";

import Card from "antd/lib/card";
import Popover from "antd/lib/popover";
import Typography from "antd/lib/typography";
import { usePage } from "@inertiajs/inertia-react";

import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";

import Export from "@/Shared/export";
import MembersList from "./MembersList";
const { Content } = Layout;
const members = ({ classroom, members }) => {
    const { auth } = usePage().props;
    const [prop, setProp] = useState({ result: [], model: [] });
    return (
        <Workspacelayout title={classroom.name} classroom={classroom}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title="Members"
                        subTitle={classroom.name}
                        extra={[
                            <React.Fragment key="export">
                                {auth.user.can.Classrooms && (
                                    <Export
                                        name={`${classroom.name}-members`}
                                        list={prop.result}
                                        model={prop.model}
                                    />
                                )}
                            </React.Fragment>,
                            <Invite key="header" {...classroom} />
                        ]}
                    ></PageHeader>
                </div>
                <Card>
                    <MembersList
                        setProp={setProp}
                        members={members}
                        classroom={classroom}
                    />

                    {members.length === 0 && (
                        <Empty description={<span>No Students found!</span>}>
                            <Invite key="empty" {...classroom} />
                        </Empty>
                    )}
                </Card>
            </Content>
        </Workspacelayout>
    );
};
export default members;

const Invite = classroom => {
    return (
        <Popover
            key="1"
            content={
                <Typography.Paragraph copyable>
                    {classroom.code}
                </Typography.Paragraph>
            }
            placement="leftBottom"
            title="Classroom Code"
            trigger="click"
        >
            <Button type="primary">Invite</Button>
        </Popover>
    );
};
