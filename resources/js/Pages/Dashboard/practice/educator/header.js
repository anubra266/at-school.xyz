import React from "react";
import PageHeader from "antd/lib/page-header"
import Button from "antd/lib/button";

const Header = ({ toggleCat }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={
                    window.history.length > 1 && (() => window.history.back())
                }
                title="Practice Zone"
                subTitle="Contribute Questions"
                extra={[
                    <Button key="1" type="primary" onClick={toggleCat}>
                        Create Category
                    </Button>
                ]}
            ></PageHeader>
        </div>
    );
};

export default Header;
