import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import List from "antd/lib/list";
import Typography from "antd/lib/typography";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import message from "antd/lib/message";
import { Inertia } from "@inertiajs/inertia";

const Security = () => {
    const { auth, errors } = usePage();
    const { user } = auth;
    const settings = [
        {
            id: 0,
            title: 'Account Password',
            description: '***********'
        }
    ]
    return (
        <React.Fragment>
            <PageHeader
                title="Security Settings"
                subTitle="Customize the Appearance"
            ></PageHeader>
            <div style={{ margin: 20 }}>
                <List
                    dataSource={settings}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <List.Item.Meta
                                title={item.title}
                                description={item.description}
                            />
                            <Typography.Link>Modify</Typography.Link>
                        </List.Item>
                    )}
                >
                </List>
            </div>
        </React.Fragment>
    );
};

export default Security;
