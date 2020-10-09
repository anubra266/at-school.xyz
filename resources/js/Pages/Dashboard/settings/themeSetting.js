import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import message from "antd/lib/message";
import { Inertia } from "@inertiajs/inertia";

const Theme = () => {
    const { auth, errors } = usePage();
    const { user } = auth;
    return (
        <React.Fragment>
            <PageHeader
                title="Theme Settings"
                subTitle="Customize the Appearance"
            ></PageHeader>
        </React.Fragment>
    );
};

export default Theme;
