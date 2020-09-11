import React, { useState } from "react";
import Layout from "antd/lib/layout";
import Workspacelayout from "@/Pages/Workspace/WorkspaceLayout";
import Header from "./edit-header";
import PTest from "@/Helpers/PostTest";

const Edit = ({ classroom, test, Test, TestForm, type }) => {
    const [loading, setLoading] = useState(false);
    const { questions } = test;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const question = questions[currentQuestion];
    const PTesti = new PTest(setLoading, classroom, question, type);
    const deletequestion = () => {
        PTesti.deletequestion();
    };
    const testProps = {
        test,
        PTesti,
        loading,
        currentQuestion,
        setCurrentQuestion,
        questions,
        deletequestion
    };
    var is_new = currentQuestion === questions.length;

    const headerProps = {
        test,
        classroom,
        TestForm,
        type,
        question,
        is_new,
        PTesti,
        loading
    };
    return (
        <Workspacelayout
            title={`Edit ${test.title} - ${classroom.name}`}
            classroom={classroom}
        >
            <Layout.Content style={{ margin: "0 16px" }}>
                <Header {...headerProps} />
                <Test {...testProps} />
            </Layout.Content>
        </Workspacelayout>
    );
};
export default Edit;
