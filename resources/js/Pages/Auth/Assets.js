import React from "react";
import { useEffectOnce } from "react-use";
import LoadingBar from "react-top-loading-bar";
import { loadPage } from "@/Helpers/PageLoad";

import "@/assets/auth/css/util.css";
import "@/assets/auth/css/main.css";

function Assets({ children, pageLoader }) {

    loadPage(pageLoader);
    useEffectOnce(() => {
        //*complete pageLoader loading
        pageLoader && pageLoader.current.complete(); 
    });
    return (
        <React.Fragment>
            <LoadingBar color="white" ref={pageLoader} waitingTime={1000} />
            {children}
        </React.Fragment>
    );
}

export default Assets;
