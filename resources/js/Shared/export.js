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
                            "Loading document..."
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
            <Page size="letter">
                <View style={styles.title}>
                    <Text>{props.name}</Text>
                </View>
                <View style={styles.table}>
                    <View style={styles.cl}>
                        <Text>Eddard Stark</Text>
                    </View>
                    <View style={styles.cl}>
                        <Text>Has a sword named Ice</Text>
                    </View>
                    <View style={styles.cl}>
                        <Text>No direwolf</Text>
                    </View>
                    <View style={styles.cl}>
                        <Text>Lord of Winterfell</Text>
                    </View>

                    <View style={styles.cl}>
                        <Text>Jon Snow</Text>
                    </View>
                    <View style={styles.cl}>
                        <Text>Has a sword named Longclaw</Text>
                    </View>
                    <View style={styles.cl}>
                        <Text>Direwolf: Ghost</Text>
                    </View>
                    <View style={styles.cl}>
                        <Text>Knows nothing</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        marginTop: "20px",
        fontWeight: 700
    },
    table: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        margin: "30px 30px",
        padding: 0
    },
    cl: {
        boxSizing: "border-box",
        flexGrow: 1,
        padding: "0.8em 1.2em",
        overflow: "hidden",
        listStyle: "none",
        border: "solid 1px black",
        width: "33.33%"
    }
});
