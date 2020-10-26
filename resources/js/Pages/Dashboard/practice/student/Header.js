import React from "react";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";

const Header = () => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={
                    window.history.length > 1 && (() => window.history.back())
                }
                title="Title"
                subTitle="This is a subtitle"
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>
                ]}
            ></PageHeader>
        </div>
    );
};

export default Header;
