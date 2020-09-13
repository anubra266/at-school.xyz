import React from "react";
import { usePage } from "@inertiajs/inertia-react";

const Assets = () => {
    const { theme } = usePage();
    const mode = theme;
    switch (mode) {
        case "light":
            require("antd/dist/antd.css");
            break;
        case "dark":
            require("antd/dist/antd.dark.css");
            require("@/assets/general/css/ckeditor-dark.css");
            break;
        case "compact":
            require("antd/dist/antd.compact.css");
            break;

        default:
            require("antd/dist/antd.css");
            break;
    }
    return <React.Fragment></React.Fragment>;
};
export default Assets;
