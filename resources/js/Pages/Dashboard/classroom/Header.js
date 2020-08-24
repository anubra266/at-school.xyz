import React from "react";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";

const Header = ({ showDrawer }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Classrooms"
                subTitle="Classrooms you educate"
                extra={[
                    <Button key="title-export">Export List</Button>,
                    <Button
                        onClick={showDrawer}
                        key="title-create"
                        type="primary"
                    >
                        Create
                    </Button>
                ]}
            ></PageHeader>
        </div>
    );
};

export default Header;
