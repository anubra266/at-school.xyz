import React, { useState } from "react";
import Layout from "antd/lib/layout";
import Dashboardlayout from "@/Pages/Dashboard/DashboardLayout";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Header from "./edit-header";
import PTest from "@/Helpers/Practice";

const Edit = ({ course, year, Test }) => {
    const [loading, setLoading] = useState(false);
    const { questions } = year;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const question = questions[currentQuestion];
    const PTesti = new PTest(setLoading, question);
    const deletequestion = () => {
        PTesti.deletequestion();
    };
    const testProps = {
        course,
        year,
        PTesti,
        loading,
        currentQuestion,
        setCurrentQuestion,
        questions,
        deletequestion
    };
    var is_new = currentQuestion === questions.length;

    const headerProps = {
        course,
        year,
        question,
        is_new,
        PTesti,
        loading
    };
    return (
        <Dashboardlayout title={`Edit year ${year.year}, ${course.name}`}>
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header {...headerProps} />
                <Test {...testProps} />
            </Layout.Content>
        </Dashboardlayout>
    );
};
export default Edit;
