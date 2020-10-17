import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import PageHeader from "antd/lib/page-header";
import Select from "antd/lib/select";
import Typography from "antd/lib/typography";
import List from "antd/lib/list";
import message from "antd/lib/message";
import { Inertia } from "@inertiajs/inertia";
import Main from "@/Helpers/Main";

const Theme = () => {
    const { settings } = usePage();
    const initial_theme = (settings && settings.preferences && settings.preferences.theme)
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
            <div style={{ marginLeft: 20, marginRight: 20 }}>
                <List>
                    <List.Item>
                        <List.Item.Meta
                            title={`Website Theme - (${Main.fCap(theme)})`}
                            description="Customize the look and feel of the site."
                        />
                        <Select defaultValue={theme} loading={loading} disabled={loading} style={{ width: 200 }} onChange={handleChange}>
                            <Select.OptGroup label="Light">
                                <Select.Option value="light">Comfortable</Select.Option>
                                <Select.Option value="compact">Compact</Select.Option>
                            </Select.OptGroup>
                            <Select.Option value="dark">Dark</Select.Option>
                        </Select>
                    </List.Item>
                </List>
            </div>
        </React.Fragment>
    );
};

export default Theme;
