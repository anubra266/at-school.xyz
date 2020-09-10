import React from "react";
import Edit from "@/Pages/Workspace/tests/shared/edit-index.js";
import Test from "./test";
const index = ({ classroom, test }) => {
    const editProps = { test, classroom, Test };
    return <Edit {...editProps} />;
};
export default index;
