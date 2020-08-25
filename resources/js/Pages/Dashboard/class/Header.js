import React from "react";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";

const Header = ({ showDrawer }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Classes"
                subTitle="Classes you partake in"
                extra={[
                    <Button
                        onClick={showDrawer}
                        key="title-create"
                        type="primary"
                    >
                        Join New Classroom
                    </Button>
                ]}
            ></PageHeader>
        </div>
    );
};

export default Header;
