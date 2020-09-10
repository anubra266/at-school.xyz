import React from "react";
import Edit from "@/Pages/Workspace/tests/shared/edit-index.js";
import Test from "./test";
import TestForm from "../EduObjForm";

const index = ({ classroom, test }) => {
    const editProps = { test, classroom, Test, TestForm, type: "objective" };
    return <Edit {...editProps} />;
};
export default index;
