import { usePage } from "@inertiajs/inertia-react";

const useAssets = () => {
    const { theme } = usePage();
    const mode = theme;
    switch (mode) {
        case "light":
            require("@/assets/antd/antd.css");
            break;
        case "dark":
            // require("antd/dist/antd.dark.less");
            require("@/assets/antd/antd.dark.css");
            require("@/assets/general/css/ckeditor-dark.css");
            break;
        case "compact":
            require("@/assets/antd/antd.compact.css");
            break;

        default:
            require("@/assets/antd/antd.css");
            break;
    }
    return mode;
};
export default useAssets;
