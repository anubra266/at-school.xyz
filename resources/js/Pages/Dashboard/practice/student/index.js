import React from "react";
import Layout from "antd/lib/layout";
import Card from "antd/lib/card";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import Header from "./Header";
const Template = () => {
    return (
        <Dashboardlayout title="Template">
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header />
                <Card></Card>
            </Layout.Content>
        </Dashboardlayout>
    );
};
export default Template;
