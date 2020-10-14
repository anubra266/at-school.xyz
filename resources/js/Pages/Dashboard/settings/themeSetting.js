import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import Select from "antd/lib/select";
import Typography from "antd/lib/typography";
import message from "antd/lib/message";
import { Inertia } from "@inertiajs/inertia";

const Theme = () => {
    const { settings } = usePage();
    const initial_theme = (settings && settings.preferences && JSON.parse(settings.preferences).theme)
    const [theme, setTheme] = useState(initial_theme || 'light')
    const [loading, setLoading] = useState(false)
    function handleChange(value) {
        setTheme(value)
        setLoading(true)
        Inertia.patch(route('settings.theme'), { theme: value }).then(() => {
            setLoading(false)
            message.loading('Applying theme...')
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        })
    }
    return (
        <React.Fragment>
            <PageHeader
                title="Theme Settings"
                subTitle="Customize the Appearance"
            ></PageHeader>
            <div style={{ margin: 10 }}>
                <Typography.Title level={5}>Select Theme</Typography.Title>
                <Select defaultValue={theme} loading={loading} disabled={loading} style={{ width: 200 }} onChange={handleChange}>
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
