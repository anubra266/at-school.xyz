import React from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import PageHeader from "antd/lib/page-header";
import Descriptions from "antd/lib/descriptions";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
const { Content } = Layout;
import Stats from "./stats";

const Home = ({ classroom }) => {
    return (
        <Workspacelayout title={classroom.name} classroom={classroom}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        className="site-page-header"
                        onBack={
                            window.history.length > 1 &&
                            (() => window.history.back())
                        }
                        title={classroom.name}
                        subTitle={classroom.environ.name}
                    ></PageHeader>
                </div>
                <Row gutter={[16, 16]}>
                    <Stats classroom={classroom} />
                </Row>
            </Content>
        </Workspacelayout>
    );
};
export default Home;
