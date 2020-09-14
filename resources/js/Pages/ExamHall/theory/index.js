import React from "react";
import Layout from "antd/lib/layout";
import Halllayout from "@/Pages/ExamHall/HallLayout/";

import PageHeader from "antd/lib/page-header";
import Button from "antd/lib/button";

const { Content } = Layout;

const Index = props => {
    const { classroom, test } = props;
    return (
        <Halllayout {...props}>
            <Content style={{ margin: "0 16px" }}>

            </Content>
        </Halllayout>
    );
};
export default Index;
