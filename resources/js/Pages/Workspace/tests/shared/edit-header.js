import React from "react";
import PageHeader from "antd/lib/page-header";
import Descriptions from "antd/lib/descriptions";
import Button from "antd/lib/button";
import Popover from "antd/lib/popover";
import Main from "@/Helpers/Main";

const EditHeader = ({ test, classroom, form }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={test.title}
                subTitle="Edit Objective Assessment"
                extra={[
                    <Popover
                        key="header-edit"
                        placement="bottom"
                        title={"Edit Test Settings"}
                        trigger="click"
                        content={<form edit={test} classroom={classroom} />}
                    >
                        <Button>Test Settings</Button>
                    </Popover>,
                    <Button key="solution" type="primary">
                        Add Solution
                    </Button>
                ]}
            >
                <Descriptions size="small" column={3}>
                    <Descriptions.Item label="Start Time">
                        {Main.human_date(test.start_time)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Deadline">
                        {Main.human_date(test.deadline)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Duration">
                        {test.duration} minutes
                    </Descriptions.Item>
                    <Descriptions.Item label="Questions">
                        {test.questions.length}
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    );
};

export default EditHeader;
