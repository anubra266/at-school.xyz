import React from "react";
import { Helmet } from "react-helmet";

import "@/assets/auth/css/util.css"
import "@/assets/auth/css/main.css";

function Layout({ children, title }) {
    return (
        <div>
            <Helmet title={title} />
            {children}
        </div>
    );
}

export default Layout;
