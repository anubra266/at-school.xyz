import React from "react";
import { useEffectOnce } from "react-use";
import LoadingBar from "react-top-loading-bar";
import { loadPage } from "@/Helpers/PageLoad";

import "@/assets/auth/css/style.css";
import "@/assets/auth/css/icons.css";

function Assets({ children, pageLoader }) {
    //* Start page Load on Navigator Change
    loadPage(pageLoader);
    useEffectOnce(() => {
        //*complete pageLoader loading
        pageLoader && pageLoader.current.complete();
    });
    return (
        <React.Fragment>
            <LoadingBar color="#626ed4" ref={pageLoader} waitingTime={1000} height={4} />
            {children}
        </React.Fragment>
    );
}

export default Assets;
