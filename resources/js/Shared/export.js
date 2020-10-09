import React, { createContext, useContext } from "react";

import Popover from "antd/lib/popover";
import Button from "antd/lib/button";
import Row from "antd/lib/row";
import Col from "antd/lib/col";

import DownloadOutlined from "@ant-design/icons/DownloadOutlined";
import FileExcelOutlined from "@ant-design/icons/FileExcelOutlined";
import FilePdfOutlined from "@ant-design/icons/FilePdfOutlined";

import Workbook from "react-excel-workbook";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const ExportContext = createContext();
const Export = props => {
    return (
        <ExportContext.Provider value={props}>
            <Popover
                key="2"
                content={<ExportContent {...props} />}
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
    const props = useContext(ExportContext);

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
                <PDFDownloadLink
                    fileName={`${props.name}.pdf`}
                    document={<PdfDocument {...props} />}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? (
                            "Wait..."
                        ) : (
                            <span>
                                <FilePdfOutlined
                                    style={{
                                        fontSize: "40px",
                                        cursor: "pointer"
                                    }}
                                />
                                <br />
                                PDF
                            </span>
                        )
                    }
                </PDFDownloadLink>
            </Col>
        </Row>
    );
};

const ExcelExport = ({ children }) => {
    const props = useContext(ExportContext);
    const { name, list, model } = props;
    return (
        <Workbook filename={`${name}.xlsx`} element={children}>
            <Workbook.Sheet data={list} name={name}>
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

const PdfDocument = props => {
    return (
        <Document>
            <Page size="A4">
                <View style={styles.title}>
                    <Text>{props.name}</Text>
                </View>
                <View style={styles.table}>
                    {props.list.map((item, sn) => {
                        return (
                            <View style={styles.tr}>
                                <Text>{sn + 1}. </Text>
                                {props.model.map((m, key) => {
                                    return (
                                        <View>
                                            <Text style={styles.text}>
                                                <Text>{m.label}</Text> -{" "}
                                                {item[m.value]}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </View>
                        );
                    })}
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginTop: "20px",
        fontWeight: 200
    },
    table: {
        margin: "30px 30px"
    },
    tr: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        flexWrap: "wrap"
    },
    text: {
        padding: "5px 5px",
        fontSize: 12
    }
});
