import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Select from "antd/lib/select";
import Typography from "antd/lib/typography";
import message from "antd/lib/message";
import { Inertia } from "@inertiajs/inertia";

const Theme = () => {
    const { auth, settings } = usePage();

    const [theme, setTheme] = useState((settings && settings.preferences && settings.preferences.theme) || 'light')
    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    console.log(theme)
    return (
        <React.Fragment>
            <PageHeader
                title="Theme Settings"
                subTitle="Customize the Appearance"
            ></PageHeader>
            <div style={{ margin: 10 }}>
                <Typography.Title level={4}>Select Theme</Typography.Title>
                <Select defaultValue={theme} style={{ width: 200 }} onChange={handleChange}>
                    <Select.OptGroup label="Light">
                        <Select.Option value="light">Comfortable</Select.Option>
                        <Select.Option value="compact">Compact</Select.Option>
                    </Select.OptGroup>
                    <Select.Option value="dark">Dark</Select.Option>
                </Select>
            </div>
        </React.Fragment>
    );
};

export default Theme;
