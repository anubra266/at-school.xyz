import React from "react";
import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import PageHeader from "antd/lib/page-header";
import Descriptions from "antd/lib/descriptions";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
const { Content } = Layout;

const Home = ({ classroom, id }) => {
    return (
        <Workspacelayout title={classroom.name} classroom={id}>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-page-header-ghost-wrapper">
                    <PageHeader
                        className="site-page-header"
                        onBack={() => window.history.back()}
                        title={classroom.name}
                        subTitle={classroom.environ.name}
                    ></PageHeader>

                </div>
            </Content>
        </Workspacelayout>
    );
};
export default Home;
