import React from "react";
import Layout from "antd/lib/layout";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";
import Empty from "antd/lib/empty";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Popover from "antd/lib/popover";
import Typography from "antd/lib/typography";

import DownloadOutlined from "@ant-design/icons/DownloadOutlined";
import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import FilePdfOutlined from "@ant-design/icons/FilePdfOutlined";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import MembersList from "./MembersList";
const { Content } = Layout;
const members = ({ classroom, members }) => {
    return (
        <Workspacelayout title={classroom.name} classroom={classroom}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        ghost={false}
                        onBack={() => window.history.back()}
                        title="Members"
                        subTitle={classroom.name}
                        extra={[
                            <Popover
                                key="2"
                                content={export_content}
                                title="Export Members"
                                trigger="click"
                                placement="leftBottom"
                            >
                                <Button>
                                    <DownloadOutlined />
                                    Export
                                </Button>
                            </Popover>,
                            <Invite key="header" {...classroom} />
                        ]}
                    ></PageHeader>
                </div>
                <MembersList members={members} classroom={classroom} />
                {members.length === 0 && (
                    <Empty description={<span>No Students found!</span>}>
                        <Invite key="empty" {...classroom} />
                    </Empty>
                )}
            </Content>
        </Workspacelayout>
    );
};
export default members;

const export_content = (
    <Row>
        <Col span={8}>
            <FileExcelOutlined style={{ fontSize: "40px" }} />
            <br />
            Excel
        </Col>
        <Col span={8} offset={8}>
            <FilePdfOutlined style={{ fontSize: "40px" }} />
            <br />
            PDF
        </Col>
    </Row>
);
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
