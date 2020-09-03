import React from "react";
import PageHeader from "antd/lib/page-header";
import Descriptions from "antd/lib/descriptions";
import Button from "antd/lib/button";
import SettingFilled from "@ant-design/icons/SettingFilled";
import Main from "@/Helpers/Main";

const header = ({ test }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title={test.title}
                subTitle="Edit Assessment"
                extra={[
                    <Button icon={<SettingFilled />} key="header-edit">
                        Test Settings
                    </Button>,
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
                    <Descriptions.Item label="Max Score">
                        {test.total_score}
                    </Descriptions.Item>
                </Descriptions>
            </PageHeader>
        </div>
    );
};

export default header;
