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

const EditHeader = ({
    test,
    classroom,
    TestForm,
    type,
    question,
    is_new,
    PTesti,
    loading
}) => {
    const [visible, setVisible] = useState(false);

    const solutionProps = {
        question,
        is_new,
        PTesti,
        visible,
        setVisible,
        loading
    };

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
                        uploadQuestions(questions, file, test, classroom);
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
                title={test.title}
                subTitle={`Edit ${type} Assessment`}
                extra={[
                    <Popover
                        key="header-edit"
                        placement="bottom"
                        title={"Edit Test Settings"}
                        trigger="click"
                        content={<TestForm edit={test} classroom={classroom} />}
                    >
                        <Button>Test Settings</Button>
                    </Popover>,
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
                    </Tooltip>,
                    <Solution key="soleditor" {...solutionProps} />
                ]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Start Time">
                        {Main.human_date(test.start_time)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Deadline">
                        {Main.human_date(test.deadline)}
                    </Descriptions.Item>
                    {test.duration && (
                        <Descriptions.Item label="Duration">
                            {test.duration} minutes
                        </Descriptions.Item>
                    )}
                    <Descriptions.Item label="Questions">
                        {test.questions.length}
                    </Descriptions.Item>
                </Descriptions>
                {type === "objective" && (
                    <Tooltip key="import" title="Leave first row Empty">
                        <Upload {...uploadProps}>
                            <Button type="primary">Import from Excel</Button>
                        </Upload>
                    </Tooltip>
                )}
            </PageHeader>
        </div>
    );
};

export default EditHeader;
