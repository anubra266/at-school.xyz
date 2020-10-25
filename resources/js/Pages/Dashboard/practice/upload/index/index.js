import React from "react";
import Edit from "@/Pages/Dashboard/practice/upload/shared/edit-index.js";
import Test from "./test";

const index = props => {
    const editProps = { ...props, Test }; 
    return <Edit {...editProps} />;
};
export default index;
