import React, { useState } from "react";
import PageHeader from "antd/lib/page-header";
import Descriptions from "antd/lib/descriptions";
import Button from "antd/lib/button";
import Popover from "antd/lib/popover";
import Tooltip from "antd/lib/tooltip";
import Main from "@/Helpers/Main";
import Solution from "./solution";

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
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={window.history.length > 1 && (() => window.history.back())}
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
                        <Solution {...solutionProps} />
                    </Tooltip>
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
            </PageHeader>
        </div>
    );
};

export default EditHeader;
