import React from "react";
import PageHeader from "antd/lib/page-header";
import Descriptions from "antd/lib/descriptions";
import Button from "antd/lib/button";
import Popover from "antd/lib/popover";
import EduTheoryForm from "../EduTheoryForm";
import Main from "@/Helpers/Main";

const header = ({ test, classroom }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={test.title}
                subTitle="Edit Theory Assessment"
                extra={[
                    <Popover
                        key="header-edit"
                        placement="bottom"
                        title={"Edit Test Settings"}
                        trigger="click"
                        content={
                            <EduTheoryForm edit={test} classroom={classroom} />
                        }
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

export default header;
