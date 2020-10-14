import { usePage } from "@inertiajs/inertia-react";

const useAssets = () => {
    const { settings } = usePage();
    const mode = (settings && settings.preferences && JSON.parse(settings.preferences).theme);
    switch (mode) {
        case "light":
            require("@/assets/antd/antd.css");
            break;
        case "dark":
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
