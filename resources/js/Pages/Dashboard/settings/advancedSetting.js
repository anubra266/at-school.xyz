import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import List from "antd/lib/list";
import Typography from "antd/lib/typography";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import message from "antd/lib/message";
import { Inertia } from "@inertiajs/inertia";

const Advanced = () => {
    const { auth, errors } = usePage();
    const { user } = auth;
    return (
        <React.Fragment>
            <PageHeader
                title="Advanced Settings"
                subTitle="Customize the Appearance"
            ></PageHeader>
            <div style={{ marginLeft: 20, marginRight: 20  }}> 
                <List>
                    <List.Item>
                        <List.Item.Meta
                            title={<span>Practice Questions -  <b>(Disabled)</b> </span>}
                            description="Update questions for Students personal practice."
                        />
                        <Typography.Link>Enable</Typography.Link>
                    </List.Item>
                </List>
            </div>
        </React.Fragment>
    );
};

export default Advanced;
