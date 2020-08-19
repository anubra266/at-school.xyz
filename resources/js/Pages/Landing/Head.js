import React from "react";
import { Helmet } from "react-helmet";

function Head() {
    return (
        <Helmet title="at-School Home">
            <body
                data-spy="scroll"
                data-target=".site-navbar-target"
                data-offset="300"
            ></body>
        </Helmet>
    );
}

export default Head;
