import React, { createContext, useContext } from "react";

import Popover from "antd/lib/popover";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import DownloadOutlined from "@ant-design/icons/DownloadOutlined";
import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import FilePdfOutlined from "@ant-design/icons/FilePdfOutlined";

import Workbook from "react-excel-workbook";

const ExportContext = createContext();
const Export = props => {
    console.log(props.list);
    console.log(props.model);
    return (
        <ExportContext.Provider value={props}>
            <Popover
                key="2"
                content={<ExportContent />}
                title="Export Members"
                trigger="click"
                placement="leftBottom"
            >
                <Button>
                    <DownloadOutlined />
                    Export
                </Button>
            </Popover>
        </ExportContext.Provider>
    );
};

export default Export;

const ExportContent = () => {
    return (
        <Row>
            <Col span={8}>
                <ExcelExport>
                    <FileExcelOutlined
                        style={{ fontSize: "40px", cursor: "pointer" }}
                    />
                    <br />
                    Excel
                </ExcelExport>
            </Col>
            <Col span={8} offset={8}>
                <FilePdfOutlined
                    style={{ fontSize: "40px", cursor: "pointer" }}
                />
                <br />
                PDF
            </Col>
        </Row>
    );
};

const ExcelExport = ({ children }) => {
    const props = useContext(ExportContext);
    const { name, list, model } = props;
    console.log(list);
    console.log(model);
    return (
        <Workbook filename={`${name}.xlsx`} element={children}>
            <Workbook.Sheet data={list} name="members">
                {model.map((ins, key) => (
                    <Workbook.Column
                        key={key}
                        label={ins.label}
                        value={ins.value}
                    />
                ))}
            </Workbook.Sheet>
        </Workbook>
    );
};
