import { useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";

export const useSmoothRefresh = refreshTime => {
    const refresh = () => {
        Inertia.reload();
    };
    useEffect(() => {
        const refresher = setInterval(refresh, refreshTime);
        return () => {
            clearInterval(refresher);
        };
    }, []);
};
