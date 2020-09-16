import { usePage } from "@inertiajs/inertia-react";

const useAssets = () => {
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
    return mode;
};
export default useAssets;
