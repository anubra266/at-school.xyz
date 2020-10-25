import React from "react";
import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";

const Header = ({ course, toggleYear }) => {
    return (
        <div className="site-page-header-ghost-wrapper">
            <PageHeader
                ghost={false}
                onBack={
                    window.history.length > 1 && (() => window.history.back())
                }
                title={course.name}
                subTitle="Contribute Questions by year"
                extra={[
                    <Button onClick={toggleYear} key="1" type="primary">
                        Add Year
                    </Button>
                ]}
            ></PageHeader>
        </div>
    );
};

export default Header;
