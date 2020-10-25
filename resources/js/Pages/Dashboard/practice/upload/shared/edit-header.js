import React, { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import PageHeader from "antd/lib/page-header";
import Descriptions from "antd/lib/descriptions";
import Button from "antd/lib/button";
import Popover from "antd/lib/popover";
import Tooltip from "antd/lib/tooltip";
import Upload from "antd/lib/upload";
import message from "antd/lib/message";
import Main from "@/Helpers/Main";
import Solution from "./solution";

import { uploadQuestions } from "./import";

const EditHeader = ({ course, year, question, is_new, PTesti, loading }) => {
    const [visible, setVisible] = useState(false);

    // const solutionProps = {
    //     question,
    //     is_new,
    //     PTesti,
    //     visible,
    //     setVisible,
    //     loading
    // };

    const [fileList, updateFileList] = useState([]);
    const uploadProps = {
        action: "#",
        fileList,
        beforeUpload: file => {
            const allowedExtensions = [".xlsx", ".xls", ".csv", ".ods"];
            const fileExtension = file.name.substr(file.name.lastIndexOf("."));
            const fileIsAllowed = allowedExtensions.includes(fileExtension);
            if (!fileIsAllowed) {
                message.error(`${file.name} is not a valid spreadsheet file.`);
            } else {
                //just pass the fileObj as parameter
                ExcelRenderer(file, (err, resp) => {
                    if (err) {
                        message.error(`An error occured. Try again.`);
                        return false;
                    } else {
                        const questions = resp.rows;
                        // uploadQuestions(questions, file, test, classroom);
                    }
                });
            }
            return false;
        },
        onChange: () => {
            // file.status is empty when beforeUpload return false
            updateFileList([]);
        }
    };

    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={
                    window.history.length > 1 && (() => window.history.back())
                }
                title={`Year ${year.year}`}
                subTitle={`${course.name}`}
                extra={[
                    <Tooltip
                        key="solution"
                        title={
                            is_new
                                ? "Save Question First"
                                : "Give extensive explanation"
                        }
                    >
                        <Button
                            type="primary"
                            onClick={() => setVisible(true)}
                            disabled={is_new}
                        >
                            Add Solution
                        </Button>
                    </Tooltip>
                    // <Solution key="soleditor" {...solutionProps} />
                ]}
            >
                <Descriptions size="small">
                    <Descriptions.Item label="Questions">
                        {year.questions.length}
                    </Descriptions.Item>
                </Descriptions>
                <Tooltip key="import" title="Leave first row Empty">
                    <Upload {...uploadProps}>
                        <Button type="primary">Import from Excel</Button>
                    </Upload>
                </Tooltip>
            </PageHeader>
        </div>
    );
};

export default EditHeader;
