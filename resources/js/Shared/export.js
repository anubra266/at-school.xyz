import React from "react";

import Popover from "antd/lib/popover";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import DownloadOutlined from "@ant-design/icons/DownloadOutlined";
import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import FilePdfOutlined from "@ant-design/icons/FilePdfOutlined";

const Export = () => {
    return (
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
        </Popover>
    );
};

export default Export;

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
