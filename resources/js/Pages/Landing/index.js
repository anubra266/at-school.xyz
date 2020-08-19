import React, { Suspense } from "react";
const Landing = React.lazy(() => import("./Landing"));
import Loading from "@/Shared/Loading";
import CatchError from "@/Helpers/CatchError";
const index = () => {
    return (
        <CatchError>
            <Suspense fallback={<Loading />}>
                <Landing />
            </Suspense>
        </CatchError>
    );
};
export default index;
